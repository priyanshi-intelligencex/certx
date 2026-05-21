import Image from "next/image";

export const metadata = {
  title: "Insurance Compliance & Risk Management",
  description:
    "Manage insurance sector compliance and third-party risk with CertX. Automate regulatory reporting, control testing, and GRC workflows to meet NAIC and other insurance regulations.",
  alternates: { canonical: "https://certx.com/industry/insurance" },
};

const Insurance = () => {

    const sections = [
        {
            title: "Strengthen Risk Management and Compliance Frameworks",
            text: "The insurance industry faces a growing array of risks—cyber, operational, and compliance—that are increasingly complex and interconnected. We empower insurance companies to adopt a unified approach to managing enterprise-wide risks, compliance, audits, third-party relationships, and cyber threats.",
            image: "/Strengthen Risk.png",
        },
        {
            title: "Accelerate Compliance Achievement",
            text: "Simplify and consolidate your complex ecosystem into a single, accessible platform that supports multiple frameworks and stakeholders. This centralized approach allows for quicker and easier demonstration of compliance across the organization.",
            image: "/Accelerate Compliance.png",
        },
        {
            title: "Facilitate Cross-Department Collaboration",
            text: "Foster collaboration across departments by using a single, integrated platform that centralizes risk management and compliance activities. This streamlines workflows, saves time, and enhances cross-functional cooperation.",
            image: "/Facilitate Cross-Department.png",
        },
        {
            title: "Support Growth with Scalable Solutions",
            text: "Scale your risk and compliance programs effortlessly with an intuitive platform that automates and simplifies your processes. This ensures your compliance and risk management practices grow alongside your business.",
            image: "/Support Growth.png",
        },
        {
            title: "Proactively Manage ESG Risks",
            text: "Leverage materiality assessments to gather stakeholder feedback and identify critical Environmental, Social, and Governance (ESG) issues. Integrate ESG data into your ERM program to uncover potential risks and opportunities.",
            image: "/Proactively Manage ESG risks.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        Insurance
                    </h1>

                    <p>
                        <strong>Insurance</strong> organizations operate in a rapidly
                        evolving environment with increasing regulatory pressure,
                        operational risks, and cybersecurity challenges. Modern GRC
                        solutions help insurers streamline compliance, strengthen
                        enterprise risk management, and improve operational efficiency.
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

export default Insurance;