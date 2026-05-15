'use client'
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <main className="cih8s">

      <section className="c4lt2">

        {/* SAME SIGNIN PAGE ILLUSTRATION */}
        <div
          className="cdzmb ca1ms cxixl cq6fz cstve csbhs c7v3c cpl14 cblyu"
          aria-hidden="true"
        >
          <Image
            src="/auth-illustration.svg"
            className="cw312"
            width={1440}
            height={450}
            alt="Page Illustration"
            priority
          />
        </div>

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

              <form>

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
                        className="csqk0 cpaw2"
                        type="text"
                        placeholder="Enter your first name"
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
                        className="csqk0 cpaw2"
                        type="text"
                        placeholder="Enter your last name"
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
                      className="csqk0 cpaw2"
                      type="email"
                      placeholder="Enter your email address"
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
                      className="csqk0 cpaw2"
                      type="text"
                      placeholder="xxx-xxx-xxxx"
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
                      className="csqk0 cpaw2"
                      type="text"
                      placeholder="Enter company name"
                    />
                  </div>

                </div>

                {/* Button */}
                <div className="cx3cz">

                  <button className="cif83 ci4ze cters c9rae c4cae cpaw2 c73l4 cco90">
                    Request Free Trial

                    <span className="crls0 c4v48 c18jp cj4ni cz8jp cscsd cvpqc">
                      -&gt;
                    </span>

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