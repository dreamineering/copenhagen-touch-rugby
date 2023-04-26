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
      <div className="mx-auto px-4 pb-16 sm:py-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-40">
        <div className="pt-10 text-center sm:mx-auto">
          <div className="mt-10 flex flex-col sm:mt-0 ">
            <Link className="" href={'/play'}>
              <h1 className="md:text-10xl xl:text-12xl text-8xl font-bold uppercase tracking-tight text-white opacity-90 hover:text-red-600 sm:text-9xl">
                Play
              </h1>
            </Link>
          </div>
          <div className="mx-auto flex flex-col space-y-10 pt-12 text-center md:w-4/5 md:flex-row md:space-y-0">
            <div className="mx-auto flex flex-col space-y-4">
              <div className="text-5xl font-medium leading-6 text-white md:text-7xl">SUN</div>
              <div className="text-8xl font-extrabold text-white md:text-8xl">10:30</div>
            </div>
            <div className="mx-auto flex flex-col space-y-4">
              <div className="text-5xl font-medium leading-6 text-white md:text-7xl">WED</div>
              <div className="text-8xl font-extrabold text-white md:text-8xl">17:30</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default When;
