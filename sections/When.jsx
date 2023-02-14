import Link from "next/link";
import styles from "../styles";

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
        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200 md:text-6xl">
          WED
        </dt>
        <dd className="order-1 text-5xl font-extrabold text-white md:text-8xl">
          17:30
        </dd>
      </div>
    );
  }

  return (
    <section className={`${styles.paddings} bg-green-800`} id="when">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8">
          <div className="flex flex-col mt-10 sm:mt-0">
            <h1 className="text-6xl pb-4 tracking-tight font-bold text-gray-300 sm:text-8xl md:text-8xl xl:text-9xl">
              Starts
            </h1>
          </div>
          {summertime}
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-4xl leading-6 font-medium text-green-200 md:text-6xl">
              SUN
            </dt>
            <dd className="order-1 text-8xl font-extrabold text-white md:text-8xl">
              10:30
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default When;
