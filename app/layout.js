import '../styles/globals.css';
import { Inter, Source_Sans_Pro } from '@next/font/google';

import { Footer, Header, Navbar } from '@/components';

// https://www.garett.co/21-google-fonts-combinations-for-websites-brands
// https://bootcamp.uxdesign.cc/10-google-font-pairings-for-your-next-design-project-8e29f46c788c
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const ssp = Source_Sans_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ssp',
});

export default function RootLayout({ children }) {
  return (
    <html className="h-full antialiased" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="font-ssp h-full bg-zinc-50 dark:bg-black">
        {/* <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div> */}
        <div className="relative">
          <Navbar />
          <Header />
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
