import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles';

const Location = () => {
  return (
    <section className={`${styles.paddings} bg-green-900`} id="Location">
      <div className="mx-auto">
        <div className="md:mx-10 xl:mx-60 2xl:mx-80 pt-16 xl:pt-24">
          <h2 className="text-center uppercase text-3xl pb-10 tracking-tight sm:text-4xl md:text-4xl xl:text-5xl">
            <span className="font-bold text-5xl sm:text-6xl md:text-6xl xl:text-7xl">
              <Link href={'https://www.google.com/maps/@55.6988945,12.5710524,17.48z'}>
                <span className="opacity-90 text-white hover:text-red-600 text-7xl sm:text-9xl md:text-10xl xl:text-12xl">
                  Find us
                </span>
              </Link>
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
          <h2 className="text-center text-white uppercase text-3xl pt-6 tracking-tight sm:text-4xl md:text-4xl xl:text-5xl">
            Faelledparken
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Location;
