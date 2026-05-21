'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
    const [annual, setAnnual] = useState(true)

    return (
        <section className="c4lt2">
            {/* Radial gradient */}
            <div className="cdzmb cxmgp csbhs cvjd3 cblyu" aria-hidden="true">
                <div className="ca1ms ch3pd cv6pf cq2iz cta5t cq6fz csbhs cu6vf c7anr citnk">
                    <div className="cje6l cg3aq ci4ze cku0c ca93n csbhs cvjd3"></div>
                </div>
            </div>
            <div className="c7rlc ca7yh cxk7g c62s6">
                <div className="ct20k clyt5">
                    {/* Content */}
                    <div className="c0adw cpqxv cjqw8 cxk7g cpwbp" data-aos="fade-down">
                        <div>
                            <div className="c80q8 crgfn cpvrw cic8n cnt4i c1ser cm2qf clj4z">Pricing plans</div>
                        </div>
                        <h2 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c6odu c3myr">Flexible plans and features</h2>
                        <p className="c16mo csqzg">All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                    </div>
                    {/* Pricing tabs */}
                    <div className="c4lt2" data-aos="fade-left">
                        {/* Blurred shape */}
                        <div className="cdzmb ca1ms c33s5 cxixl cfc6z csbhs cmjk5 c7v3c c7b27" aria-hidden="true" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
  <defs>
    <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
      <stop offset="0%" stopColor="#007BFF"></stop> {/* Green */}
      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"></stop> {/* Blue */}
    </linearGradient>
  </defs>
  <path
    fill="url(#bs5-a)"
    fillRule="evenodd"
    d="m661 736 461 369-284 58z"
    transform="matrix(1 0 0 -1 -661 1163)"
  ></path>
</svg>

                        </div>
                        {/* Content */}
                        <div className="ct9b5 c6kur cf1st cdgbl ctowc cvzhj c4drf cmc8g c81rz c8e69 cxq7f c9dhc cihzy c9d9y c1tuk cf8e4 cplu2 cfuwu cqcd2 c7biy cdiex cgxlu cywh9 chxae cybrk cgma1 c80dw cvl90 c4cae co6zy" x-data="{ annual: true }">
                            {/* Pricing toggle */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii cq91c cuzbn">
                                    {/* Toggle switch */}
                                    <div className="cezm6">
                                        <div className="cjqnf cta5t c1ser">
                                            <div className="cwn78 c5668 cm2qf c4cae ceqx4">Monthly</div>
                                            <div className="c4lt2">
                                                <input type="checkbox" id="toggle" className="c6qme cuqxt" x-model="annual"></input>
                                                    <label htmlFor="toggle" className="cxznw chy9v cv7s2 ch41h c0y5j cmkac c33hh ccdmz c686p cfd0v cn5ru cltzd cxt6p c3nww cta5t cku0c c24cr cz14j c8hpx c4lt2 cvas1 citnk c1f5p c99vb">
                                                        <span className="c6qme">Pay Yearly</span>
                                                    </label>
                                            </div>
                                            <div className="c5668 cm2qf c4cae c2m0f">Yearly <span className="ctu9r">(-20%)</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pro price */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c9q7k cmhzb cih8s c6odu">
                                    <div className="c80q8 crgfn cpvrw cic8n cnt4i cm2qf cs8zh c1a0f">Pro</div>
                                    <div className="cebxn">
                                        <span className="c5668 cm2qf csqzg">$</span><span className="cqbkb ca7kf c33xu" x-text="annual ? '24' : '29'">24</span><span className="cqlbb cm2qf c4cae">/mo</span>
                                    </div>
                                    <div className="c5668">Everything at your fingertips.</div>
                                </div>
                                <div className="ch7ii c9q7k c6odu">
                                    <a className="c80q8 c6hcd c7806 c83hg c4l4k cz8jp cscsd coh5f co1fu c36y6 cpaw2 c73l4" href="#0">
                                        Get Started <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">-&gt;</span>
                                    </a>
                                </div>
                            </div>
                            {/* Team price */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c9q7k cmhzb cih8s c6odu">
                                    <div className="c80q8 crgfn cpvrw cic8n cnt4i cm2qf cs8zh c1a0f">Team</div>
                                    <div className="cebxn">
                                        <span className="c5668 cm2qf csqzg">$</span><span className="cqbkb ca7kf c33xu" x-text="annual ? '49' : '54'">49</span><span className="cqlbb cm2qf c4cae">/mo</span>
                                    </div>
                                    <div className="c5668">Everything at your fingertips.</div>
                                </div>
                                <div className="ch7ii c9q7k c6odu">
                                    <a className="cif83 ci4ze cz8jp cscsd cters coh5f c36y6 cpaw2 c73l4" href="#0">
                                        Get Started <span className="crls0 c4v48 c18jp cj4ni cz8jp cscsd cvpqc">-&gt;</span>
                                    </a>
                                </div>
                            </div>
                            {/* Enterprise price */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c9q7k cmhzb cih8s c6odu">
                                    <div className="c80q8 crgfn cpvrw cic8n cnt4i cm2qf cs8zh c1a0f">Enterprise</div>
                                    <div className="cebxn">
                                        <span className="c5668 cm2qf csqzg">$</span><span className="cqbkb ca7kf c33xu" x-text="annual ? '79' : '85'">79</span><span className="cqlbb cm2qf c4cae">/mo</span>
                                    </div>
                                    <div className="c5668">Everything at your fingertips.</div>
                                </div>
                                <div className="ch7ii c9q7k c6odu">
                                    <a className="c80q8 c6hcd c7806 c83hg c4l4k cz8jp cscsd coh5f co1fu c36y6 cpaw2 c73l4" href="#0">
                                        Get Started <span className="crls0 c4v48 c18jp c1nfs cz8jp cscsd cvpqc">-&gt;</span>
                                    </a>
                                </div>
                            </div>
                            {/* # Usage */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf cy32n c405v">Usage</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf c3odk cy32n c405v">Usage</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf c3odk cy32n c405v">Usage</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf c3odk cy32n c405v">Usage</div>
                            </div>
                            {/* Social Connections */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">Social Connections</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>100 <span className="c3odk">Social Connections</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>250 <span className="c3odk">Social Connections</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>Unlimited <span className="c3odk">Social Connections</span></span>
                                </div>
                            </div>
                            {/* Custom Domains */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">Custom Domains</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>4 <span className="c3odk">Custom Domains</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>Unlimited <span className="c3odk">Custom Domains</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>Unlimited <span className="c3odk">Custom Domains</span></span>
                                </div>
                            </div>
                            {/* User Role Management */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">User Role Management</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>Unlimited <span className="c3odk">User Role Management</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>Unlimited <span className="c3odk">User Role Management</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>Unlimited <span className="c3odk">User Role Management</span></span>
                                </div>
                            </div>
                            {/* External Databases */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">External Databases</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>1 <span className="c3odk">External Databases</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>5 <span className="c3odk">External Databases</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span>Unlimited <span className="c3odk">External Databases</span></span>
                                </div>
                            </div>
                            {/* # Features */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf cy32n c405v">Features</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf c3odk cy32n c405v">Features</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf c3odk cy32n c405v">Features</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf c3odk cy32n c405v">Features</div>
                            </div>
                            {/* Custom Connection */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">Custom Connection</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Custom Connection</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Custom Connection</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Custom Connection</span></span>
                                </div>
                            </div>
                            {/* Advanced Deployment Options */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">Advanced Deployment Options</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Advanced Deployment Options</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Advanced Deployment Options</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Advanced Deployment Options</span></span>
                                </div>
                            </div>
                            {/* Extra Add-ons */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">Extra Add-ons</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Extra Add-ons</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Extra Add-ons</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Extra Add-ons</span></span>
                                </div>
                            </div>
                            {/* Admin Roles */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">Admin Roles</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c33s5 cta5t c9q7k citnk c405v">
                                    <span><span className="c3odk">Admin Roles</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c33s5 cta5t c9q7k citnk c405v">
                                    <span><span className="c3odk">Admin Roles</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Admin Roles</span></span>
                                </div>
                            </div>
                            {/* Deploy and Monitor */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">Deploy and Monitor</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c33s5 cta5t c9q7k citnk c405v">
                                    <span><span className="c3odk">Deploy and Monitor</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c33s5 cta5t c9q7k citnk c405v">
                                    <span><span className="c3odk">Deploy and Monitor</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Deploy and Monitor</span></span>
                                </div>
                            </div>
                            {/* Enterprise Add-ons */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">Enterprise Add-ons</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c33s5 cta5t c9q7k citnk c405v">
                                    <span><span className="c3odk">Enterprise Add-ons</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c33s5 cta5t c9q7k citnk c405v">
                                    <span><span className="c3odk">Enterprise Add-ons</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Enterprise Add-ons</span></span>
                                </div>
                            </div>
                            {/* # Support */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf cy32n c405v">Support</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf c01dc cy32n c405v">Support</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf c3odk cy32n c405v">Support</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="cqbkb cm2qf c3odk cy32n c405v">Support</div>
                            </div>
                            {/* Premium Support */}
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c9q7k c405v">Premium Support</div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo c33s5 cta5t c9q7k citnk c405v">
                                    <span><span className="c3odk">Premium Support</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Premium Support</span></span>
                                </div>
                            </div>
                            <div className="cz2ij cg9hr citnk c5dsy">
                                <div className="ch7ii c16mo cta5t c9q7k crsge citnk c405v">
                                    <svg className="c6kwe clbq5 cuupb" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                                    </svg>
                                    <span><span className="c3odk">Premium Support</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
