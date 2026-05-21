import Image from "next/image";

export const metadata = {
  title: "Manufacturing Compliance & Operational Risk",
  description:
    "Strengthen manufacturing compliance and operational risk management with CertX. Automate supply chain risk, ISO compliance, and security governance across your manufacturing operations.",
  alternates: { canonical: "https://certx.com/industry/manufacturing" },
};

const Manufacturing = () => {

    const sections = [
        {
            title: "Centralize Asset and Vendor Tracking",
            text: "Efficiently consolidate key assets and vendor information in a single repository. Quickly associate necessary framework standards, risks, and controls to these assets, creating a connected system for future audits while simplifying tracking and management.",
            image: "/manufacturing.png",
        },
        {
            title: "Strategically Plan and Outline Audits",
            text: "Get a comprehensive view of all auditable entities, along with their respective metrics and risk factors, in one central dashboard. Conduct flexible risk evaluations, identify any gaps in audit coverage, and create a targeted, effective audit strategy based on insights.",
            image: "/manufacturing1.png",
        },
        {
            title: "Seamlessly Navigate Framework Compliance",
            text: "Link risks, controls, and requirements across multiple frameworks and standards. Eliminate repetitive tasks by detecting overlapping controls, and streamline your compliance efforts by automatically integrating new framework updates with your existing control structures.",
            image: "/manufacturing2.png",
        },
        {
            title: "Simplify Issue Tracking and Resolution",
            text: "Automate the management of audit issues and reports. Instantly identify problems during audits, assign responsibility for remediation, and track resolution progress. Automatically generate detailed, management-ready audit reports for efficient communication of findings.",
            image: "/manufacturing3.png",
        },
        {
            title: "Enhance Efficiency with Real-Time Monitoring",
            text: "Maintain real-time oversight of assets, risks, and controls, allowing for immediate identification of emerging threats or gaps. Adjust audit plans dynamically and streamline compliance actions with up-to-the-minute data, ensuring a proactive approach to security and regulatory adherence.",
            image: "/manufacturing4.png",
        },
    ];

    return (
        <main className="manufacturing-page framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        Manufacturing
                    </h1>

                    <p>
                        <strong>Manufacturing</strong> organizations face increasing
                        operational, compliance, and cybersecurity challenges in a
                        rapidly evolving industrial environment. Modern GRC solutions
                        help manufacturers streamline audits, manage assets and vendors,
                        improve compliance visibility, and strengthen operational resilience.
                    </p>

                </div>
            </section>

            {/* Sections */}
            {sections.map((section, index) => (
                <section
                    key={section.title}
                    className={`framework-section ${
                        index % 2 !== 0
                            ? "framework-section-reverse"
                            : ""
                    }`}
                >

                    <div className="framework-container framework-grid">

                        {/* Image */}
                        <div className="framework-image">
                            <Image
                                src={section.image}
                                alt={section.title}
                                width={560}
                                height={420}
                                className="manufacturing-section-image"
                                unoptimized
                            />
                        </div>

                        {/* Content */}
                        <div className="framework-content">

                            <h2>
                                {section.title}
                            </h2>

                            <p>
                                {section.text}
                            </p>

                        </div>

                    </div>

                </section>
            ))}

        </main>
    );
};

export default Manufacturing;
