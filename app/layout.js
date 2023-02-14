import "../styles/globals.css";
import { Inter, Source_Sans_Pro } from "@next/font/google";

import { Footer, Navbar } from "@/components";

// https://www.garett.co/21-google-fonts-combinations-for-websites-brands
// https://bootcamp.uxdesign.cc/10-google-font-pairings-for-your-next-design-project-8e29f46c788c
const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const ssp = Source_Sans_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ssp",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="font-ssp">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
