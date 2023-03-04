import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles';

const Location = () => {
  return (
    <section className={`${styles.paddings} bg-green-900`} id="Location">
      <div className="mx-auto">
        <div className="md:mx-10 xl:mx-60 2xl:mx-80 pt-16 xl:pt-24">
          <h2 className="text-center text-white uppercase text-3xl pb-20 tracking-tight sm:text-4xl md:text-4xl xl:text-5xl">
            <span className="font-bold text-5xl sm:text-6xl md:text-6xl xl:text-7xl">
              <Link href={'https://www.google.com/maps/@55.6988945,12.5710524,17.48z'}>
                <span className="opacity-80 text-red-600 hover:text-red-500">Find the action</span>
              </Link>
            </span>
            <span className="leading-6 block">
              <br />
              at Faelledparken
            </span>
          </h2>
          <div className="w-full ">
            <Image
              className="object-cover object-center w-full"
              alt="Where we play"
              src={'/img/map.png'}
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
