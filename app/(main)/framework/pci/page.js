import Image from "next/image";

const PCI = () => {

    const sections = [
        {
            title: "Achieve PCI DSS Compliance with Ease",
            text: "Streamline your path to PCI DSS compliance with a unified solution that connects risks, controls, assessments, and reporting activities across your organization.",
            image: "/Achieve.png",
        },
        {
            title: "Build Trust with PCI DSS Readiness",
            text: "Track your PCI DSS certification progress and maintain audit readiness while demonstrating your commitment to securing payment card information.",
            image: "/Build Trust.png",
        },
        {
            title: "Tailored PCI DSS Policies",
            text: "Deploy pre-built PCI DSS security policies or customize your own using an intuitive editor to align with compliance requirements and security standards.",
            image: "/Tailored PCI DSS.png",
        },
        {
            title: "Manage Compliance Evidence Easily",
            text: "Provide real-time visibility into your compliance and security posture by organizing PCI DSS evidence and certifications in one centralized platform.",
            image: "/Manage Compliance.png",
        },
        {
            title: "Simplified Assessments and Remediation",
            text: "Automate PCI DSS control assessments, monitor compliance gaps, and streamline remediation workflows with AI-powered issue management.",
            image: "/Simplified Assessments.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        PCI DSS (Payment Card Industry Data Security Standard)
                    </h1>

                    <p>
                        The <strong>Payment Card Industry Data Security Standard (PCI DSS)</strong>
                        helps organizations securely process, store, and transmit payment card
                        information while maintaining strong security controls and compliance standards.
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

export default PCI;