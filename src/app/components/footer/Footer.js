import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Hey Deja</div>
      <div className={styles.text}>
        Property of Hey Deja LLC © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
