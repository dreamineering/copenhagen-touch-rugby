import Link from 'next/link';
import styles from '../styles';

function isDST(d) {
  let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
  let jul = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
  return Math.max(jan, jul) !== d.getTimezoneOffset();
}

const When = () => {
  const today = new Date();
  let summertime;
  if (isDST(today)) {
    summertime = (
      <div className="flex flex-col">
        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white md:text-6xl">WED</dt>
        <dd className="order-1 text-5xl font-extrabold text-white md:text-8xl">17:30</dd>
      </div>
    );
  }

  return (
    <section className={`xs:p-8 bg-green-800 px-6 py-8 sm:p-8`} id="when">
      <div className="pt-10 md:mx-10 xl:mx-60 xl:pt-24 2xl:mx-80">
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
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:py-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-40">
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-2 sm:gap-8">
          <div className="mt-10 flex flex-col sm:mt-0 ">
            <Link className="" href={'/play'}>
              <h1 className="md:text-10xl xl:text-12xl text-8xl font-bold uppercase tracking-tight text-white opacity-90 hover:text-red-600 sm:text-9xl">
                Play
              </h1>
            </Link>
          </div>
          {summertime}
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-4xl font-medium leading-6 text-white md:text-6xl">
              SUN
            </dt>
            <dd className="order-1 text-8xl font-extrabold text-white md:text-8xl">10:30</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default When;
