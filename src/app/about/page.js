import Image from "next/image";
import styles from "./about.module.css"
const AboutPage = () => {
  return (
    <div>
    <div className={styles.imgContainer}>
    {/* <Image src="/img.png" alt="about page hero" fill/> */}
    <Image src="https://cdn.pixabay.com/photo/2016/12/15/12/26/contact-us-1908763_1280.png" alt="about page hero" fill/>
    </div>
      
    </div>
  );
};

export default AboutPage;
