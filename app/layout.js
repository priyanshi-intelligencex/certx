import localFont from "next/font/local";
import "./globals.css";
import "./style.css"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";


const Inter = localFont({
  src: "./fonts/ABCWhyteInktrap-Medium.woff2",
  variable: "--font-inter-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Vruvian",
  description: "The Catalyst for AI Skillset Transformation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Inter.className} antialiased c54cm ctzj3 cp877 cbh0c c9xyi scroll-smooth`}
      >
        <div className="clfoz cxmgp cwkat cg9hr citnk">

        {children}
       
        </div>
      </body>
    </html>
  );
}
