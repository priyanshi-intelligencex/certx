'use client'
import React, { useRef, useState } from "react";
import Image from "next/image";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimeoutRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    window.clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = window.setTimeout(() => setToast(null), 5000);
  };

  const validateForm = () => {
    const requiredFields = ["firstName", "lastName", "email", "phone", "message"];
    const hasMissingField = requiredFields.some(
      (field) => !formData[field].trim()
    );

    if (hasMissingField) {
      return "Please fill in all required fields.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!/^[0-9+()\-\s.]{7,30}$/.test(formData.phone.trim())) {
      return "Please enter a valid phone number.";
    }

    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const validationError = validateForm();
    if (validationError) {
      showToast("error", validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        throw new Error(
          result?.message || "Unable to submit your request. Please try again."
        );
      }

      setFormData(initialFormState);
      showToast("success", "Your request was sent successfully.");
    } catch (error) {
      showToast(
        "error",
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page cih8s">
      {toast && (
        <div
          className={`contact-toast contact-toast-${toast.type}`}
          role={toast.type === "error" ? "alert" : "status"}
          aria-live={toast.type === "error" ? "assertive" : "polite"}
        >
          {toast.message}
        </div>
      )}

      <section className="c4lt2">
        <div className="c7rlc c4lt2 ca7yh cxk7g c62s6">
          <div className="cjqw8 cmma3 cpwbp c8230">

            {/* Page Header */}
            <div className="c0adw cpqxv cxk7g cpwbp">

              <h1 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c3myr">
                Contact Us
              </h1>

              <p className="c16mo c4cae cy32n">
                Whether you’re a small business or a large enterprise,
                we’ve got you covered every step of the way.
              </p>

            </div>

            {/* Contact Form */}
            <div className="cgx5u cxk7g">

              <form onSubmit={handleSubmit}>

                <div className="cz7x6">

                  {/* Name */}
                  <div className="contact-two-col">

                    <div>
                      <label
                        className="chu7q cm2qf c4cae cu3fu cebxn"
                        htmlFor="firstName"
                      >
                        First Name *
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        className="csqk0 cpaw2"
                        type="text"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        autoComplete="given-name"
                        maxLength={80}
                        required
                      />
                    </div>

                    <div>
                      <label
                        className="chu7q cm2qf c4cae cu3fu cebxn"
                        htmlFor="lastName"
                      >
                        Last Name *
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        className="csqk0 cpaw2"
                        type="text"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        autoComplete="family-name"
                        maxLength={80}
                        required
                      />
                    </div>

                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="chu7q cm2qf c4cae cu3fu cebxn"
                      htmlFor="email"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      className="csqk0 cpaw2"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      className="chu7q cm2qf c4cae cu3fu cebxn"
                      htmlFor="phone"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      className="csqk0 cpaw2"
                      type="tel"
                      placeholder="xxx-xxx-xxxx"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={30}
                      required
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      className="chu7q cm2qf c4cae cu3fu cebxn"
                      htmlFor="company"
                    >
                      Company Name (Optional)
                    </label>

                    <input
                      id="company"
                      name="company"
                      className="csqk0 cpaw2"
                      type="text"
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      autoComplete="organization"
                      maxLength={120}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="chu7q cm2qf c4cae cu3fu cebxn"
                      htmlFor="message"
                    >
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      className="csqk0 cpaw2 contact-message-field"
                      placeholder="Tell us how we can help"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows={4}
                      maxLength={2000}
                      required
                    />
                  </div>

                </div>

                {/* Button */}
                <div className="cx3cz">

                  <button
                    className="cif83 ci4ze cters c9rae c4cae cpaw2 c73l4 cco90 contact-submit-button"
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="contact-spinner" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Free Trial

                        <span className="crls0 c4v48 c18jp cj4ni cz8jp cscsd cvpqc">
                          -&gt;
                        </span>
                      </>
                    )}

                  </button>

                </div>

              </form>

            </div>

          </div>
        </div>

      </section>

    </main>
  );
};

export default Contact;
