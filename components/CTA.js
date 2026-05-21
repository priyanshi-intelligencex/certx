"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
const CTA = (props) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      {/* CTA */}
      <section data-aos="zoom-in-up">
        <div className="c7rlc ca7yh cxk7g c62s6">
          <div className="c5e7n cxmgp ct20k c4lt2 clyt5 cz6zh">
            {/* Radial gradient */}
            <div
              className="cdzmb ca1ms ch3pd cv6pf cq2iz cta5t cq6fz csbhs cu6vf c7anr cblyu citnk"
              aria-hidden="true"
            >
              <div className="cje6l cg3aq ci4ze cku0c cxixl csbhs cvjd3"></div>
              <div className="cg3aq csmir crzj1 cku0c csbhs cl6o6 cf1rh"></div>
            </div>
            {/* Blurred shape */}
            <div
              className="cdzmb chdke ca93n csbhs cmjk5 c7v3c cr8kn cblyu"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs5-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#007BFF"></stop>
                    <stop offset="100%" stopColor="#007BFF" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs5-a)"
                  fillRule="evenodd"
                  d="m0 0 461 369-284 58z"
                  transform="matrix(1 0 0 -1 0 427)"
                ></path>
              </svg>


            </div>
            {/* Content */}
            <div className="c0adw cpqxv cxk7g">
              <div>
                <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf clj4z">
                  {props.title}
                </div>
              </div>
              <h2 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c6odu c3myr">
                {props.subtitle}
              </h2>
              <p className="c16mo csqzg ci5zu">
                {props.description}
              </p>
              <div>
                {/* retrieve externel code from props if it exists */}
                {props.externalCode}
                {/* <Link href="#0">
                  <div className="c80q8 c6hcd c7806 c83hg c4l4k cz8jp cscsd coh5f co1fu c73l4 cco90">
                    {props.buttonText}
                    <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                      -&gt;
                    </span>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
