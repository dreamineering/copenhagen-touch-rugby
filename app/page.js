import Image from "next/image";
import Link from "next/link";

import { Location, Player, When } from "../sections";

const Page = () => (
  <main className="bg-primary-black overflow-hidden">
    <When />
    <Location />
    <Player />
    <div className=" bg-green-900 pb-10 xl:pb-20">
      <div className="md:mx-10 xl:mx-60 xl:pt-24 2xl:mx-80">
        <h2 className="pt-4 text-center text-3xl uppercase tracking-tight text-white sm:text-4xl md:text-4xl xl:text-5xl">
          New Players
          <br />
          <Link className="" href={'/about'}>
            <span className="pb-4 text-6xl font-bold tracking-tight text-white opacity-90 hover:text-red-600  sm:text-8xl md:text-8xl xl:text-9xl">
              welcome
            </span>
          </Link>
        </h2>
      </div>
    </div>
  </main>
);

export default Page;
