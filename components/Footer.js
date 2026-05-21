import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-12">

      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        {/* Main row: stacks on mobile, side-by-side on large screens */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-12">

          {/* LEFT — logo + description + copyright */}
          <div className="w-full lg:w-[260px] shrink-0">

            <Link href="/" className=" inline-flex">
              <Image
                src="/certx-logo.png"
                alt="CERTX"
                width={90}
                height={40}
              />
            </Link>

            <p className="text-gray-300 text-[15px] mt-5 leading-relaxed">
              We work with you to ensure your website complies with industry
              regulations and best practices, minimizing the risk of data
              breaches, fraud, and unauthorized access by identifying potential
              threats and implementing effective strategies to safeguard your
              online presence.
            </p>

          </div>

          {/* RIGHT — 2-col on mobile/tablet, 4-col on sm+ */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 w-full lg:w-auto">

            {/* FRAMEWORK */}
            <FooterColumn
              title="Framework"
              links={[
                { name: "CCPA", href: "/framework/ccpa" },
                { name: "COSO", href: "/framework/coso" },
                { name: "GDPR", href: "/framework/gdpr" },
                { name: "HIPAA", href: "/framework/hipaa" },
                { name: "ISO", href: "/framework/iso" },
              ]}
            />

            {/* INDUSTRY */}
            <FooterColumn
              title="Industry"
              links={[
                { name: "Banking & Finance", href: "/industry/banking-finance" },
                { name: "Healthcare", href: "/industry/healthcare" },
                { name: "Insurance", href: "/industry/insurance" },
                { name: "Technology", href: "/industry/technology" },
              ]}
            />

            {/* MENU */}
            <FooterColumn
              title="Menu"
              links={[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Framework", href: "/framework" },
                { name: "Industry", href: "/industry" },
              ]}
            />

            {/* COMPANY */}
            <FooterColumn
              title="Company"
              links={[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "California Privacy", href: "/california-privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-conditions" },
                { name: "Copyright Policy", href: "/copyright-policy" },
                { name: "DPA", href: "/dpa" },
                { name: "Data Deletion", href: "/data-deletion-form" },
              ]}
            />

          </div>

        </div>

        {/* Bottom bar — full width, sits at the very end */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © Certx.com — All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div>

      <h3 className="text-[15px] font-semibold mb-4 text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-gray-400 text-[14px] hover:text-white transition-colors leading-snug"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Footer;
