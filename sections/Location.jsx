import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles';

const Location = () => {
  return (
    <section className={`xs:p-8 bg-green-900 px-6 py-8 sm:p-8`} id="Location">
      <div className="mx-auto">
        <div className="pt-16 md:mx-10 xl:mx-60 xl:pt-24 2xl:mx-80">
          <h2 className="pb-10 text-center text-3xl uppercase tracking-tight sm:text-4xl md:text-4xl xl:text-5xl">
            <span className="text-5xl font-bold sm:text-6xl md:text-6xl xl:text-7xl">
              <Link href={'https://www.google.com/maps/@55.6988945,12.5710524,17.48z'}>
                <span className="md:text-10xl xl:text-12xl text-7xl text-white opacity-90 hover:text-red-600 sm:text-9xl">
                  Find us
                </span>
              </Link>
            </span>
          </h2>
          <div className="w-full ">
            <Image
              className="w-full object-cover object-center"
              alt="Where we play"
              src={'/img/map.png'}
              width={600}
              height={600}
            />
          </div>
          <h2 className="pt-6 text-center text-3xl uppercase tracking-tight text-white sm:text-4xl md:text-4xl xl:text-5xl">
            Faelledparken
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Location;
