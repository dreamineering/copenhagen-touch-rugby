import Image from 'next/image';
import Link from 'next/link';

// import { motion } from "framer-motion";

import styles from '../styles';
// import { footerVariants } from "../utils/motion";
import { socials } from '../data/constants';

const Footer = () => (
  <footer className="relative bg-black px-10 pt-20 pb-10">
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-2`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="text-[18px] font-bold uppercase text-white opacity-70 md:text-[24px]">
          Copenhagen Touch rugby
        </h4>
      </div>
      <h4 className="text-[14px] text-white opacity-70 md:text-[16px]">Sponsored by</h4>
      <div className="w-[260px] md:w-[400px]">
        <Link href="https://www.bootleggers.dk/">
          <Image
            src={'/img/bootleggers-logo.webp'}
            width="0"
            height="0"
            sizes="100vw"
            alt="Bootleggers Bar"
            className="h-auto w-full opacity-70"
            priority
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>

        <div className="flex items-center justify-between gap-4 opacity-70">
          <p className="text-xl font-normal  text-white md:text-2xl md:text-[24px] ">
            <Link href="/about">
              <span className="hover:text-green-400">Get in touch</span>
            </Link>
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link href={social.link} key={social.name}>
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  height={24}
                  width={24}
                  className="h-[24px] w-[24px] cursor-pointer object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
        <p className="pt-6 text-center text-base text-white opacity-70 md:text-xl">
          Please check{' '}
          <Link href={'https://www.facebook.com/groups/172852439436767/events'}>
            <span className="text-green-400 hover:text-green-500">event updates</span> to confirm
            play is going ahead
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
