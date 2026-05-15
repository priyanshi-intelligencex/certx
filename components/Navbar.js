"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const frameworkItems = [
    { name: "CCPA", href: "/framework/ccpa" },
    { name: "COSO", href: "/framework/coso" },
    { name: "GDPR", href: "/framework/gdpr" },
    { name: "HIPAA", href: "/framework/hipaa" },
    { name: "ISO", href: "/framework/iso" },
    { name: "NIST", href: "/framework/nist" },
    { name: "PCI", href: "/framework/pci" },
    { name: "SOC2", href: "/framework/soc2" },
  ];

  const industryItems = [
    { name: "Banking & Finance", href: "/industry/banking-finance" },
    { name: "Energy", href: "/industry/energy" },
    { name: "Healthcare", href: "/industry/healthcare" },
    { name: "Insurance", href: "/industry/insurance" },
    { name: "Manufacturing", href: "/industry/manufacturing" },
    { name: "Technology", href: "/industry/technology" },
    { name: "Telecom", href: "/industry/telecom" },
  ];

  return (
    <header className="cpaw2 ctz8y fixed top-0 navbar-glass">
      <div className="c7rlc ca7yh cxk7g c62s6 ">
        <div className="cu781 cta5t c7uhm citnk cqxtx ">

          <div className="flex items-center navbar-capsule">
            <Link href="/" aria-label="Cruip">
              <Image
                className="cw312"
                src="/certx-logo-1.png"
                width={100}
                height={100}
                alt="Stellar"
              />
            </Link>
          </div>

          <nav className="ckft5 c4bse c01dc">
            <ul className="cv6pf cta5t ckscb citnk cih8s">

              <li>
                <Link className="cs6tu chu7q cz8jp cm2qf cscsd coh5f cpl7r c4cae cr6r1" href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="cs6tu chu7q cz8jp cm2qf cscsd coh5f cpl7r c4cae cr6r1" href="/about">
                  About
                </Link>
              </li>

              {/* Framework Dropdown */}
              <li className="framework-dropdown">
                <div
                  className="cs6tu chu7q cz8jp cm2qf cscsd coh5f cpl7r c4cae cr6r1 framework-dropdown-link"
                >
                  Framework
                  <svg className="framework-dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>

                <div className="framework-dropdown-menu">
                  <ul className="framework-dropdown-menu-inner">
                    {frameworkItems.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Industry Dropdown */}
              <li className="framework-dropdown">
                <div
                  className="cs6tu chu7q cz8jp cm2qf cscsd coh5f cpl7r c4cae cr6r1 framework-dropdown-link"
                >
                  Industry
                  <svg className="framework-dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>

                <div className="framework-dropdown-menu">
                  <ul className="framework-dropdown-menu-inner">
                    {industryItems.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link className="cs6tu chu7q cz8jp cm2qf cscsd coh5f cpl7r c4cae cr6r1" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="cta5t cz2ij ceb4u citnk">
            <li>
              <Link className="cjqnf cs6tu chu7q cz8jp cm2qf cscsd coh5f c4cae" href="/signin">
                Sign in
              </Link>
            </li>

            <li className="cogux">
              <Link className="cjg8t ce8dy cjhxf ccdmz cs6tu ckogm c8c0t chu7q cz8jp cscsd coh5f c4lt2 c36y6 cpaw2 c73l4" href="/signup">
                <span className="cta5t c1ser c4lt2">
                  Sign up
                  <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                    -&gt;
                  </span>
                </span>
              </Link>
            </li>
          </ul>

          <div className="cta5t c3odk ckq5l citnk">
            <button
              className="cs6tu cv6pf chu7q cta5t c1ser c0adw coh5f c73l4 c12cr czkwf"
              aria-controls="mobile-nav"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="c6qme">Menu</span>

              <svg className="cdzmb c01eg cppgq cchn9" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect className="cl6a4 cbcyu codbc cn8i4 ctukp cnhd4 cccm5" y="7" width="16" height="2" rx="1"></rect>
                <rect className="ctvrd czjmr ctukp cnhd4 cccm5" y="7" width="16" height="2" rx="1"></rect>
                <rect className="cl6a4 ck3xz codbc csena ctukp cnhd4 cccm5" y="7" width="16" height="2" rx="1"></rect>
              </svg>
            </button>

            <nav
              id="mobile-nav"
              className={`cxmgp ctukp cccm5 cscsd csbhs cmint ca7yh cr8kn cpaw2 cdmuy c62s6 ${
                isMobileMenuOpen ? "opacity-100" : "max-h-0 opacity-80"
              }`}
            >
              <ul className="cjg8t cn0tc c6nee clat9 cb919 c62s6">

                <li>
                  <Link className="cs6tu chu7q cm2qf clat9 c4cae citnk" href="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className="cs6tu chu7q cm2qf clat9 c4cae citnk" href="/about">
                    About
                  </Link>
                </li>

                <li>
                  <div className="cs6tu chu7q cm2qf clat9 c4cae citnk mobile-framework-title">
                    Framework
                  </div>

                  <ul className="mobile-framework-menu">
                    {frameworkItems.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <div className="cs6tu chu7q cm2qf clat9 c4cae citnk mobile-framework-title">
                    Industry
                  </div>

                  <ul className="mobile-framework-menu">
                    {industryItems.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link className="cs6tu chu7q cm2qf clat9 c4cae citnk" href="/contact">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link className="cs6tu chu7q cm2qf clat9 c4cae citnk" href="/changelog">
                    Changelog
                  </Link>
                </li>

              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;