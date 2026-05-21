"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import CTA from "@/components/CTA";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const marqueeRef = useRef(null);
  useEffect(() => {
    const track = marqueeRef.current;
    if (!track) return;
    const speed = 50; // px per second
    let pos = 0;
    let last = null;
    let raf;
    const step = (ts) => {
      if (last === null) last = ts;
      const delta = ts - last;
      last = ts;
      const half = track.scrollWidth / 4;
      pos -= (speed * delta) / 1000;
      if (pos <= -half) pos += half;
      track.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const [tab, setTab] = useState("1");

  const clients = [

    {
      src: "/customer-2white.png",
      alt: "Customer 2",
    },
    {
      src: "/customer-3white.png",
      alt: "Customer 3",
    },
    {
      src: "/customer-4white.png",
      alt: "Customer 4",
    },
    {
      src: "/customer-5white.png",
      alt: "Customer 5",
    },
  ];
  return (
    <main className="home-page cih8s">
      <div className="clfoz cxmgp cwkat cg9hr citnk">
        {/* Hero */}
        <section className="home-hero c4lt2">
          <div className="c7rlc c4lt2 ca7yh cxk7g c62s6">
            {/* Particles animation */}
            <div className="csbhs cvjd3 cblyu" aria-hidden="true">
              <canvas data-particle-animation=""></canvas>
            </div>

            {/* Illustration */}
            <div
              className="home-hero-bg cdzmb ckqbz cxmgp csbhs cvjd3 ca0nu"
              aria-hidden="true"
            >
              <div className="home-hero-bg-image ca1ms cq6fz csbhs cmjk5">
                <Image
                  src="/glow-bottom.png"
                  className="home-hero-image cw312"
                  width={2146}
                  height={774}
                  alt="Hero Illustration"
                />
              </div>
            </div>

            <div className="home-hero-content cewgk cyuy9 cld13 c8230">
              {/* Hero content */}
              <div className="c0adw cpqxv cxk7g">
                <div className="co2so" data-aos="fade-down">
                  <div className="crcid ckogm c8c0t cdl1o c1ser c4lt2">
                    <Link
                      href="#0"
                      className="cwqjd ce8dy cvrd4 ccdmz cs6tu ckogm c8c0t chu7q cz8jp cscsd coh5f c4lt2 cekvg c36y6 cx431 c73l4"
                    >
                      <span className="cta5t c1ser c4lt2">
                        Risk & Compliance Platform Now Live{" "}
                        <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                          -&gt;
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
                <h1
                  className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c6odu cgxy0"
                  data-aos="fade-down"
                >
                  <span className="text-green-400">Risk</span> And Compliance
                </h1>
                <p
                  className="chu7q csqzg ci5zu"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  Elevate your organization’s risk and compliance management
                  with our all-in-one platform. Streamline governance, automate
                  workflows, monitor risks in real-time, and simplify compliance
                  across multiple frameworks to strengthen security, improve
                  efficiency, and drive business growth.
                </p>
                <div
                  className="ccvp8 cje6z cjfu5 cqblm cpox8 cz7x6 c0fvl cxk7g"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  {/* <div>
                    <Link
                      href="#0"
                      className="c80q8 c6hcd c7806 c83hg c4l4k cz8jp cscsd coh5f co1fu cpaw2 c73l4 cco90"
                    >
                      Get Started{" "}
                      <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                        -&gt;
                      </span>
                    </Link>
                  </div> */}
                  {/* <div>
                    <Link
                      href="#0"
                      className="c91bb cs6tu c30sr cni0i cp877 cz8jp cscsd coh5f cpaw2 cco90"
                    >
                      <svg
                        className="c21kk clbq5 cuupb"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                      </svg>
                      <span>Read the docs</span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section>
          <div className="c7rlc c4lt2 ca7yh cxk7g c62s6">
            {/* Particles animation */}
            <div className="c7rlc csbhs ca7yh cvjd3 cxk7g c62s6">
              <div className="csbhs cvjd3 cblyu" aria-hidden="true">
                <canvas
                  data-particle-animation=""
                  data-particle-quantity="5"
                ></canvas>
              </div>
            </div>

            <div className="cgqta clyt5">
              <div className="cxmgp">
                <div className="cyeq5 cxmgp cpaw2">
                  <div className="marquee-track" ref={marqueeRef}>
                    {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                      <div key={index} className="marquee-item">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={client.src}
                          alt={index < clients.length ? client.alt : ""}
                          width={100}
                          height={100}
                          className="brightness-0 invert"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <Features />
        {/* Features #2 */}

        <section className="c4lt2 pt-0 mt-0">
          {/* Particles animation */}
          <div className="ca1ms cq6fz csbhs ckg9q covvq c7anr cblyu cikgi cc2rp">
            <div className="csbhs cvjd3 cblyu" aria-hidden="true">
              <canvas
                data-particle-animation=""
                data-particle-quantity="6"
                data-particle-staticity="30"
              ></canvas>
            </div>
          </div>

          <div className="c7rlc cxk7g c62s6">
            <div className="c33zk">
              {/* Highlighted boxes  */}
              <div className="cjqw8 c4lt2 cpwbp">
                {/* Blurred shape */}
                <div
                  className="cdzmb ca1ms ca93n cq6fz csbhs cmjk5 c7v3c c7b27"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="434"
                    height="427"
                  >
                    <defs>
                      <linearGradient
                        id="bs2-a"
                        x1="19.609%"
                        x2="50%"
                        y1="14.544%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#6366F1"></stop>
                        <stop
                          offset="100%"
                          stopColor="#6366F1"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#bs2-a)"
                      fillRule="evenodd"
                      d="m346 898 461 369-284 58z"
                      transform="translate(-346 -898)"
                    ></path>
                  </svg>
                </div>
                {/* Grid */}
                <div className="c1956 cvby4 c73l4 co6zy" data-highlighter="">
                  {/* Box #1 */}
                  <div className="czi3f" data-aos="fade-down">
                    <div className="c834w c2dmz cgj2h cj3ir ce8dy cck46 c82g2 csey4 cjvxe cjijg crcid ccdmz c40tf csdod coafw ckogm cpspx ca3hu cxmgp c3stx cvgwp ct4qk cvu3y cmgcy czde0 c45mq cww8d cnhmh c4lt2 crsge c2zs5">
                      <div className="cgq9w cxmgp cp877 c4lt2 crsge cdmuy">
                        <div className="c1yms ccgia cre2l cg9hr citnk">
                          {/* Blurred shape */}
                          <div
                            className="csbhs c7v3c cigzm c7anr"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="342"
                              height="393"
                            >
                              <defs>
                                <linearGradient
                                  id="bs-a"
                                  x1="19.609%"
                                  x2="50%"
                                  y1="14.544%"
                                  y2="100%"
                                >
                                  <stop offset="0%" stopColor="#6366F1"></stop>
                                  <stop
                                    offset="100%"
                                    stopColor="#6366F1"
                                    stopOpacity="0"
                                  ></stop>
                                </linearGradient>
                              </defs>
                              <path
                                fill="url(#bs-a)"
                                fillRule="evenodd"
                                d="m104 .827 461 369-284 58z"
                                transform="translate(0 -112.827)"
                                opacity=".7"
                              ></path>
                            </svg>
                          </div>
                          {/* Radial gradient */}
                          <div
                            className="cdzmb ca1ms chdke cv6pf cq2iz cta5t cq6fz csbhs cmjk5 crsge cblyu citnk"
                            aria-hidden="true"
                          >
                            <div className="cje6l cg3aq ci4ze cku0c cxixl csbhs cvjd3 hero-glow-blue"></div>
                            <div className="cg3aq csmir crzj1 cku0c csbhs cl6o6 cf1rh hero-glow-blue"></div>
                          </div>

                          {/* Text */}
                          <div className="c5gc3 cddom clbq5 cqhxk c65se ce36o c4li3 c7o7e">
                            <div className="cfxdw">
                              <div>
                                <h3 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c1ser ca7kf c50uv cx5kh">
                                  Surface and Manage More Risk
                                </h3>
                                <p className="c16mo">
                                  Stay ahead of the increasing risk demands in
                                  today’s digital landscape. Our platform helps
                                  connect teams, stakeholders, data, and
                                  processes seamlessly, giving you the ability
                                  to surface and manage more risk efficiently.
                                </p>
                              </div>
                            </div>
                            {/* <div>
                              <Link
                                className="cjg8t ce8dy cjhxf ccdmz cs6tu ckogm c8c0t chu7q cz8jp cscsd coh5f c4lt2 c36y6 c73l4"
                                href="#0"
                              >
                                <span className="cta5t c1ser c4lt2">
                                  Learn more{" "}
                                  <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                                    -&gt;
                                  </span>
                                </span>
                              </Link>
                            </div> */}
                          </div>
                          {/* Image */}
                          <div className="cxmgp ctb00 c4lt2 cpaw2 cz52t">
                            <Image
                              className="ca1ms cvkzz crepj cw312 c386c cq6fz csbhs cmjk5 cxk7g "
                              src="/feature-image-01.png"
                              width="504"
                              height="400"
                              alt="Feature 01"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Box #2 */}
                  <div className="c5hqs" data-aos="fade-down">
                    <div className="c834w c2dmz cgj2h cj3ir ce8dy cck46 c82g2 csey4 cjvxe cjijg crcid ccdmz c40tf csdod coafw ckogm cpspx ca3hu cxmgp c3stx cvgwp ct4qk cvu3y cmgcy czde0 c45mq cww8d cnhmh c4lt2 crsge c2zs5">
                      <div className="cgq9w cxmgp cp877 c4lt2 crsge cdmuy">
                        <div className="cg9hr citnk">
                          {/* Radial gradient */}
                          <div
                            className="cdzmb ca1ms chdke cq2iz cq6fz csbhs cmjk5 cvh7j cblyu"
                            aria-hidden="true"
                          >
                            <div className="cg3aq cltun cku0c cvu3y csbhs cvjd3"></div>
                          </div>
                          {/* Text */}
                          <div className="c5gc3 cddom clbq5 c65se ce36o c4li3 c7o7e">
                            <div>
                              <h3 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c1ser ca7kf c50uv cx5kh">
                                Work Smarter With Greater Impact
                              </h3>
                              <p className="c16mo">
                                Transform your audit, risk, IT security, and ESG
                                programs with automation, purpose-built
                                workflows, and advanced analytics. Experience
                                game-changing efficiencies and drive impactful
                                results across your organization.
                              </p>
                            </div>
                          </div>
                          {/* Image */}
                          <div className="cxmgp ctb00 c4lt2 cgq2r cpaw2 cz52t">
                            <Image
                              className="ca1ms cvkzz cdco4 crepj cw312 c386c cq6fz csbhs cmjk5 cxk7g"
                              src="/feature-image-02.png"
                              width="536"
                              height="230"
                              alt="Feature 02"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Box #3 */}
                  <div className="co9gp" data-aos="fade-down">
                    <div className="c834w c2dmz cgj2h cj3ir ce8dy cck46 c82g2 csey4 cjvxe cjijg crcid ccdmz c40tf csdod coafw ckogm cpspx ca3hu cxmgp c3stx cvgwp ct4qk cvu3y cmgcy czde0 c45mq cww8d cnhmh c4lt2 crsge c2zs5">
                      <div className="cgq9w cxmgp cp877 c4lt2 crsge cdmuy">
                        <div className="cg9hr citnk">
                          {/* Radial gradient */}
                          <div
                            className="cdzmb ca1ms chdke cq2iz cq6fz csbhs cmjk5 cvh7j cblyu"
                            aria-hidden="true"
                          >
                            <div className="cg3aq cltun cku0c cvu3y csbhs cvjd3"></div>
                          </div>
                          {/* Text */}
                          <div className="c5gc3 cddom clbq5 c65se ce36o c4li3 c7o7e">
                            <div>
                              <h3 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c1ser ca7kf c50uv cx5kh">
                                Drive Front Line Ownership
                              </h3>
                              <p className="c16mo">
                                Empower your teams by building effective
                                partnerships across your organization. Our
                                platform offers unparalleled collaboration
                                capabilities, ensuring front-line ownership and
                                fostering a culture of security compliance.
                              </p>
                            </div>
                          </div>
                          {/* Image */}
                          <div className="cxmgp ctb00 c4lt2 cgq2r cpaw2 cz52t">
                            <Image
                              className="ca1ms cvkzz cdco4 crepj cw312 c386c cq6fz csbhs cmjk5 cxk7g"
                              src="/feature-image-03.png"
                              width="230"
                              height="230"
                              alt="Feature 03"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div
                className="flex justify-between items-start w-full gap-20"
                data-aos="flip-down"
              >
                {/* Left Content */}
                <div className="w-[35%]">
                  <h2 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c6odu c3myr">
                    FAQs
                  </h2>
                  <p className="c16mo c4cae">
                    Trusted by industry leaders, our platform is a proven
                    solution that supports both immediate goals and long-term
                    strategic visions, ensuring enterprises stay ahead of the
                    competition and achieve their full potential.
                  </p>
                </div>

                <div>
                  <div className="cta5t comlt cebxn citnk">
                    <h4 className="cqbkb cm2qf">
                      What is cybersecurity risk and compliance?
                    </h4>
                    <span className="c4cae">›</span>
                  </div>

                  <div className="cta5t comlt cebxn citnk">
                    <h4 className="cqbkb cm2qf">
                      Why is cybersecurity risk management important?
                    </h4>
                    <span className="c4cae">›</span>
                  </div>

                  <div className="cta5t comlt cebxn citnk">
                    <h4 className="cqbkb cm2qf">
                      What are the biggest cybersecurity risks?
                    </h4>
                    <span className="c4cae">›</span>
                  </div>

                  <div className="cta5t comlt cebxn citnk">
                    <h4 className="cqbkb cm2qf">
                      What is the role of a cybersecurity risk and compliance
                      officer?
                    </h4>
                    <span className="c4cae">›</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features #3 */}
        <section className="c4lt2">
          {/* Blurred shape */}
          <div
            className="cdzmb ca1ms ct6no ca93n cq6fz csbhs c7v3c c7anr cblyu"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs3-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6366F1"></stop>
                  <stop
                    offset="100%"
                    stopColor="#6366F1"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#bs3-a)"
                fillRule="evenodd"
                d="m410 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 -410 427)"
              ></path>
            </svg>
          </div>
        </section>

        {/* Testimonials carousel */}
        <section>
          <div className="c7rlc ca7yh cxk7g c62s6">
            <div className="c60je cvfhv">
              {/* Section header */}
              <div
                className="c0adw cpqxv cjqw8 cxk7g cpwbp"
                data-aos="fade-down"
              >
                <div>
                  <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf clj4z">
                    The security first platform
                  </div>
                </div>
                <h2 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c6odu c3myr">
                  How it work
                </h2>
                <p className="c16mo csqzg">
                  Discover even more powerful features designed to enhance your
                  experience and streamline your workflow for maximum
                  efficiency.
                </p>
              </div>

              <div className="cexs9 czr3h c1t5i cisme csvzg c7ptl cctzk c5z0b ckogm c8c0t c2fmr cvgwp ct4qk c3qgn cv8nf cboss c4lt2">
                <div
                  className="stellar-carousel swiper-container c73l4"
                  data-aos="zoom-in-up"
                >
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide cursor-pointer c834w c2dmz cgj2h cj3ir ce8dy cck46 c82g2 csey4 cjvxe cjijg crcid ccdmz c40tf csdod coafw ckogm cpspx ca3hu cxmgp c3stx cvgwp ct4qk cvu3y cmgcy czde0 c45mq cq4tu cww8d cnhmh c4lt2 ckkoj c2zs5">
                        <div className="cgq9w cxmgp cp877 c4lt2 crsge cdmuy">
                          {/* Particles animation */}
                          <div
                            className="cvzw6 cojpw cxz9d cae07 cscsd cwshc csbhs cvjd3 cblyu"
                            aria-hidden="true"
                          >
                            <canvas
                              data-particle-animation=""
                              data-particle-quantity="3"
                            ></canvas>
                          </div>
                          {/* Radial gradient */}
                          <div
                            className="cdzmb ca1ms chdke cq2iz cq6fz csbhs cmjk5 cu6vf cblyu"
                            aria-hidden="true"
                          >
                            <div className="caaiz cn5ru cg3aq c4ftj cku0c cvu3y cae07 cscsd csbhs cvjd3"></div>
                          </div>
                          <div className="cg9hr crsge citnk c7o7e">
                            <Image
                              className="cpgza"
                              src="https://preview.cruip.com/stellar/images/carousel-icon-01.svg"
                              width="56"
                              height="56"
                              alt="Icon 01"
                            />
                            <div className="main-card">
                              <div className="/image.png" alt="" />
                              <div>
                                <div className="cih8s ca7kf csqzg cebxn"></div>
                                Complete visibility into your cyber assets
                              </div>
                              <div className="c16mo cpgza">
                                We go beyond just the obvious ones (endpoints,
                                IP addresses, devices) to cover SaaS
                                applications, code repositories,
                                vulnerabilities, IAM policies, and more.
                              </div>
                            </div>
                            {/* <div className="c5kou">
                              <Link
                                className="cs6tu chu7q cta5t cz8jp c1ser cm2qf cscsd coh5f c4cae c73l4"
                                href="#0"
                              >
                                Learn More{" "}
                                <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                                  -&gt;
                                </span>
                              </Link>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide cursor-pointer c834w c2dmz cgj2h cj3ir ce8dy cck46 c82g2 csey4 cjvxe cjijg crcid ccdmz c40tf csdod coafw ckogm cpspx ca3hu cxmgp c3stx cvgwp ct4qk cvu3y cmgcy czde0 c45mq cq4tu cww8d cnhmh c4lt2 ckkoj c2zs5">
                        <div className="cgq9w cxmgp cp877 c4lt2 crsge cdmuy">
                          {/* Particles animation */}
                          <div
                            className="cvzw6 cojpw cxz9d cae07 cscsd cwshc csbhs cvjd3 cblyu"
                            aria-hidden="true"
                          >
                            <canvas
                              data-particle-animation=""
                              data-particle-quantity="3"
                            ></canvas>
                          </div>
                          {/* Radial gradient */}
                          <div
                            className="cdzmb ca1ms chdke cq2iz cq6fz csbhs cmjk5 cu6vf cblyu"
                            aria-hidden="true"
                          >
                            <div className="caaiz cn5ru cg3aq c4ftj cku0c cvu3y cae07 cscsd csbhs cvjd3"></div>
                          </div>
                          <div className="cg9hr crsge citnk c7o7e">
                            <Image
                              className="cpgza"
                              src="https://preview.cruip.com/stellar/images/carousel-icon-02.svg"
                              width="56"
                              height="56"
                              alt="Icon 02"
                            />
                            <div className="cih8s">
                              <div className="ca7kf csqzg cebxn">
                                Manage your infoseC risks in a single place
                              </div>
                              <div className="c16mo cpgza">
                                Track and monitor your infoseC risks across
                                assets, vendors, employees, and processes.
                                Identify mitigation controls, and assign and
                                track mitigation tasks.
                              </div>
                            </div>
                            {/* <div className="c5kou">
                              <Link
                                className="cs6tu chu7q cta5t cz8jp c1ser cm2qf cscsd coh5f c4cae c73l4"
                                href="#0"
                              >
                                Learn More{" "}
                                <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                                  -&gt;
                                </span>
                              </Link>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide cursor-pointer c834w c2dmz cgj2h cj3ir ce8dy cck46 c82g2 csey4 cjvxe cjijg crcid ccdmz c40tf csdod coafw ckogm cpspx ca3hu cxmgp c3stx cvgwp ct4qk cvu3y cmgcy czde0 c45mq cq4tu cww8d cnhmh c4lt2 ckkoj c2zs5">
                        <div className="cgq9w cxmgp cp877 c4lt2 crsge cdmuy">
                          {/* Particles animation */}
                          <div
                            className="cvzw6 cojpw cxz9d cae07 cscsd cwshc csbhs cvjd3 cblyu"
                            aria-hidden="true"
                          >
                            <canvas
                              data-particle-animation=""
                              data-particle-quantity="3"
                            ></canvas>
                          </div>
                          {/* Radial gradient */}
                          <div
                            className="cdzmb ca1ms chdke cq2iz cq6fz csbhs cmjk5 cu6vf cblyu"
                            aria-hidden="true"
                          >
                            <div className="caaiz cn5ru cg3aq c4ftj cku0c cvu3y cae07 cscsd csbhs cvjd3"></div>
                          </div>
                          <div className="cg9hr crsge citnk c7o7e">
                            <Image
                              className="cpgza"
                              src="https://preview.cruip.com/stellar/images/carousel-icon-03.svg"
                              width="56"
                              height="56"
                              alt="Icon 03"
                            />
                            <div className="cih8s">
                              <div className="ca7kf csqzg cebxn">
                                Monitor complex, multi-cloud environments
                              </div>
                              <div className="c16mo cpgza">
                                Monitor and consolidate asset data across vast,
                                multi-cloud environments, with the option to
                                auto-remediate from the Certx platform.
                              </div>
                            </div>
                            {/* <div className="c5kou">
                              <Link
                                className="cs6tu chu7q cta5t cz8jp c1ser cm2qf cscsd coh5f c4cae c73l4"
                                href="#0"
                              >
                                Learn More{" "}
                                <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                                  -&gt;
                                </span>
                              </Link>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide cursor-pointer c834w c2dmz cgj2h cj3ir ce8dy cck46 c82g2 csey4 cjvxe cjijg crcid ccdmz c40tf csdod coafw ckogm cpspx ca3hu cxmgp c3stx cvgwp ct4qk cvu3y cmgcy czde0 c45mq cq4tu cww8d cnhmh c4lt2 ckkoj c2zs5">
                        <div className="cgq9w cxmgp cp877 c4lt2 crsge cdmuy">
                          {/* Particles animation */}
                          <div
                            className="cvzw6 cojpw cxz9d cae07 cscsd cwshc csbhs cvjd3 cblyu"
                            aria-hidden="true"
                          >
                            <canvas
                              data-particle-animation=""
                              data-particle-quantity="3"
                            ></canvas>
                          </div>
                          {/* Radial gradient */}
                          <div
                            className="cdzmb ca1ms chdke cq2iz cq6fz csbhs cmjk5 cu6vf cblyu"
                            aria-hidden="true"
                          >
                            <div className="caaiz cn5ru cg3aq c4ftj cku0c cvu3y cae07 cscsd csbhs cvjd3"></div>
                          </div>
                          <div className="cg9hr crsge citnk c7o7e">
                            <Image
                              className="cpgza"
                              src="https://preview.cruip.com/stellar/images/carousel-icon-04.svg"
                              width="56"
                              height="56"
                              alt="Icon 04"
                            />
                            <div className="cih8s">
                              <div className="ca7kf csqzg cebxn">
                                Make compliance radically simple
                              </div>
                              <div className="c16mo cpgza">
                                Continuously monitor compliance towards commonly
                                known frameworks like NIST, SOC 2, HIPAA, ISO
                                27001, CCPA, and custom frameworks from a single
                                platform.
                              </div>
                            </div>
                            {/* <div className="c5kou">
                              <Link
                                className="cs6tu chu7q cta5t cz8jp c1ser cm2qf cscsd coh5f c4cae c73l4"
                                href="#0"
                              >
                                Learn More{" "}
                                <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">
                                  -&gt;
                                </span>
                              </Link>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features #4 */}
        <section className="c4lt2">
          <div className="c7rlc c4lt2 ca7yh cxk7g c62s6">
            {/* Blurred shape */}
            <div
              className="cdzmb cxixl csbhs c7v3c cr8kn c239i covvq c7anr cblyu"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs4-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor=""></stop>
                    <stop
                      offset="100%"
                      stopColor="#3B82F6"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs4-a)"
                  fillRule="evenodd"
                  d="m0 0 461 369-284 58z"
                  transform="matrix(1 0 0 -1 0 427)"
                ></path>
              </svg>
            </div>

            <div className="cjqw8 c33zk cpwbp c5dbr">
              {/* Section header */}
              <div className="cpqxv cjqw8 cpwbp" data-aos="fade-right">
                <h2 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c6odu c3myr">
                  Why trust us?
                </h2>
                <p className="c16mo csqzg">
                  Many desktop publishing packages and web page editors now use
                  lorem ipsum as their default model text, and a search will
                  uncover many web sites still in their infancy.
                </p>
              </div>

              {/* Rows */}
              <div className="cvimj c5sky">
                {/* Row */}
                <div className="c5ws6 ctpm6 cm9vp" data-aos="flip-up">
                  <div>
                    <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf cwyf6">
                      API Authorization
                    </div>
                  </div>
                  <div className="cx3re c1hc0 c9xwv c4ecq co6zy">
                    {/* Feature */}
                    <div>
                      <div className="cta5t comlt cebxn citnk">
                        <svg
                          className="c21kk clbq5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M13 16c-.153 0-.306-.035-.447-.105l-3.851-1.926c-.231.02-.465.031-.702.031-4.411 0-8-3.14-8-7s3.589-7 8-7 8 3.14 8 7c0 1.723-.707 3.351-2 4.63V15a1.003 1.003 0 0 1-1 1Zm-4.108-4.054c.155 0 .308.036.447.105L12 13.382v-2.187c0-.288.125-.562.341-.752C13.411 9.506 14 8.284 14 7c0-2.757-2.691-5-6-5S2 4.243 2 7s2.691 5 6 5c.266 0 .526-.02.783-.048a1.01 1.01 0 0 1 .109-.006Z"></path>
                        </svg>
                        <h4 className="cqbkb cm2qf">Discussions</h4>
                      </div>
                      <p className="c16mo c4cae">
                        Login box must find the right balance for the user
                        convenience, privacy and security.
                      </p>
                    </div>
                    {/* Feature */}
                    <div>
                      <div className="cta5t comlt cebxn citnk">
                        <svg
                          className="c21kk clbq5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M15 9a3.841 3.841 0 0 0-2.661 1.545A2.524 2.524 0 0 0 10 9a1 1 0 1 0 0 2c.361 0 .57.279.89 1.284C10.243 13.08 9.441 14 9 14a1 1 0 0 0 0 2 3.841 3.841 0 0 0 2.661-1.545A2.524 2.524 0 0 0 14 16a1 1 0 0 0 0-2c-.361 0-.571-.279-.89-1.284C13.757 11.92 14.559 11 15 11a1 1 0 0 0 0-2Z"></path>
                          <path d="M10 8a1 1 0 0 0 0-2H7.825c.432-2.421.983-4 2.175-4a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3C7.193 0 6.313 2.9 5.793 6H3a1 1 0 1 0 0 2h2.49c-.506 3.52-1 6-2.49 6a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3c3.367 0 3.964-4.175 4.49-7.858L7.51 8H10Z"></path>
                        </svg>
                        <h4 className="cqbkb cm2qf">Team views</h4>
                      </div>
                      <p className="c16mo c4cae">
                        Login box must find the right balance for the user
                        convenience, privacy and security.
                      </p>
                    </div>
                    {/* Feature */}
                    <div>
                      <div className="cta5t comlt cebxn citnk">
                        <svg
                          className="c21kk clbq5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5ZM15.707 14.293 13.314 11.9a8.019 8.019 0 0 1-1.414 1.414l2.393 2.393a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"></path>
                        </svg>
                        <h4 className="cqbkb cm2qf">Powerful search</h4>
                      </div>
                      <p className="c16mo c4cae">
                        Login box must find the right balance for the user
                        convenience, privacy and security.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Row */}
                <div className="cm9vp" data-aos="flip-up">
                  <div>
                    <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf cwyf6">
                      User Management
                    </div>
                  </div>
                  <div className="cx3re c1hc0 c9xwv c4ecq co6zy">
                    {/* Feature */}
                    <div>
                      <div className="cta5t comlt cebxn citnk">
                        <svg
                          className="c21kk clbq5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"></path>
                        </svg>
                        <h4 className="cqbkb cm2qf">Analytics</h4>
                      </div>
                      <p className="c16mo c4cae">
                        Login box must find the right balance for the user
                        convenience, privacy and security.
                      </p>
                    </div>
                    {/* Feature */}
                    <div>
                      <div className="cta5t comlt cebxn citnk">
                        <svg
                          className="c21kk clbq5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z"></path>
                        </svg>
                        <h4 className="cqbkb cm2qf">Notifications</h4>
                      </div>
                      <p className="c16mo c4cae">
                        Login box must find the right balance for the user
                        convenience, privacy and security.
                      </p>
                    </div>
                    {/* Feature */}
                    <div>
                      <div className="cta5t comlt cebxn citnk">
                        <svg
                          className="c21kk clbq5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1ZM3 2h10v8H9v4H3V2Z"></path>
                        </svg>
                        <h4 className="cqbkb cm2qf">Integrations</h4>
                      </div>
                      <p className="c16mo c4cae">
                        Login box must find the right balance for the user
                        convenience, privacy and security.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Row */}
                <div className="cm9vp" data-aos="flip-up">
                  <div>
                    <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf cwyf6">
                      Standard Security
                    </div>
                  </div>
                  <div className="cx3re c1hc0 c9xwv c4ecq co6zy">
                    {/* Feature */}
                    <div>
                      <div className="cta5t comlt cebxn citnk">
                        <svg
                          className="c21kk clbq5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M15.5 11H13a5.022 5.022 0 0 1-3.453-1.4l-1.2 1.607A7.065 7.065 0 0 0 12 12.92v1.586a.5.5 0 0 0 .853.349l3-3A.5.5 0 0 0 15.5 11ZM1 5a5.022 5.022 0 0 1 3.453 1.4l1.205-1.61A7.028 7.028 0 0 0 1 3a1 1 0 1 0 0 2ZM13 5h2.5a.5.5 0 0 0 .354-.853l-3-3A.5.5 0 0 0 12 1.5v1.58a7.032 7.032 0 0 0-4.6 2.72L5 9a5.025 5.025 0 0 1-4 2 1 1 0 0 0 0 2 7.034 7.034 0 0 0 5.6-2.8L9 7a5.025 5.025 0 0 1 4-2Z"></path>
                        </svg>
                        <h4 className="cqbkb cm2qf">Privacy</h4>
                      </div>
                      <p className="c16mo c4cae">
                        Login box must find the right balance for the user
                        convenience, privacy and security.
                      </p>
                    </div>
                    {/* Feature */}
                    <div>
                      <div className="cta5t comlt cebxn citnk">
                        <svg
                          className="c21kk clbq5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M14 14H2a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2ZM7.293 11.707a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L9 8.586V1a1 1 0 1 0-2 0v7.586L3.707 5.293a1 1 0 0 0-1.414 1.414l5 5Z"></path>
                        </svg>
                        <h4 className="cqbkb cm2qf">Data export</h4>
                      </div>
                      <p className="c16mo c4cae">
                        Login box must find the right balance for the user
                        convenience, privacy and security.
                      </p>
                    </div>
                    {/* Feature */}
                    <div>
                      <div className="cta5t comlt cebxn citnk">
                        <svg
                          className="c21kk clbq5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M14.6.085 8 2.885 1.4.085c-.5-.2-1.4-.1-1.4.9v11c0 .4.2.8.6.9l7 3c.3.1.5.1.8 0l7-3c.4-.2.6-.5.6-.9v-11c0-1-.9-1.1-1.4-.9ZM2 2.485l5 2.1v8.8l-5-2.1v-8.8Zm12 8.8-5 2.1v-8.7l5-2.1v8.7Z"></path>
                        </svg>
                        <h4 className="cqbkb cm2qf">Real-time sync</h4>
                      </div>
                      <p className="c16mo c4cae">
                        Login box must find the right balance for the user
                        convenience, privacy and security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <CTA
          title="The security first platform"
          subtitle="Take control of your business"
          description="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
          buttonText="Get Started"
        />
      </div>
    </main>
  );
}
