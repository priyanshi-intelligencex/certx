'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Signin = () => {
  return (
    <main className="cih8s">
      <section className="c4lt2">

        {/* Illustration */}
       

        <div className="c7rlc c4lt2 ca7yh cxk7g c62s6">
          <div className="cjqw8 cmma3 cpwbp c8230">

            {/* Page header */}
            <div className="c0adw cpqxv cxk7g cpwbp">
              {/* Logo */}
              <div className="cfxdw">
                <Link href="/" className="c1ser">
                 
                </Link>
              </div>
              {/* Page title */}
              <h1 className="chl73 c80q8 ch30f crgfn c9p57 cnt4i c3myr">Sign in to your account</h1>
            </div>

            {/* Form */}
            <div className="cgx5u cxk7g">

              <form>
                <div className="cz7x6">
                  <div>
                    <label className="chu7q cm2qf c4cae cu3fu cebxn" htmlFor="email">Email</label>
                    <input id="email" className="csqk0 cpaw2" type="email" required />
                  </div>
                  <div>
                    <div className="cu781 citnk">
                      <label className="chu7q cm2qf c4cae cu3fu cebxn" htmlFor="password">Password</label>
                      <Link href="/reset-password" className="cuz37 c1nfs cz8jp cm2qf cscsd coh5f c4cae c2m0f">
                        Forgot?
                      </Link>
                    </div>
                    <input
                      id="password"
                      className="csqk0 cpaw2"
                      type="password"
                      autoComplete="on"
                      required
                    />
                  </div>
                </div>
                <div className="cx3cz">
                  <button className="cif83 ci4ze cters c9rae c4cae cpaw2 c73l4 cco90">
                    Sign In <span className="crls0 c4v48 c18jp cj4ni cz8jp cscsd cvpqc">-&gt;</span>
                  </button>
                </div>
              </form>

              <div className="c0adw cy32n">
                <div className="c16mo c4cae">
                  Don&apos;t have an account? <Link href="/signup" className="cuz37 c1nfs cz8jp cm2qf cscsd coh5f">
                    Sign up
                  </Link>
                </div>
              </div>

              {/* Divider */}
             
             

            </div>

          </div>
        </div>

      </section>

    </main>
  )
}

export default Signin
