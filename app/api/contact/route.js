import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateLimitStore = globalThis.__contactRateLimitStore ?? new Map();
globalThis.__contactRateLimitStore = rateLimitStore;

const FIELD_LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 30,
  company: 120,
  message: 2000,
};

function jsonResponse(body, status) {
  return NextResponse.json(body, { status });
}

function sanitizeText(value, maxLength) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function sanitizeMessage(value, maxLength) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, " ")
    .replace(/\r\n/g, "\n")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateContactPayload(payload) {
  const data = {
    firstName: sanitizeText(payload.firstName, FIELD_LIMITS.firstName),
    lastName: sanitizeText(payload.lastName, FIELD_LIMITS.lastName),
    email: sanitizeText(payload.email, FIELD_LIMITS.email).toLowerCase(),
    phone: sanitizeText(payload.phone, FIELD_LIMITS.phone),
    company: sanitizeText(payload.company, FIELD_LIMITS.company),
    message: sanitizeMessage(payload.message, FIELD_LIMITS.message),
  };

  const errors = {};

  if (!data.firstName) errors.firstName = "First name is required.";
  if (!data.lastName) errors.lastName = "Last name is required.";
  if (!data.email) errors.email = "Email is required.";
  if (!data.phone) errors.phone = "Phone number is required.";
  if (!data.message) errors.message = "Message is required.";

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (data.phone && !/^[0-9+()\-\s.]{7,30}$/.test(data.phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  return {
    data,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      retryAfter: Math.ceil((current.resetAt - now) / 1000),
    };
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return { allowed: true };
}

function assertEmailConfig() {
  const required = ["EMAIL_USER", "EMAIL_PASS", "CONTACT_RECEIVER"];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing email environment variables: ${missing.join(", ")}`);
  }
}

function createTransporter() {
  assertEmailConfig();

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

function buildEmail({ data, ip, userAgent, submittedAt }) {
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const company = data.company || "Not provided";

  const text = [
    "New Contact Form Submission",
    "",
    `Name: ${fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Company: ${company}`,
    `Message: ${data.message}`,
    "",
    `Submitted At: ${submittedAt}`,
    `User Agent: ${userAgent}`,
    `IP Address: ${ip}`,
  ].join("\n");

  const rows = [
    ["Name", fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Company", company],
    ["Message", data.message],
    ["Submitted At", submittedAt],
    ["User Agent", userAgent],
    ["IP Address", ip],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;font-weight:700;vertical-align:top;border-bottom:1px solid #e5e7eb;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;white-space:pre-wrap;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
      <h2 style="margin:0 0 16px;">New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;border:1px solid #e5e7eb;">
        ${htmlRows}
      </table>
    </div>
  `;

  return {
    from: `"Certx Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: data.email,
    subject: `New Contact Request - ${fullName}`,
    text,
    html,
  };
}

export async function POST(request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return jsonResponse(
      {
        ok: false,
        message: "Too many contact requests. Please try again later.",
      },
      429
    );
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse(
      { ok: false, message: "Invalid request body." },
      400
    );
  }

  const { data, errors, isValid } = validateContactPayload(payload);

  if (!isValid) {
    return jsonResponse(
      {
        ok: false,
        message: "Please correct the highlighted fields.",
        errors,
      },
      422
    );
  }

  try {
    const userAgent = sanitizeText(
      request.headers.get("user-agent") || "unknown",
      500
    );
    const submittedAt = new Date().toISOString();
    const transporter = createTransporter();
    const mailOptions = buildEmail({ data, ip, userAgent, submittedAt });

    await transporter.sendMail(mailOptions);

    return jsonResponse(
      {
        ok: true,
        message: "Your request was sent successfully.",
      },
      200
    );
  } catch (error) {
    console.error("Contact form email failed:", error);

    return jsonResponse(
      {
        ok: false,
        message: "We could not send your request right now. Please try again later.",
      },
      500
    );
  }
}
