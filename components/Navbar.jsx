import styles from "../styles";

const Navbar = () => (
  <nav className={`${styles.xPaddings} py-8 relative`}>
    <div className="absolute w-[50%] inset-0" />
    <div className={`${styles.innerWidth} mx-auto`}>
      <h2 className="mx-auto pt-4 text-center font-bold text-[18px] md:text-[32px] xl:text-[50px] text-black uppercase tracking-widest">
        Copenhagen
      </h2>
      <h1 className="mx-auto text-center font-bold text-[40px] md:text-[60px] xl:text-[120px] text-black uppercase">
        Touch Rugby
      </h1>
    </div>
  </nav>
);

export default Navbar;
