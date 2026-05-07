"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/CTA';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (
        <main className="cih8s">

            {/* Hero */}
            <section className="c4lt2">

                {/* Radial gradient */}
                <div className="cdzmb csbhs cq6fz c7anr cblyu citnk cq2iz caqr5 ca1ms ch3pd cta5t cv6pf" aria-hidden="true">
                    <div className="cg3aq csbhs cvjd3 cku0c ci4ze cvkuv cje6l"></div>
                    <div className="cg3aq csbhs cz52t cwi6g cku0c csmir cxixl cltun"></div>
                </div>

                {/* Particles animation */}
                <div className="csbhs cvjd3 cblyu c5cj0" aria-hidden="true">
                    <canvas data-particle-animation="" data-particle-quantity="15"></canvas>
                </div>

                {/* Illustration */}
                <div className="cdzmb csbhs cq6fz cblyu ccz65 ca1ms cfmae c7v3c cstve" aria-hidden="true">
                    <Image src="https://preview.cruip.com/stellar/images/page-illustration.svg" className="cw312" width={1440} height={427} alt="Page Illustration" />
                </div>

                <div className="cxk7g c7rlc c62s6 ca7yh">
                    <div className="c1i9j c8230 cmma3">

                        {/* Hero content */}
                        <div className="c0adw" data-aos="fade-down">
                            <div className="c1ser c80q8 cpvrw cic8n cnt4i clj4z cm2qf crgfn">The folks behind the product</div>
                            <h1 className="cgxy0 c80q8 chl73 c9p57 ch30f cnt4i cwyf6 crgfn">Turning security into innovation</h1>
                            {/* Rings illustration */}
                            <div className="c4lt2 c1ser cta5t cv6pf" data-aos="zoom-in">
                                {/* Particles animation */}
                                <div className="csbhs cvjd3 cblyu" aria-hidden="true">
                                    <canvas data-particle-animation="" data-particle-quantity="10"></canvas>
                                </div>
                                <div className="c1ser c0grr">
                                    <Image src="/about-illustration.svg"
                                        width={446}
                                        height={446}
                                        alt="About illustration"
                                    />
                                </div>
                                <Image className="csbhs cwrrk c3708 cxbvz"
                                    src="/about-icon.svg"
                                    width={72}
                                    height={72}
                                    alt="About icon"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/* Story */}
            <section className="c4lt2">

                {/* Blurred shape */}
                <div className="cdzmb csbhs cq6fz c7anr cblyu came3 c2lbp ca1ms cxixl c7v3c" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs>
                            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                <stop offset="0%" stopColor="#34D399"></stop>
                                <stop offset="100%" stopColor="#059669" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
                    </svg>

                </div>

                <div className="c62s6 ca7yh">
                    <div className="cxk7g ck2qp">
                        <div className="cpwbp cjqw8">

                            {/* Section header */}
                            <div className="cxk7g cpqxv cpwbp c0adw cjqw8">
                                <h2 className="c3myr c80q8 chl73 c9p57 ch30f cnt4i crgfn" data-aos="fade-up">About Us</h2>
                            </div>

                            <div className="cu781 cwsds ckft5 cwj02 ckghx">
                                <figure className="cwbut" data-aos="fade-right">
                                    <Image
                                        className="cewpm cckwq cxk7g c86dz chbpe c6nee c09pg"
                                        src="https://preview.cruip.com/stellar/images/team.jpg"
                                        width={420}
                                        height={280}
                                        alt="Team"
                                    />
                                </figure>
                                <div className="cxk7g crn2g">
                                    <div className="cuw2g c16mo" data-aos="fade-left">
                                        <p>
                                            we understand that managing cybersecurity and compliance can be complex, time-consuming, and challenging for businesses. That’s why we’ve created a powerful platform designed to simplify and streamline the process, enabling you to stay ahead in a constantly evolving digital world.
                                        </p>
                                        <p>
                                            From discovering cyber assets to setting up and managing your information security program, our platform offers an all-in-one solution that gives you complete control over your compliance journey.
                                        </p>
                                        <p>
                                            You can dive into the atoms that make up a product, share the moments that move you and discuss the ideas you find compelling. We want to create a ground for <strong className="cm2qf cqbkb">discussion and bring knowledge together</strong>, while making it more accessible and easier to grasp.
                                        </p>
                                        <p>
                                            Contrary to popular belief, this product is not random security. It has roots in a piece of classical literature, making it over 5 years old. Richard McClintock, a professor at <Link className="cm2qf c1nfs cxwtc" href="#0">Hampden-Sydney College</Link> in Virginia, looked up one of the more obscure words, consectetur from a passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                        </p>
                                        <p>
                                            We all thrive on learning something new every day and everyone is constantly trying on different hats. We are working with new technologies while rethinking an old industry and are excited about all the possibilities and opportunities to innovate.
                                            It&apos;s a problem deeply ingrained in traditional sectors like startups and the wider service industry but which has been compounded in the past five to ten years by the emergence of the mostly tech-powered gig economy which has created a new generation of shift workers and indeed
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="c4lt2" data-aos="fade-up">
                {/* Radial gradient */}
                <div className="cdzmb csbhs cvjd3 cblyu cxmgp" aria-hidden="true">
                    <div className="csbhs cq6fz c7anr citnk cq2iz cu6vf ca1ms ch3pd cta5t cv6pf">
                        <div className="cg3aq csbhs cvjd3 cku0c ci4ze ca93n cje6l"></div>
                    </div>
                </div>
                <div className="cxk7g c7rlc c62s6 ca7yh" >
                    <div className="clyt5 ct20k">
                        {/* Content */}
                        <div className="cxk7g cpqxv cpwbp c0adw cjqw8" data-aos="fade-down">
                            <h2 className="c3myr c80q8 chl73 c9p57 ch30f cnt4i c6odu crgfn"  >We are a happy, small team</h2>
                            <p className="csqzg c16mo">Various versions of Lorem Ipsum have evolved over the years, sometimes by accident, sometimes on purpose, and by injecting humour and the like.</p>
                        </div>
                        {/* Team members */}
                        <div className="co6zy c2kaf c9c1i cz8gt can2d cw3xi"  data-aos="flip-up">
                            {/* Member #01 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-01.png"
                                        width={48}
                                        height={48}
                                        alt="Team 01"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Sarah Barnekow</div>
                                        <div className="c4cae cm2qf c1nfs">CEO &amp; Co-founder</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #02 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-02.png"
                                        width={48}
                                        height={48}
                                        alt="Team 02"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Alex Suevalov</div>
                                        <div className="c4cae cm2qf c1nfs">Tech Lead</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #03 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-03.png"
                                        width={48}
                                        height={48}
                                        alt="Team 03"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Mark Lamprecht</div>
                                        <div className="c4cae cm2qf c1nfs">Software Engineer</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #04 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-04.png"
                                        width={48}
                                        height={48}
                                        alt="Team 04"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Scott Bailey</div>
                                        <div className="c4cae cm2qf c1nfs">Software Engineer</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #05 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-05.png"
                                        width={48}
                                        height={48}
                                        alt="Team 05"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Vedant Hegde</div>
                                        <div className="c4cae cm2qf c1nfs">Customer Experience</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #06 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-06.png"
                                        width={48}
                                        height={48}
                                        alt="Team 06"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Lucy Radux</div>
                                        <div className="c4cae cm2qf c1nfs">Marketing Manager</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #07 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-07.png"
                                        width={48}
                                        height={48}
                                        alt="Team 07"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Devani Janssen</div>
                                        <div className="c4cae cm2qf c1nfs">Product Design</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #08 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-08.png"
                                        width={48}
                                        height={48}
                                        alt="Team 08"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Dima Trystram</div>
                                        <div className="c4cae cm2qf c1nfs">Customer Success</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #09 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-09.png"
                                        width={48}
                                        height={48}
                                        alt="Team 09"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Fraser Davidson</div>
                                        <div className="c4cae cm2qf c1nfs">Customer Success</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #10 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-10.png"
                                        width={48}
                                        height={48}
                                        alt="Team 10"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">William Adkins</div>
                                        <div className="c4cae cm2qf c1nfs">Customer Experience</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #11 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-11.png"
                                        width={48}
                                        height={48}
                                        alt="Team 11"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Debbie Poulin</div>
                                        <div className="c4cae cm2qf c1nfs">Head of Talent</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #12 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-12.png"
                                        width={48}
                                        height={48}
                                        alt="Team 12"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">James Kudinov</div>
                                        <div className="c4cae cm2qf c1nfs">Product Design</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #13 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-13.png"
                                        width={48}
                                        height={48}
                                        alt="Team 13"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Zhenya Rynzhuk</div>
                                        <div className="c4cae cm2qf c1nfs">Software Engineer</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #14 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-14.png"
                                        width={48}
                                        height={48}
                                        alt="Team 14"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Mary Maka</div>
                                        <div className="c4cae cm2qf c1nfs">Enterprise Architect</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #15 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-15.png"
                                        width={48}
                                        height={48}
                                        alt="Team 15"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Monty Hayton</div>
                                        <div className="c4cae cm2qf c1nfs">Video Producer</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #16 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-16.png"
                                        width={48}
                                        height={48}
                                        alt="Team 16"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Srdjan Vidakovic</div>
                                        <div className="c4cae cm2qf c1nfs">Operations Manager</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #17 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-17.png"
                                        width={48}
                                        height={48}
                                        alt="Team 17"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">David Cran</div>
                                        <div className="c4cae cm2qf c1nfs">Financial Analyst</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #18 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-18.png"
                                        width={48}
                                        height={48}
                                        alt="Team 18"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Jacek Janiczak</div>
                                        <div className="c4cae cm2qf c1nfs">Data Engineer</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #19 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-19.png"
                                        width={48}
                                        height={48}
                                        alt="Team 19"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Tommy Chandra</div>
                                        <div className="c4cae cm2qf c1nfs">Head of Design</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                            {/* Member #20 */}
                            <div className="c4lt2 citnk cta5t cu781 c5mk1 ccjhc cb5zl ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg coafw cck46 cn36n cers6 c73l4">
                                <div className="citnk cta5t c4wi6">
                                    <Image
                                        src="https://preview.cruip.com/stellar/images/team-20.png"
                                        width={48}
                                        height={48}
                                        alt="Team 20"
                                    />
                                    <div className="cih8s">
                                        <div className="czjvy ca7kf ctzj3">Ally Golovko</div>
                                        <div className="c4cae cm2qf c1nfs">Software Engineer</div>
                                    </div>
                                </div>
                                <Link className="clbq5 c5668 cxz9d cndpm cpcg4 ct1u7 c0on6 csvyp cq3pp" href="#0" aria-label="Member's Twitter">
                                    <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruitment */}
            <section className="c4lt2">

                {/* Blurred shape */}
                <div className="cdzmb csbhs cq6fz c7anr cblyu cl53t ca1ms cnirn ca93n c7v3c" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs>
                            <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                <stop offset="0%" stopColor="#6366F1"></stop>
                                <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path fill="url(#bs3-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)"></path>
                    </svg>
                </div>

                <div className="cxk7g c7rlc c62s6 ca7yh">
                    <div className="cykus clyt5 cnj85 ct20k">

                        {/* Section header */}
                        <div className="cxk7g cpqxv cpwbp c0adw cjqw8" data-aos="fade-down">
                            <h2 className="c3myr c80q8 chl73 c9p57 ch30f cnt4i c6odu crgfn">Join a team of makers</h2>
                            <p className="csqzg c16mo">We are makers at heart. Problem solvers and storytellers. We are a diverse team of individuals who build things to make our customers happy.</p>
                        </div>

                        {/* Icons with text */}
                        <div className="ca2js cxk7g co6zy c0fvl cvby4 cng6q cx3re c2sla" data-aos="fade-right">
                            {/* Block #1 */}
                            <div className="ce9r8 c0adw">
                                <div className="cpgza c1ser ce196 cb0yq cta5t cv6pf cku0c cb919 cn0tc cxs7n">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24">
                                        <g fill="none" fillRule="nonzero" opacity=".8">
                                            <path className="c35wp" d="M14.416 3.527C13.841 4.39 13.5 5.242 13.5 6a1.5 1.5 0 1 0 3 0c0-.758-.34-1.61-.916-2.473A8.962 8.962 0 0 0 15 2.748c-.2.239-.398.5-.584.78ZM17.5 6a2.5 2.5 0 1 1-5 0c0-.992.41-2.015 1.084-3.027a9.979 9.979 0 0 1 1.062-1.327L15 1.293l.354.353a9.979 9.979 0 0 1 1.062 1.326C17.091 3.986 17.5 5.009 17.5 6ZM6 6.5c-1.374 0-2.5-1.055-2.5-2.375 0-.243.043-.492.125-.746.176-.548.523-1.108.99-1.672A9.774 9.774 0 0 1 5.677.62L6 .344l.323.275a9.774 9.774 0 0 1 1.061 1.089c.468.563.815 1.123.991 1.671.082.254.125.503.125.746C8.5 5.445 7.374 6.5 6 6.5Zm-.615-4.154c-.393.474-.678.933-.808 1.339-.051.16-.077.307-.077.44C4.5 4.877 5.164 5.5 6 5.5s1.5-.623 1.5-1.375c0-.133-.026-.28-.077-.44-.13-.406-.415-.865-.808-1.34A8.746 8.746 0 0 0 6 1.682c-.21.205-.42.43-.615.665Z"></path>
                                            <path className="c7u3b" d="M9.483 14.562A6.495 6.495 0 0 1 15 11.5h4.5v.5a8.5 8.5 0 0 1-8.5 8.5H9.5v3h-1v-7H7A6.5 6.5 0 0 1 .5 10v-.5H4c2.89 0 5.26 2.23 5.483 5.062Zm-.485.938H8.5v1h.174a6.45 6.45 0 0 1 .324-1Zm.502 4H11a7.5 7.5 0 0 0 7.484-7H15A5.5 5.5 0 0 0 9.5 18v1.5Zm-1-4V15A4.5 4.5 0 0 0 4 10.5H1.522A5.5 5.5 0 0 0 7 15.5h1.5Z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="cebxn ca7kf ctzj3">Passionate</div>
                                <p className="c4cae c16mo">You are passionate about digital products of any kind and are a builder at heart.</p>
                            </div>
                            {/* Block #2 */}
                            <div className="ce9r8 c0adw">
                                <div className="cpgza c1ser ce196 cb0yq cta5t cv6pf cku0c cb919 cn0tc cxs7n">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                        <path className="c7u3b" d="M9.423 12.278H.87L11.614.458l-1.037 7.264h8.553L8.386 19.542l1.037-7.264Zm-6.293-1h7.447l-.74 5.18 7.033-7.736H9.423l.74-5.18-7.033 7.736Z" opacity=".8"></path>
                                    </svg>
                                </div>
                                <div className="cebxn ca7kf ctzj3">Energetic</div>
                                <p className="c4cae c16mo">You are passionate about digital products of any kind and are a builder at heart.</p>
                            </div>
                            {/* Block #3 */}
                            <div className="ce9r8 c0adw">
                                <div className="cpgza c1ser ce196 cb0yq cta5t cv6pf cku0c cb919 cn0tc cxs7n">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <g fill="none" fillRule="nonzero" opacity=".8">
                                            <path className="c35wp" d="M11.5 1h1v4h-1V1ZM23 11.5v1h-4v-1h4ZM12.5 23h-1v-4h1v4ZM1 12.5v-1h4v1H1Z"></path>
                                            <path className="c7u3b" d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5Zm0-1c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5Zm0-8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="cebxn ca7kf ctzj3">Achiever</div>
                                <p className="c4cae c16mo">You are passionate about digital products of any kind and are a builder at heart.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Images */}
                <div className="cxk7g copkr c62s6 c1t00" data-aos="flip-up">
                    <div className="co6zy c1nfr cdrt8 clb5d c80dw c6joe">
                        <Image className="c1trx cpaw2 c6nee c1zn5" src="https://preview.cruip.com/stellar/images/recruitment-01.jpg" width={352} height={220} alt="Recruitment 01" />
                        <Image className="c1trx cpaw2 c6nee c1zn5" src="https://preview.cruip.com/stellar/images/recruitment-02.jpg" width={352} height={220} alt="Recruitment 02" />
                        <Image className="c1trx cpaw2 c6nee c1zn5" src="https://preview.cruip.com/stellar/images/recruitment-03.jpg" width={352} height={220} alt="Recruitment 03" />
                        <Image className="c1trx cpaw2 c6nee c1zn5" src="https://preview.cruip.com/stellar/images/recruitment-04.jpg" width={352} height={220} alt="Recruitment 04" />
                    </div>
                </div>

                {/* Positions */}
                <div className="c4lt2 c62s6 ca7yh">

                    {/* Blurred shape */}
                    <div className="cdzmb csbhs cq6fz c7anr cl53t ca1ms cmnpl czct6 c7v3c" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                            <defs>
                                <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                                    <stop offset="0%" stopColor="#6366F1"></stop>
                                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <path fill="url(#bs2-a)" fillRule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)"></path>
                        </svg>
                    </div>

                    <div className="cxk7g cpqxv clyt5 ct20k">
                        <h3 className="c78uk c1ser c80q8 chl73 c9p57 ch30f cnt4i cin20 crgfn cf8r4" data-aos="fade-left">Open positions</h3>
                        <div className="c5ett" data-aos="fade-left">
                            {/* Engineering */}
                            <div>
                                <h4 className="c1ser c80q8 cpvrw cic8n cnt4i clj4z cm2qf crgfn">Engineering</h4>
                                <ul className="c5sky cvimj">
                                    <li className="citnk cg9hr ckscb cu781 cdq40 cre2l">
                                        <span className="ceqx4 cm2qf cqbkb">Software Engineering Intern</span>
                                        <Link className="c1ser c4cae cm2qf c1nfs c73l4" href="#0">Remote / North America <span className="cvpqc c18jp c4v48 cz8jp cscsd crls0">-&gt;</span></Link>
                                    </li>
                                    <li className="citnk cg9hr ckscb cu781 cdq40 cre2l">
                                        <span className="ceqx4 cm2qf cqbkb">Software Engineer, Core Infrastructure</span>
                                        <Link className="c1ser c4cae cm2qf c1nfs c73l4" href="#0">Remote <span className="cvpqc c18jp c4v48 cz8jp cscsd crls0">-&gt;</span></Link>
                                    </li>
                                    <li className="citnk cg9hr ckscb cu781 cdq40 cre2l">
                                        <span className="ceqx4 cm2qf cqbkb">Software Engineer, Data Platform</span>
                                        <Link className="c1ser c4cae cm2qf c1nfs c73l4" href="#0">Remote / Europe <span className="cvpqc c18jp c4v48 cz8jp cscsd crls0">-&gt;</span></Link>
                                    </li>
                                    <li className="citnk cg9hr ckscb cu781 cdq40 cre2l">
                                        <span className="ceqx4 cm2qf cqbkb">Software Engineer, Marketing Systems</span>
                                        <Link className="c1ser c4cae cm2qf c1nfs c73l4" href="#0">Remote / North America <span className="cvpqc c18jp c4v48 cz8jp cscsd crls0">-&gt;</span></Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Marketing */}
                            <div>
                                <h4 className="c1ser c80q8 cpvrw cic8n cnt4i clj4z cm2qf crgfn">Marketing</h4>
                                <ul className="c5sky cvimj">
                                    <li className="citnk cg9hr ckscb cu781 cdq40 cre2l">
                                        <span className="ceqx4 cm2qf cqbkb">Product Marketing Manager</span>
                                        <Link className="c1ser c4cae cm2qf c1nfs c73l4" href="#0">Remote / North America <span className="cvpqc c18jp c4v48 cz8jp cscsd crls0">-&gt;</span></Link>
                                    </li>
                                    <li className="citnk cg9hr ckscb cu781 cdq40 cre2l">
                                        <span className="ceqx4 cm2qf cqbkb">Marketing Manager</span>
                                        <Link className="c1ser c4cae cm2qf c1nfs c73l4" href="#0">Remote / Europe <span className="cvpqc c18jp c4v48 cz8jp cscsd crls0">-&gt;</span></Link>
                                    </li>
                                </ul>
                            </div>
                            {/* Design */}
                            <div>
                                <h4 className="c1ser c80q8 cpvrw cic8n cnt4i clj4z cm2qf crgfn">Design</h4>
                                <ul className="c5sky cvimj">
                                    <li className="citnk cg9hr ckscb cu781 cdq40 cre2l">
                                        <span className="ceqx4 cm2qf cqbkb">Product Designer, Consumer</span>
                                        <Link className="c1ser c4cae cm2qf c1nfs c73l4" href="#0">Remote / North America <span className="cvpqc c18jp c4v48 cz8jp cscsd crls0">-&gt;</span></Link>
                                    </li>
                                    <li className="citnk cg9hr ckscb cu781 cdq40 cre2l">
                                        <span className="ceqx4 cm2qf cqbkb">Senior Product Designer</span>
                                        <Link className="c1ser c4cae cm2qf c1nfs c73l4" href="#0">Remote / Europe <span className="cvpqc c18jp c4v48 cz8jp cscsd crls0">-&gt;</span></Link>
                                    </li>
                                    <li className="citnk cg9hr ckscb cu781 cdq40 cre2l">
                                        <span className="ceqx4 cm2qf cqbkb">Lead Designer</span>
                                        <Link className="c1ser c4cae cm2qf c1nfs c73l4" href="#0">Remote / Europe <span className="cvpqc c18jp c4v48 cz8jp cscsd crls0">-&gt;</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Testimonials */}
            <section className="c4lt2">
                {/* Radial gradient */}
                <div className="cdzmb csbhs cvjd3 cblyu cxmgp" aria-hidden="true">
                    <div className="csbhs cq6fz c7anr citnk cq2iz cu6vf ca1ms ch3pd cta5t cv6pf">
                        <div className="cg3aq csbhs cvjd3 cku0c ci4ze ca93n cje6l"></div>
                    </div>
                </div>
                <div className="cxk7g c7rlc c62s6 ca7yh">
                    <div className="clyt5 ct20k">
                        {/* Content */}
                        <div className="cxk7g cpqxv cpwbp c0adw cjqw8" data-aos="fade-down">
                            <h2 className="c3myr c80q8 chl73 c9p57 ch30f cnt4i c6odu crgfn">Hear from our people</h2>
                            <p className="csqzg c16mo">Our company is comprised of people who make bold choices for our clients and the security sector. It&apos;s in our DNA to push our limits and make bold changes.</p>
                        </div>
                        {/* Grid */}
                        <div className="cxk7g co6zy c0fvl cdrt8 cz8gt c3dqi can2d" data-aos="flip-right">
                            {/* Testimonial #01 */}
                            <div className="c4lt2 ce9r8 ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg cfqen">
                                <div className="cmhzb citnk cta5t cu781">
                                    <div className="citnk cta5t c4wi6">
                                        <Image
                                            src="https://preview.cruip.com/stellar/images/testimonial-01.png"
                                            width={44}
                                            height={44}
                                            alt="Testimonial 01"
                                        />
                                        <div className="cih8s">
                                            <div className="ca7kf ctzj3">Mary Janiczak</div>
                                            <div className="c4cae cm2qf c1nfs">Data Engineer</div>
                                        </div>
                                    </div>
                                    <Link className="clbq5 c5668" href="#0" aria-label="Member's Twitter">
                                        <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                            <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <p className="c4cae c16mo">“The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics, and walk in a variety of users&apos; shoes.”</p>
                            </div>
                            {/* Testimonial #02 */}
                            <div className="c4lt2 ce9r8 ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg cfqen">
                                <div className="cmhzb citnk cta5t cu781">
                                    <div className="citnk cta5t c4wi6">
                                        <Image
                                            src="https://preview.cruip.com/stellar/images/testimonial-02.png"
                                            width={44}
                                            height={44}
                                            alt="Testimonial 02"
                                        />
                                        <div className="cih8s">
                                            <div className="ca7kf ctzj3">Jack Smith</div>
                                            <div className="c4cae cm2qf c1nfs">Software Engineer</div>
                                        </div>
                                    </div>
                                    <Link className="clbq5 c5668" href="#0" aria-label="Member's Twitter">
                                        <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                            <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <p className="c4cae c16mo">“The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics, and walk in a variety of users&apos; shoes.”</p>
                            </div>
                            {/* Testimonial #03 */}
                            <div className="c4lt2 ce9r8 ckogm c8c0t czr5n ci4xg c3ftw cx51c cgakg cfqen">
                                <div className="cmhzb citnk cta5t cu781">
                                    <div className="citnk cta5t c4wi6">
                                        <Image
                                            src="https://preview.cruip.com/stellar/images/testimonial-03.png"
                                            width={44}
                                            height={44}
                                            alt="Testimonial 03"
                                        />
                                        <div className="cih8s">
                                            <div className="ca7kf ctzj3">Anna Johnson</div>
                                            <div className="c4cae cm2qf c1nfs">Product Designer</div>
                                        </div>
                                    </div>
                                    <Link className="clbq5 c5668" href="#0" aria-label="Member's Twitter">
                                        <svg className="c01eg" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                            <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                                <p className="c4cae c16mo">“The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics, and walk in a variety of users&apos; shoes.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA title="The security first platform" subtitle="Supercharge your security" description="All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet." buttonText="Start Building" />

        </main >
    )
}

export default About
