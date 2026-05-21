import Image from "next/image";

export const metadata = {
  title: "COSO Framework Compliance",
  description:
    "Implement the COSO Internal Control Integrated Framework with CertX. Streamline enterprise risk management, internal controls, and governance workflows across your organization.",
  alternates: { canonical: "https://certx.com/framework/coso" },
};

const COSO = () => {

    const sections = [
        {
            title: "Streamlined Risk Assessment Process",
            text: "Simplify IT risk assessments by using standardized templates, dynamically scoring and ranking risks. This allows for a clear understanding of risk severity and the likelihood of potential threats, helping to prioritize responses effectively.",
            image: "/Streamlined Risk.png",
        },
        {
            title: "Centralized Control Management",
            text: "Create a unified control library that maps to processes, risks, and regulations. This simplifies information-sharing across teams like internal audit and compliance, while helping prioritize high-risk or impactful controls for improved decision-making.",
            image: "/Centralized Control.png",
        },
        {
            title: "Collaborative Stakeholder Engagement",
            text: "Enhance communication with stakeholders through automated surveys and evidence requests. Maintain an audit trail of all interactions, ensuring smooth collaboration and timely evidence collection across multiple audits.",
            image: "/Collaborative Stakeholder.png",
        },
        {
            title: "Simplified Evidence Collection",
            text: "Reduce stakeholder fatigue by reusing collected evidence for various audits and assessments. Automate evidence requests based on frequency, and centralize storage for easy access, simplifying the audit process.",
            image: "/Simplified Evidence.png",
        },
        {
            title: "Efficient Testing, Monitoring, and Reporting",
            text: "Design and schedule control tests with standard templates, making it easier to record results and gather supporting documentation. Monitor and report on test outcomes with detailed dashboards and graphical reports.",
            image: "/Efficient Testing,.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        COSO (Committee of Sponsoring Organizations of the Treadway Commission)
                    </h1>

                    <p>
                        The <strong>Committee of Sponsoring Organizations of the
                        Treadway Commission (COSO)</strong> is a globally recognized
                        framework for risk management, internal control, and
                        corporate governance.
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

export default COSO;