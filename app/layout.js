import "./globals.css";
import "./style.css"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Vruvian",
  description: "The Catalyst for AI Skillset Transformation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased c54cm ctzj3 cp877 cbh0c scroll-smooth"
      >
        <div className="clfoz cwkat cg9hr citnk">

        {children}
       
        </div>
      </body>
    </html>
  );
}
