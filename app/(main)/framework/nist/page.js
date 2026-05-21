import Image from "next/image";

const NIST = () => {

    const sections = [
        {
            title: "Enhance Your Risk Management Framework (RMF)",
            text: "Leverage an integrated platform to manage every aspect of your NIST RMF, including risk assessments, control reviews, employee policy attestations, and vendor risk management.",
            image: "/Enhance Your Risk Management.png",   
        },
        {
            title: "Create and Tailor NIST Policies",
            text: "Access a robust library of pre-built NIST policies or upload your own templates to establish your organization’s compliance framework with ease.",
            image: "/Create and Tailor NIST.png",
        },
        {
            title: "Train Employees for NIST Compliance",
            text: "Educate your employees on NIST compliance requirements through training modules, periodic testing, and simulated anti-phishing exercises.",
            image: "/Train Employees for NIST.png",
        },
        {
            title: "Monitor NIST Controls Continuously",
            text: "Implement automated monitoring to track NIST compliance controls in real time. Identify potential security gaps with configurable alerts and notifications.",
            image: "/Monitor NIST Controls.png",
        },
        {
            title: "Simplify NIST Audit Collaboration",
            text: "Streamline collaboration with internal and external stakeholders by automating surveys and collecting necessary audit evidence for NIST audits.",
            image: "/Simplify NIST Audit Collaboration.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        National Institute of Standards and Technology (NIST)
                    </h1>

                    <p>
                        The <strong>National Institute of Standards and Technology (NIST)</strong>
                        develops cybersecurity and risk management standards that help
                        organizations strengthen security, compliance, and operational resilience.
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

export default NIST;