import styles from '../styles';

import { Inter } from '@next/font/google';
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const Header = () => (
  <nav className={`${styles.xPaddings} pt-8 pb-6 md:pb-[100px] xl:pb-[200px] relative`}>
    <div className="absolute w-[50%] inset-0" />
    <div className={`${styles.innerWidth} mx-auto`}>
      <h2
        className={`${inter.className} mx-auto pt-4 text-center font-bold text-[18px] md:text-[70px] xl:text-[90px] text-black uppercase tracking-widest`}
      >
        Copenhagen
      </h2>
      <h1 className="mx-auto text-center font-bold text-[40px] md:text-[110px] xl:text-[160px] text-black uppercase">
        Touch Rugby
      </h1>
    </div>
  </nav>
);

export default Header;
