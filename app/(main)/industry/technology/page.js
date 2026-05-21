import Image from "next/image";

export const metadata = {
  title: "Technology Sector GRC & Cybersecurity Compliance",
  description:
    "Meet technology sector compliance requirements with CertX. Automate SOC 2, ISO 27001, and cloud security compliance to build customer trust and accelerate enterprise sales.",
  alternates: { canonical: "https://certx.com/industry/technology" },
};

const Technology = () => {

    const sections = [
        {
            title: "Simplify Policy Creation and Maintenance",
            text: "Effortlessly manage and update essential policies and procedures. Integrate with Microsoft Word and use pre-built templates to quickly create and modify documents. Ensure seamless version control with live updates and align finalized policies with relevant framework requirements and controls.",
            image: "/Simplify Policy Creation and Maintenance.png",
        },
        {
            title: "Achieve Seamless Multi-Framework Compliance",
            text: "Streamline the management of various frameworks by linking their requirements, controls, and risks in one unified system. Minimize redundancies by detecting overlapping controls, enabling you to scale compliance efforts more efficiently while staying ahead of evolving regulations.",
            image: "/Achieve Seamless Multi-Framework.png",
        },
        {
            title: "Automate Report Creation for Deeper Insights",
            text: "Quickly generate insightful reports on key compliance risks and metrics. Dive into both high-level executive dashboards and in-depth reports to evaluate your compliance status, and reduce administrative workload by automating report creation processes.",
            image: "/Automate Report Creation.png",
        },
        {
            title: "Accelerate Operational Resilience with Integrated Risk Management",
            text: "Empower your organization to address compliance, audit, cyber risk, and third-party challenges with a unified solution. By automating and connecting these critical areas, gain a strategic advantage in maintaining resilience and reducing operational vulnerabilities.",
            image: "/Accelerate Operational Resilience.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        Technology
                    </h1>

                    <p>
                        <strong>Technology</strong> organizations need scalable
                        governance, risk, and compliance solutions to manage
                        fast-changing regulations, cybersecurity risks, audits,
                        and operational resilience across modern digital ecosystems.
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

export default Technology;