import Link from "next/link";
import Image from "next/image";
import styles from "../styles";

const Location = () => {
  return (
    <section className={`${styles.paddings} bg-green-900`} id="Location">
      <div className="mx-auto">
        <div className="md:mx-10 xl:mx-24">
          <h1 className="text-4xl pb-6 tracking-tight font-bold text-gray-300 sm:text-5xl md:text-5xl xl:text-6xl">
            Find us at <span className="text-white ">Faelledparken</span>
          </h1>

          <div className="w-full ">
            <Image
              className="object-cover object-center w-full"
              alt="Where we play"
              src={"/img/map.png"}
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
