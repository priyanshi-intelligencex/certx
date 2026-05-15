import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-8">

      <div className="max-w-6xl mx-auto px-10 flex items-start justify-between gap-12">

        {/* LEFT */}
        <div className="w-[260px]">

          <Link href="/">
            <Image
              src="/logo.png2.png"
              alt="CERTX"
              width={50}
              height={50}
              className="mb-6"
            />
          </Link>

          <p className="text-gray-300 text-[15px] mb-12">
            © Certx.com - All rights reserved.
          </p>

          <div className="flex gap-7 text-[#b45cff] text-lg">
            <span>𝕏</span>
            <span>▣</span>
            <span>●</span>
          </div>

        </div>

        {/* RIGHT COLUMNS */}
        <div className="flex gap-16">

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
              { name: "California Privacy Policy", href: "/california-privacy-policy" },
              { name: "Terms & Conditions", href: "/terms-conditions" },
              { name: "Copyright Policy", href: "/copyright-policy" },
              { name: "DPA", href: "/dpa" },
              { name: "Data Deletion Form", href: "/data-deletion-form" },
            ]}
          />

        </div>

      </div>

    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div className="min-w-[130px]">

      <h3 className="text-[15px] font-semibold mb-4">
        {title}
      </h3>

      <ul className="space-y-3">

        {links.map((item) => (
          <li key={item.name}>

            <Link
              href={item.href}
              className="text-gray-400 text-[15px] hover:text-white transition"
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