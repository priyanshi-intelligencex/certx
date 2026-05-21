import Image from "next/image";

export const metadata = {
  title: "Healthcare Compliance & HIPAA Risk Management",
  description:
    "Simplify healthcare compliance with CertX. Automate HIPAA policy management, PHI risk assessments, vendor compliance, and audit workflows to protect patient data.",
  alternates: { canonical: "https://certx.com/industry/healthcare" },
};

const Healthcare = () => {

    const sections = [
        {
            title: "Simplify Policy Management",
            text: "Streamline the process of updating, communicating, and maintaining policies and procedures by integrating with Microsoft Word. Use standard templates to save time and make real-time updates to avoid version control issues.",
            image: "/Simplify Policy Management.png",
        },
        {
            title: "Build a Centralized Asset Inventory",
            text: "Keep track of important assets in one unified system. Link assets to framework requirements, risks, and controls, ensuring all critical information is connected for smoother future audits.",
            image: "/Build a Centralized.png",
        },
        {
            title: "Enhance Governance, Risk, and Compliance Integration",
            text: "Healthcare organizations face growing compliance challenges. A connected governance, risk, and compliance system ensures better management and mitigation of risks across the healthcare sector.",
            image: "/Enhance Governance.png",
        },
        {
            title: "Automate Risk and Compliance Management",
            text: "Automate and integrate governance, risk, and compliance processes to improve oversight, manage risks effectively, and ensure stronger regulatory compliance.",
            image: "/Automate Risk.png",
        },
        {
            title: "Improve Cyber Risk and Regulatory Compliance",
            text: "Strengthen risk and compliance management systems to better manage cyber threats, improve cybersecurity posture, and support ongoing regulatory adherence.",
            image: "/Improve Cyber Risk.png",
        },
    ];

    return (
        <main className="framework-page">
            <section className="framework-hero">
                <div className="framework-container">
                    <h1>Healthcare</h1>

                    <p>
                        <strong>Healthcare</strong> organizations manage sensitive
                        patient data, critical assets, and complex regulatory
                        requirements. Modern GRC solutions help streamline policy
                        management, improve risk visibility, and strengthen compliance.
                    </p>
                </div>
            </section>

            {sections.map((section, index) => (
                <section
                    key={section.title}
                    className={`framework-section ${
                        index % 2 !== 0 ? "framework-section-reverse" : ""
                    }`}
                >
                    <div className="framework-container framework-grid">
                        <div className="framework-image">
                            <Image
                                src={section.image}
                                alt={section.title}
                                width={560}
                                height={420}
                            />
                        </div>

                        <div className="framework-content">
                            <h2>{section.title}</h2>
                            <p>{section.text}</p>
                        </div>
                    </div>
                </section>
            ))}
        </main>
    );
};

export default Healthcare;