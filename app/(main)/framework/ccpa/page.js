import Image from "next/image";

const CCPA = () => {

    const sections = [
        {
            title: "Streamlined Compliance Framework & Process Design",
            text: "Easily establish a structured internal control hierarchy for processes, risks, controls, and activities. Link these elements to create a unified compliance environment, ensuring seamless alignment with regulatory requirements such as CCPA data privacy.",
            image: "/Streamlined-Compliance.png",
        },
        {
            title: "Automated Assessments & Surveys for Efficiency",
            text: "Design assessments, surveys, and control tests quickly with predefined templates and automated schedules. Capture non-compliance issues in real time and use online sign-offs for executive certifications.",
            image: "/streamlined-compliance.png",
        },
        {
            title: "Smart Issue Management & Remediation",
            text: "Resolve compliance issues swiftly with AI-powered issue management, intelligently classifying and routing issues for immediate action. Track remediation efforts and maintain stakeholder engagement.",
            image: "/streamlined-compliance.png",
        },
        {
            title: "Enhanced Dashboards & Reporting for Transparency",
            text: "Access real-time graphical dashboards and reports with deep drill-down capabilities for comprehensive process visibility and audit-ready reporting.",
            image: "/streamlined-compliance.png",
        },
        {
            title: "Centralized Evidence Collection & Collaboration",
            text: "Simplify evidence collection by using a single dataset across multiple audits and assessments while maintaining a central repository for all evidence.",
            image: "/streamlined-compliance.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        CCPA (California Consumer Privacy Act)
                    </h1>

                    <p>
                        The <strong>California Consumer Privacy Act (CCPA)</strong>
                        is a privacy law that gives California residents greater
                        control over their personal information and how businesses
                        collect, use, and share their data.
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

export default CCPA;