import styles from '../styles';

import { Inter } from '@next/font/google';
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const Header = () => (
  <nav className={`${styles.xPaddings} relative pt-8 pb-6 md:pb-[100px] xl:pb-[110px]`}>
    <div className="absolute inset-0 w-[50%]" />
    <div className={`${styles.innerWidth} mx-auto`}>
      <h2
        className={`${inter.className} mx-auto pt-4 text-center text-[18px] font-bold uppercase tracking-widest text-black md:text-[70px] xl:text-[90px]`}
      >
        Copenhagen
      </h2>
      <h1 className="mx-auto text-center text-[40px] font-bold uppercase text-black md:text-[110px] xl:text-[160px]">
        Touch Rugby
      </h1>
    </div>
  </nav>
);

export default Header;
