'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Signup = () => {

    return (
        <main className="cih8s">

            <section className="c4lt2">

                {/* <!-- Illustration --> */}
              

                <div className="c7rlc c4lt2 ca7yh cxk7g c62s6">
                    <div className="cjqw8 cmma3 cpwbp c8230">

                        {/* <!-- Page header --> */}
                        <div className="c0adw cpqxv cxk7g cpwbp">
                            {/* <!-- Logo --> */}
                           
                            {/* <!-- Page title --> */}
                            <h1 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c3myr">Create your free account</h1>
                        </div>

                        {/* <!-- Form --> */}
                        <div className="cgx5u cxk7g">

                            <form>
                                <div className="cz7x6">
                                    <div>
                                        <label className="chu7q cm2qf c4cae cu3fu cebxn" htmlFor="company">Company <span className="cdh2g">*</span></label>
                                        <input id="company" className="csqk0 cpaw2" type="text" placeholder="E.g. Acme Inc." required />
                                    </div>
                                    <div>
                                        <label className="chu7q cm2qf c4cae cu3fu cebxn" htmlFor="full-name">Full Name <span className="cdh2g">*</span></label>
                                        <input id="full-name" className="csqk0 cpaw2" type="text" placeholder="E.g. Mark Rossi" required />
                                    </div>
                                    <div>
                                        <label className="chu7q cm2qf c4cae cu3fu cebxn" htmlFor="email">Email <span className="cdh2g">*</span></label>
                                        <input id="email" className="csqk0 cpaw2" type="email" placeholder="your@email.com" required />
                                    </div>
                                    <div>
                                        <label className="chu7q cm2qf c4cae cu3fu cebxn" htmlFor="password">Password <span className="cdh2g">*</span></label>
                                        <input id="password" className="csqk0 cpaw2" type="password" autoComplete="on" required />
                                    </div>
                                    <div>
                                        <label className="chu7q cm2qf c4cae cu3fu cebxn" htmlFor="referrer">Where did you hear about us? <span className="cdh2g">*</span></label>
                                        <select id="referrer" className="cbuqw c4cae cpaw2 c405v" required>
                                            <option>Google</option>
                                            <option>Medium</option>
                                            <option>GitHub</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cx3cz">
                                    <button className="cif83 ci4ze cters c9rae c4cae cpaw2 c73l4 cco90">
                                        Sign Up <span className="crls0 c4v48 c18jp cj4ni cz8jp cscsd cvpqc">-&gt;</span>
                                    </button>
                                </div>
                            </form>

                            <div className="c0adw cy32n">
                                <div className="c16mo c4cae">
                                    Already have an account? <Link className="cuz37 c1nfs cz8jp cm2qf cscsd coh5f" href="/signin">Sign in</Link>
                                </div>
                            </div>

                            
                           
                        </div>

                    </div>
                </div>

            </section>

        </main>
    )
}

export default Signup