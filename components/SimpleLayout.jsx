import { Container } from '@/components/Container';

import { Inter } from '@next/font/google';
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="pb-8">
      <header className="">
        <h1
          className={`${inter.className}text-4xl md:text-6xl uppercase font-semibold text-center tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl`}
        >
          {title}
        </h1>
        {/* <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{intro}</p> */}
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}
