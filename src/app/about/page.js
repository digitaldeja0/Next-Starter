import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Page</h2>
        <h1 className={styles.title}>
         We are interesting, read more below!
        </h1>
        <p className={styles.desc}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nobis fuga dolore eius, asperiores, quas, quia tempora sapiente mollitia quidem molestiae corrupti nemo inventore iusto? Cum neque minus rerum recusandae unde odit error placeat culpa nam beatae numquam consequatur, debitis dolor iure ab cupiditate tempora.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Happy customers</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Business partnerships</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/img.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;

    {/* <Image src="/img.png" alt="about page hero" fill/> */}
    {/* <Image src="https://cdn.pixabay.com/photo/2016/12/15/12/26/contact-us-1908763_1280.png" alt="about page hero" fill/> */}
