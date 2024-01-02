import Links from "./links/Links";
import styles from  "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div >
        <p className={styles.logo}>Logo</p>
      </div>
      <div>
      <Links/>
      </div>
    </div>
  );
};

export default Navbar;
