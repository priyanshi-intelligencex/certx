
const CopyrightPolicy = () => {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <h1>Copyright Policy</h1>
      </section>

      <section className="policy-container">
        <PolicyBlock title="Reporting Copyright Infringement Claims">
          <p>
            We take copyright infringement claims very seriously and are
            committed to addressing notices of alleged infringements in line
            with the applicable laws. If you believe that any content on this
            site violates your copyright, you can request its removal by
            submitting a written notice to our designated copyright agent listed
            below. In compliance with the Digital Millennium Copyright Act
            (DMCA) and the Online Copyright Infringement Liability Limitation
            Act (17 U.S.C. § 512), the DMCA Notice must include the following
            information:
          </p>

          <ul>
            <li>Your physical or digital signature.</li>
            <li>
              A description of the copyrighted work you claim is being
              infringed, or, in the case of multiple works, a representative
              list of them.
            </li>
            <li>
              A detailed identification of the material you believe is
              infringing, allowing us to locate it easily.
            </li>
            <li>
              Sufficient contact information for you such as your name, address,
              phone number, and email address, if available.
            </li>
            <li>
              A declaration that you genuinely believe the use of the
              copyrighted content is not authorized by the copyright owner,
              their agent, or the law.
            </li>
            <li>
              A statement that the details provided in the notice are true and
              accurate.
            </li>
            <li>
              A declaration, under penalty of perjury, confirming you are
              authorized to act on behalf of the copyright holder.
            </li>
          </ul>

          <p>
            Failure to meet the full requirements under Section 512(c)(3) of the
            DMCA may result in your DMCA Notice being ineffective.
          </p>

          <p>
            Please note that if you knowingly misrepresent that content on the
            Website infringes your copyright, you may face liability for
            damages, including attorney’s fees and costs, under Section 512(f) of
            the DMCA.
          </p>
        </PolicyBlock>

        <PolicyBlock title="Policy on Repeat Infringement">
          <p>
            In accordance with our policy, users who are found to be repeat
            infringers may have their accounts disabled or terminated.
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

export default CopyrightPolicy;