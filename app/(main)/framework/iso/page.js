import Image from "next/image";

export const metadata = {
  title: "ISO 27001 Compliance Platform",
  description:
    "Achieve and maintain ISO 27001 certification with CertX. Automate information security management, control assessments, and continuous monitoring across your enterprise.",
  alternates: { canonical: "https://certx.com/framework/iso" },
};

const ISO = () => {

    const sections = [
        {
            title: "Strengthen Your Information Security Management System (ISMS)",
            text: "Use an integrated platform to manage all aspects of your ISMS, including cloud risk assessments, control reviews, employee policy attestations, and vendor risk management.",
            image: "/Strengthen Your Information.png",
        },
        {
            title: "Create and Customize ISO 27001 Policies",
            text: "Access a comprehensive library of pre-built ISO 27001 policies or upload your own to get started quickly. Customize policies using an intuitive editor for better compliance.",
            image: "/Create and Customiz.png",
        },
        {
            title: "Empower Employees as Compliance Champions",
            text: "Train your workforce on compliance requirements with targeted training programs, periodic tests, and anti-phishing campaigns to strengthen security awareness.",
            image: "/Empower Employees.png",
        },
        {
            title: "Monitor ISO Compliance Controls in Real-Time",
            text: "Continuously track compliance with ISO standards through automated monitoring. Identify compliance gaps and critical issues in real time with alerts and notifications.",
            image: "/Monitor ISO Compliance.png",
        },
        {
            title: "Simplify Stakeholder Collaboration and Auditing",
            text: "Enhance communication with stakeholders through deployable surveys and streamlined audit evidence collection while maintaining transparency and efficiency.",
            image: "/Simplify Stakeholder.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        ISO (International Organization for Standardization)
                    </h1>

                    <p>
                        The <strong>International Organization for Standardization (ISO)</strong>
                        develops globally recognized standards that ensure quality,
                        safety, efficiency, and information security across industries.
                    </p>

                </div>
            </section>

            {/* Sections */}
            {sections.map((section, index) => (
                <section
                    className={`framework-section ${
                        index % 2 !== 0
                            ? "framework-section-reverse"
                            : ""
                    }`}
                    key={section.title}
                >
                    <div className="framework-container framework-grid">

                        {/* Image */}
                        <div className="framework-image">
                            <Image
                                src={section.image}
                                width={560}
                                height={420}
                                alt={section.title}
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

export default ISO;