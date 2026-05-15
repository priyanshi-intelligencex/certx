const TermsConditions = () => {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <h1>Terms & Conditions</h1>
      </section>

      <section className="policy-container">
        <PolicyBlock title="1. Acceptance of Terms">
          <p>
            By accessing or using the CERTX website, products, or services, you
            agree to be bound by these Terms & Conditions. If you do not agree
            with these terms, please do not use our website or services.
          </p>
        </PolicyBlock>

        <PolicyBlock title="2. Use of Our Website">
          <p>
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of others, restrict their use of
            the website, or interfere with the normal operation of our services.
          </p>
        </PolicyBlock>

        <PolicyBlock title="3. Products and Services">
          <p>
            CERTX provides compliance, cybersecurity, and related digital
            services. We may modify, suspend, or discontinue any part of our
            website or services at any time without prior notice.
          </p>
        </PolicyBlock>

        <PolicyBlock title="4. User Responsibilities">
          <p>
            You are responsible for ensuring that any information you provide to
            us is accurate, complete, and up to date. You must not misuse our
            website, attempt unauthorized access, or introduce harmful code,
            malware, or other disruptive technologies.
          </p>
        </PolicyBlock>

        <PolicyBlock title="5. Intellectual Property">
          <p>
            All content, branding, logos, text, graphics, designs, and other
            materials available on this website are owned by CERTX or licensed
            to us. You may not copy, reproduce, distribute, or modify any content
            without prior written permission.
          </p>
        </PolicyBlock>

        <PolicyBlock title="6. Third-Party Links">
          <p>
            Our website may contain links to third-party websites or services.
            These links are provided for convenience only. CERTX is not
            responsible for the content, security, privacy practices, or terms of
            any third-party websites.
          </p>
        </PolicyBlock>

        <PolicyBlock title="7. Disclaimer of Warranties">
          <p>
            The website and services are provided on an “as is” and “as
            available” basis. CERTX does not guarantee that the website will be
            uninterrupted, error-free, secure, or free from harmful components.
          </p>
        </PolicyBlock>

        <PolicyBlock title="8. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, CERTX shall not be liable
            for any indirect, incidental, consequential, special, or punitive
            damages arising from your use of, or inability to use, our website or
            services.
          </p>
        </PolicyBlock>

        <PolicyBlock title="9. Indemnification">
          <p>
            You agree to indemnify and hold harmless CERTX, its affiliates,
            employees, contractors, and partners from any claims, losses,
            liabilities, damages, costs, or expenses arising from your use of the
            website or violation of these terms.
          </p>
        </PolicyBlock>

        <PolicyBlock title="10. Privacy">
          <p>
            Your use of our website is also governed by our Privacy Policy,
            which explains how we collect, use, and protect your information.
          </p>
        </PolicyBlock>

        <PolicyBlock title="11. Changes to These Terms">
          <p>
            We may update these Terms & Conditions from time to time. Any changes
            will be posted on this page. Your continued use of the website after
            changes are posted means you accept the updated terms.
          </p>
        </PolicyBlock>

        <PolicyBlock title="12. Contact Us">
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us at privacy@certx.io.
          </p>
        </PolicyBlock>
      </section>
    </main>
  );
};

const PolicyBlock = ({ title, children }) => {
  return (
    <div className="policy-block">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default TermsConditions;