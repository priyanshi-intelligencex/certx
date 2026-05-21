import Image from "next/image";

const BankingFinance = () => {

    const sections = [
        {
            title: "Optimize Audit Efficiency",
            text: "Optimize Audit Efficiency refers to streamlining the audit process to save time, reduce costs, and improve accuracy without compromising compliance or quality.",
            image: "/Banking And Finance.png",
        },
        {
            title: "Simplify Control Testing",
            text: "Simplify Control Testing means making the process of checking internal controls easier, faster, and more effective through automation and centralized data.",
            image: "/Simplify Control Testing.png",
        },
        {
            title: "Track and Analyze Key Risk Indicators",
            text: "Track and Analyze Key Risk Indicators involves monitoring measurable data points that signal potential threats to an organization’s objectives.",
            image: "/Banking And Finance.png",
        },
        {
            title: "Strengthen IT and Compliance Risk Management",
            text: "Strengthen IT and Compliance Risk Management means building robust processes to protect critical systems, data, and business operations.",
            image: "/Strengthen IT and Compliance.png",
        },
        {
            title: "Unify Governance, Risk, and Compliance (GRC)",
            text: "Unify Governance, Risk, and Compliance (GRC) brings together policies, processes, and tools to manage business objectives and regulatory requirements.",
            image: "/Unify Governance.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        Banking And Finance
                    </h1>

                    <p>
                        <strong>Banking and Finance</strong> form the backbone of
                        modern economies, enabling the flow of money,
                        investments, and resources across individuals,
                        businesses, and governments.
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

export default BankingFinance;