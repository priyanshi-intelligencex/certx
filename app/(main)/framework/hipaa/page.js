import Image from "next/image";

const HIPAA = () => {

    const sections = [
        {
            title: "Simplified Policy Creation and Maintenance",
            text: "Streamline the process of managing policies and procedures by integrating with Microsoft Word and utilizing pre-designed templates. This enables quick document creation and real-time updates, ensuring compliance with the latest regulations.",
            image: "/simplified Policy creation.png",
        },
        {
            title: "Efficient Compliance Issue Tracking and Reporting",
            text: "Automate the management of compliance issues for faster identification and resolution. Easily create issues during testing, assign owners, track progress, and generate management-ready reports.",
            image: "/Efficient Compliance Issue.png",
        },
        {
            title: "Unified IT Compliance Environment",
            text: "Simplify IT compliance management by integrating processes, risks, controls, and audits into a centralized system while adapting quickly to regulatory changes.",
            image: "/Unified IT Compliance.png",
        },
        {
            title: "Streamlined Control Testing and Self-Assessments",
            text: "Design and distribute surveys for control tests and self-assessments while assigning control samples to testers and assessors through structured workflows.",
            image: "/Streamlined Control Testing.png",
        },
        {
            title: "Comprehensive IT Compliance Harmonization",
            text: "Ensure consistency in IT compliance by harmonizing controls across various regulations like HIPAA, NIST, and ISO for stronger governance and oversight.",
            image: "/Comprehensive IT Compliance.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        HIPAA (Health Insurance Portability and Accountability Act)
                    </h1>

                    <p>
                        The <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong>
                        is a U.S. federal law that protects sensitive healthcare
                        information and ensures patient data privacy and security.
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

export default HIPAA;