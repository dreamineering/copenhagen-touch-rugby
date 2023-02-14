import Image from "next/image";

import { Location, Player, When } from "../sections";

const Page = () => (
  <main className="bg-primary-black overflow-hidden">
    <When />
    <Location />
    <Player />
  </main>
);

export default Page;
