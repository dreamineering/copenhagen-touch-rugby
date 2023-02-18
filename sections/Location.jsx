import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles';

const Location = () => {
  return (
    <section className={`${styles.paddings} bg-green-900`} id="Location">
      <div className="mx-auto">
        <div className="md:mx-10 xl:mx-60 2xl:mx-80 pt-16 xl:pt-24">
          <h2 className="text-center uppercase text-3xl pb-20 tracking-tight font-bold text-gray-300 sm:text-4xl md:text-4xl xl:text-5xl">
            <Link href={'https://www.google.com/maps/@55.6988945,12.5710524,17.48z'}>
              <span className="hover:text-red-600">Find us</span>
            </Link>{' '}
            at <span className="text-white ">Faelledparken</span>
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
