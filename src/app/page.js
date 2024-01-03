import styles from "./home.module.css"
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>This is the Main Hero Title.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        {/* <div className={styles.brands}>
          <Image src="/img.png" alt="" fill className={styles.brandImg}/>
        </div> */}
      </div>
      <div className={styles.imgContainer}>
        <Image src="/img.png" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
