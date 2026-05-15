import Image from "next/image";

const Energy = () => {

    const sections = [
        {
            title: "Transform Risk into a Business Advantage",
            text: "The energy sector faces an increasingly volatile landscape marked by fluctuating prices, evolving demand, cyber threats, and supply chain disruptions. To thrive amidst these challenges, companies must turn risk into opportunity. Our GRC solutions empower organizations to proactively address risks, mitigate compliance burdens, safeguard against cyber threats, and streamline audit processes, positioning them to not only survive but lead in this dynamic industry.",
            image: "/energy.png",
        },
        {
            title: "Simplify Compliance Across Multiple Frameworks",
            text: "Stay ahead of regulatory changes by linking your organization’s requirements, controls, and risks to multiple industry frameworks. Our solutions enable seamless mapping of new framework requirements to existing controls, ensuring compliance across state and regional public service commissions, as well as cross-industry regulations. This reduces manual efforts, minimizes duplication, and accelerates your compliance journey.",
            image: "/energy.png",
        },
        {
            title: "Enhance Audit Planning and Scope with Data-Driven Insights",
            text: "Unify all auditable entities, key metrics, and associated risks in one centralized system for better oversight. With this integrated view, perform thorough risk assessments and pinpoint any coverage gaps, allowing for a more strategic and impactful audit plan. Our tools help prioritize risk areas and ensure comprehensive coverage across your organization’s operations.",
            image: "/energy.png",
        },
        {
            title: "Strengthen Cyber and Third-Party Risk Management",
            text: "As cyber threats and third-party vulnerabilities rise, the energy sector needs a robust risk management framework. Our GRC solutions help you identify, assess, and mitigate cyber risks and third-party vulnerabilities, ensuring your organization is resilient against potential breaches and disruptions. This integrated approach reduces exposure to emerging risks while safeguarding vital infrastructure.",
            image: "/energy.png",
        },
        {
            title: "Foster Operational Resilience Through Risk Mitigation",
            text: "In the face of supply chain disruptions, sustainability concerns, and evolving regulations, operational resilience is key to success. Our solutions equip energy organizations with the tools to proactively mitigate operational risks and comply with necessary regulations. By integrating risk management across departments, your organization can confidently navigate industry challenges and maintain sustainable growth while remaining agile in an unpredictable environment.",
            image: "/energy.png",
        },
    ];

    return (
        <main className="framework-page">

            {/* Hero Section */}
            <section className="framework-hero">
                <div className="framework-container">

                    <h1>
                        Energy
                    </h1>

                    <p>
                        The <strong>energy sector</strong> powers industries,
                        economies, and communities worldwide. As organizations
                        face evolving regulations, cyber threats, operational
                        risks, and sustainability challenges, modern GRC
                        solutions help streamline compliance, strengthen risk
                        management, and improve operational resilience.
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

export default Energy;