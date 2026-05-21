import "./globals.css";
import "./style.css"

export const metadata = {
  metadataBase: new URL("https://certx.com"),
  title: {
    default: "CertX | AI-Powered GRC & Cybersecurity Compliance Platform",
    template: "%s | CertX",
  },
  description:
    "CertX is an enterprise AI-powered Governance, Risk & Compliance (GRC) platform by SS IntelligenceX Global Services Pvt Ltd. Automate compliance workflows, manage cyber risk, and achieve Zero Trust security across NIST, SOC 2, HIPAA, GDPR, ISO 27001, and PCI DSS frameworks.",
  keywords: [
    "GRC Platform",
    "Governance Risk Compliance",
    "AI Governance",
    "Cybersecurity Compliance",
    "Zero Trust",
    "Risk Management",
    "Third Party Risk",
    "Enterprise Compliance",
    "Security Governance",
    "Regulatory Compliance",
    "CertX",
    "SS IntelligenceX Global Services",
    "NIST compliance",
    "SOC 2 automation",
    "HIPAA compliance",
    "GDPR compliance",
    "ISO 27001",
    "PCI DSS",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://certx.com",
    siteName: "CertX",
    title: "CertX | AI-Powered GRC & Cybersecurity Compliance Platform",
    description:
      "Automate governance, risk, and compliance with CertX — the enterprise platform trusted by security-first organizations to streamline NIST, SOC 2, HIPAA, GDPR, ISO 27001, and PCI DSS compliance.",
    images: [
      {
        url: "/certx-logo.png",
        width: 1200,
        height: 630,
        alt: "CertX — AI-Powered GRC & Cybersecurity Compliance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CertX | AI-Powered GRC & Cybersecurity Compliance Platform",
    description:
      "Enterprise AI-powered Governance, Risk & Compliance platform. Automate compliance, manage cyber risk, and strengthen security governance across all major frameworks.",
    images: ["/certx-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/certx-logo.png",
    shortcut: "/certx-logo.png",
    apple: "/certx-logo.png",
  },
  alternates: {
    canonical: "https://certx.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased c54cm ctzj3 cp877 cbh0c scroll-smooth">
        <div className="clfoz cwkat cg9hr citnk">
          {children}
        </div>
      </body>
    </html>
  );
}
