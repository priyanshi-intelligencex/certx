import Image from "next/image";

const GDPR = () => {

    const sections = [
        {
            title: "Stakeholder Collaboration & Communication",
            text: "Facilitate smooth communication with stakeholders by automating surveys and evidence collection. Maintain a centralized record of interactions to improve collaboration throughout audits and assessments.",
            image: "/GDPR (General Data Protection Regulation).png",
        },
        {
            title: "Reusable Evidence for Assessments",
            text: "Save time and reduce audit fatigue by reusing the same evidence across different audits. Automatically schedule evidence requests and centralize collected data for easy retrieval.",
            image: "/GDPR (General Data Protection Regulation).png",
        },
        {
            title: "Policy & Procedure Management",
            text: "Simplify the process of managing and updating policies using pre-built templates and framework-aligned documentation for better consistency and control.",
            image: "/GDPR (General Data Protection Regulation).png",
        },
        {
            title: "Compliance Issue Management",
            text: "Automate the identification and assignment of compliance issues during testing. Track progress, streamline follow-ups, and generate audit-ready reports with ease.",
            image: "/GDPR (General Data Protection Regulation).png",
        },
        {
            title: "Reporting & Monitoring for Control Tests",
            text: "Monitor and report on control test outcomes using centralized dashboards and graphical reports that provide actionable insights and better visibility.",
            image: "/GDPR (General Data Protection Regulation).png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        GDPR (General Data Protection Regulation)
                    </h1>

                    <p>
                        The <strong>General Data Protection Regulation (GDPR)</strong>
                        is a European Union (EU) law that governs how organizations
                        collect, store, process, and protect personal data.
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

export default GDPR;