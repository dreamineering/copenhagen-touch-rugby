import Image from 'next/image';
import Link from 'next/link';

// import { motion } from "framer-motion";

import styles from '../styles';
// import { footerVariants } from "../utils/motion";
import { socials } from '../data/constants';

const Footer = () => (
  <footer className="px-10 pt-20 pb-10 relative bg-black">
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 `}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[32px] text-[18px] uppercase text-white opacity-70">
          Copenhagen Touch rugby
        </h4>
      </div>
      <h4 className="text-[18px] text-white opacity-70">Sponsored by</h4>
      <Link href="https://www.bootleggers.dk/">
        <Image
          src={'/img/bootleggers-logo.webp'}
          width={400}
          height={400}
          alt="Bootleggers Bar"
          className="opacity-70"
          priority
        />
      </Link>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>

        <div className="flex items-center justify-between gap-4 opacity-70">
          <p className="font-normal text-xl  md:text-2xl md:text-[24px] text-white ">
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
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
        <p className="text-white opacity-70 pt-6 text-lg md:text-xl text-center">
          <Link href={'https://www.facebook.com/groups/172852439436767/events'}>
            <span className="hover:text-green-400">Confirm the game is on</span>
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
