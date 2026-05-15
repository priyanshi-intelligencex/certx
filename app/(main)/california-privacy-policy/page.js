
const CaliforniaPrivacyPolicy = () => {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <h1>California Privacy Policy</h1>
      </section>

      <section className="policy-container">
        <p>
          In addition to the details outlined in our Privacy Policy, effective
          January 1, 2020, under the California Consumer Privacy Act (CCPA),
          residents of California have the right to request access to and obtain
          a copy of the personal data we collected, used, and disclosed over the
          past 12 months. Additionally, California residents may request the
          deletion of their personal data in accordance with CCPA guidelines.
          Below, you will find instructions for submitting these requests. We
          will not discriminate against you if you choose to exercise your rights
          under the CCPA.
        </p>

        <PolicyBlock title="How to Submit a Request for Access or Deletion:">
          <p>
            If you are a California resident and wish to submit a request to
            access, know, or delete your personal data, you can either email
            your request to privacy@certx.io or complete the webform provided at
            the CCPA Request Form.
          </p>
        </PolicyBlock>

        <PolicyBlock title="What Happens After You Submit a Request:">
          <p>
            Once we receive a request to access, know, or delete personal data,
            we will first verify your identity. To ensure we’re releasing or
            modifying the correct information, we may ask you to provide certain
            details to confirm your identity. If you would like to designate an
            authorized agent to make the request on your behalf, please specify
            this when submitting the request.
          </p>

          <p>
            We will make diligent efforts to provide you with access to your
            data or delete it as per your request. However, there may be certain
            circumstances under the CCPA where we are not obligated to fulfill a
            request. For example, we are not required to delete personal data
            that is necessary for providing ongoing services, for detecting or
            preventing fraudulent activities, or for legal compliance, including
            record-keeping requirements. Additionally, we may not be able to
            provide data or delete information if doing so would compromise
            others’ privacy, violate intellectual property rights, or if the
            information is legally privileged.
          </p>

          <p>
            If your request cannot be fulfilled or is limited in any way, we
            will provide you with an explanation of why the request cannot be
            completed and offer a point of contact for any follow-up questions.
          </p>

          <p>
            We aim to process any requests in a timely manner, typically within
            45 days of receiving your request. However, if an extension is
            required, we will notify you. In the case of an extended processing
            period, we will ensure that your request is completed within 90 days
            from the original submission date. Consumers are limited to two
            requests to access or know their personal data within a 12-month
            period.
          </p>
        </PolicyBlock>

        <PolicyBlock title="Personal Information Collected, Used, and Shared in the Past 12 Months">
          <p>
            California residents also have the right to understand the
            categories of personal data we have collected from consumers in the
            past 12 months, where that data originated, the business or
            commercial purpose for its collection, and the types of third-party
            service providers with whom that data was shared. Below is a
            breakdown of this information. Please note that these are categories
            as defined by California law, and we may not have collected all of
            the specific data points listed for each individual.
          </p>

          <table>
            <thead>
              <tr>
                <th>What Personal Data We Collect</th>
                <th>Where We Get It</th>
                <th>Why We Collect It</th>
                <th>With Whom Do We Share It</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Identifiers such as name, email address, postal address, or
                  similar identifiers.
                </td>
                <td>
                  Directly from the consumer, our business partners, and
                  affiliates.
                </td>
                <td>
                  To fulfill orders, customer relationship management, and
                  service delivery.
                </td>
                <td>Service providers, partners, and affiliates.</td>
              </tr>

              <tr>
                <td>
                  Categories of personal data described in Section 1798.80(e).
                </td>
                <td>
                  Directly from the consumer, our business partners, and
                  affiliates.
                </td>
                <td>
                  To maintain accurate records and support customer services.
                </td>
                <td>Customer service providers and partners.</td>
              </tr>

              <tr>
                <td>
                  Commercial information such as product/service purchases,
                  records of personal property, and consumption history.
                </td>
                <td>Directly from the consumer, via transactions, or partners.</td>
                <td>
                  To provide services, conduct pricing analysis, prevent fraud,
                  ensure legal compliance, and process payments.
                </td>
                <td>Transaction processors, service providers, advertisers.</td>
              </tr>

              <tr>
                <td>Geolocation data.</td>
                <td>Your device or browser.</td>
                <td>To monitor traffic and deliver services effectively.</td>
                <td>Data analytics service providers.</td>
              </tr>
            </tbody>
          </table>
        </PolicyBlock>

        <p>
          In the past 12 months, other than the categories and third parties
          listed above, we have not shared personal data for commercial
          purposes. Furthermore, we have not “sold” personal information as
          defined by the CCPA, and we do not intend to sell such data in the
          future.
        </p>

        <PolicyBlock title="Contact for Questions or Additional Information">
          <p>
            If you have any questions regarding this California Privacy Policy
            or need assistance exercising your rights, please contact us by
            email at privacy@certx.io
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

export default CaliforniaPrivacyPolicy;