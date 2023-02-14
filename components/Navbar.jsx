import styles from "../styles";

const Navbar = () => (
  <nav className={`${styles.xPaddings} py-8 relative`}>
    <div className="absolute w-[50%] inset-0" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="font-bold md:text-[32px] text-[18px] uppercase text-black">
        Copenhagen Touch
      </h2>
    </div>
  </nav>
);

export default Navbar;
