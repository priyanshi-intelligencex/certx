import Image from "next/image";

export const metadata = {
  title: "Telecom Compliance & Cybersecurity Risk Management",
  description:
    "Manage telecom regulatory compliance and cybersecurity risk with CertX. Automate FCC, CPNI, and data protection compliance workflows to protect subscriber data and critical infrastructure.",
  alternates: { canonical: "https://certx.com/industry/telecom" },
};

const Telecom = () => {

    const sections = [
        {
            title: "Enhance Visibility into Risk and Compliance Operations",
            text: "Telecommunications providers face a variety of challenges, including an increasingly complex risk landscape, growing regulatory and compliance demands, and rising privacy and security threats. The shift towards 5G and the upcoming 6G technology will only increase the scope of compliance obligations, requiring a more interconnected approach to risk and compliance management.",
            image: "/Enhance Visibility into Risk.png",
        },
        {
            title: "Simplify Policy Management and Updates",
            text: "Managing the ongoing updates, communications, and maintenance of policies and procedures can be time-consuming. Integrate with Microsoft Word, use pre-built templates to speed up document creation, and maintain accurate version control with real-time updates mapped to compliance frameworks.",
            image: "/Simplify Policy Management and Updates.png",
        },
        {
            title: "Comprehensive View of Frameworks and Controls",
            text: "Map controls to specific frameworks and gain clear visibility into overlapping requirements and risk areas. Customized filters and centralized tracking help telecom teams focus on high-priority compliance and operational objectives efficiently.",
            image: "/Comprehensive View of Frameworks.png",
        },
        {
            title: "Foster Seamless Stakeholder Collaboration",
            text: "Improve communication and collaboration across departments through automated workflows, evidence collection, audit tracking, and centralized repositories. Maintain transparency and simplify coordination across the entire audit lifecycle.",
            image: "/Foster Seamless Stakeholder.png",
        },
        {
            title: "Centralized Risk and Compliance Oversight",
            text: "Create a single source of truth for compliance and risk management activities. Track assessments, automate reporting, and streamline management tasks while responding quickly to regulatory changes and operational incidents.",
            image: "/Centralized Risk and Compliance.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        Telecom
                    </h1>

                    <p>
                        <strong>Telecom</strong> organizations require scalable
                        governance, risk, and compliance solutions to manage
                        cybersecurity threats, operational resilience, regulatory
                        frameworks, and evolving communication technologies.
                    </p>

                </div>
            </section>

            {/* Content Sections */}
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

export default Telecom;