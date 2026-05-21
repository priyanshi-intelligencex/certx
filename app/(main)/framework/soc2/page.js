import Image from "next/image";

const SOC2 = () => {

    const sections = [
        {
            title: "Strengthen Your Information Security Program for SOC 2",
            text: "Manage all aspects of your information security program from cloud risk assessments and control reviews to employee policy attestations and vendor risk management.",
            image: "/Strengthen Your Information.png",
        },
        {
            title: "Create SOC 2 Compliant Policies in Minutes",
            text: "Leverage pre-built SOC 2 policies or upload your own to quickly establish a compliant information security program tailored to your organization.",
            image: "/Create SOC 2 Compliant.png",
        },
        {
            title: "Streamline Your SOC 2 Compliance Workflows",
            text: "Centralize compliance activities, track evidence, collaborate with teams, and simplify your SOC 2 auditing process with improved visibility.",
            image: "/Streamline Your SOC 2.png",
        },
        {
            title: "Accelerate Your SOC 2 Audit Process",
            text: "Invite auditors and consultants onto the platform, share evidence securely, and track audit progress in real-time for a faster audit experience.",
            image: "/Accelerate Your SOC 2 Audit.png",
        },
        {
            title: "Enhance Collaboration with Your Audit Team",
            text: "Manage all audit-related communication in one place, track requests, and streamline responses to ensure a smooth SOC 2 compliance journey.",
            image: "/Enhance Collaboration.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        SOC 2 (System and Organization Controls 2)
                    </h1>

                    <p>
                        <strong>SOC 2</strong> is a compliance framework designed to ensure
                        organizations securely manage customer data based on trust service
                        criteria including security, availability, processing integrity,
                        confidentiality, and privacy.
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

export default SOC2;