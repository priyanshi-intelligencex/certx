
const DpaPage = () => {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <h1>DPA</h1>
      </section>

      <section className="policy-container">
        <p>
          This Addendum supplements the Master Purchase and Services Agreement
          (the “Service Agreement”) between the Company and CERTX, outlining the
          terms related to the purchase and use of Products and Services. In case
          of any discrepancies between this Addendum and the Service Agreement,
          the terms of this Addendum shall prevail.
        </p>

        <PolicyBlock title="1. Purpose and Scope">
          <p>
            1.1 This Addendum pertains to the processing of Personal Data under
            the General Data Protection Regulation (GDPR) and California Consumer
            Privacy Act (CCPA). It outlines the types of data, data subjects,
            and the purposes of processing.
          </p>

          <p>
            1.2 This Addendum integrates the EU Model Clauses, addressing the
            transfer of Personal Data from the European Economic Area (EEA) to
            jurisdictions that do not provide adequate protection.
          </p>

          <p>
            1.3 Personal Data processing will be governed by the Company’s
            instructions, with CERTX processing such data solely as needed to
            fulfill the Services.
          </p>
        </PolicyBlock>

        <PolicyBlock title="2. Definitions">
          <p>
            The following key terms are defined according to the GDPR, CCPA, and
            the Service Agreement:
          </p>

          <ul>
            <li>
              <strong>Personal Data:</strong> As defined under the GDPR and
              “Personal Information” under the CCPA.
            </li>
            <li>
              <strong>Subprocessor:</strong> Any third party engaged by CERTX to
              process Personal Data.
            </li>
            <li>
              <strong>EU Model Clauses:</strong> Standard contractual clauses
              approved by the European Commission.
            </li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="3. Responsibilities for Data Processing">
          <p>
            3.1 The Company is responsible for determining the purpose and scope
            of Personal Data processing. CERTX will only process Personal Data
            based on the Company’s written instructions.
          </p>

          <p>
            3.2 CERTX may only use Subprocessors that are specifically approved.
          </p>

          <p>
            3.3 Both parties agree to implement adequate technical and
            organizational measures to protect Personal Data from risks.
          </p>
        </PolicyBlock>

        <PolicyBlock title="4. Subprocessors">
          <p>
            4.1 CERTX’s approved Subprocessors including: Amazon Web Services,
            Google.
          </p>

          <p>
            4.2 CERTX will notify the Company of any changes or additions to the
            Subprocessors, and the Company will have 30 days to raise any
            objections.
          </p>
        </PolicyBlock>

        <PolicyBlock title="5. Data Transfers">
          <p>
            5.1 Transfers of Personal Data originating in the EEA are governed
            by the EU Model Clauses.
          </p>

          <p>
            5.2 CERTX must notify and obtain the Company’s approval before
            transferring data to any jurisdiction that does not have adequate
            protection for Personal Data.
          </p>
        </PolicyBlock>

        <PolicyBlock title="6. Security Measures">
          <p>Both parties agree to implement the security measures which include:</p>

          <ul>
            <li>
              Access control, encryption, pseudonymization, regular audits, and
              incident response plans.
            </li>
            <li>
              Safeguards to maintain the confidentiality, integrity, and
              resilience of processing systems.
            </li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="7. Incident Management">
          <p>
            7.1 CERTX must notify the Company of any data breaches or incidents
            that affect the security of Personal Data.
          </p>

          <p>
            7.2 The notification will include details about the breach, the
            affected data, and the steps being taken to mitigate the issue.
          </p>
        </PolicyBlock>

        <PolicyBlock title="8. Return or Deletion of Data">
          <p>
            Upon termination of the Service Agreement, CERTX will either return
            or securely delete all Personal Data unless retention is required by
            applicable law.
          </p>
        </PolicyBlock>

        <PolicyBlock title="9. Support for Data Controller">
          <p>
            CERTX will support the Company in meeting its obligations under the
            GDPR and CCPA, including assisting with Data Subject requests and
            conducting Data Protection Impact Assessments.
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

export default DpaPage;