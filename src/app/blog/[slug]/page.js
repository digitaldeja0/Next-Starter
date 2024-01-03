import Image from "next/image";
import styles from "./singlePost.module.css";

const PostPage=()=> {
  return (
    <div className={styles.container}>

        <div className={styles.imgContainer}>
        <Image src="https://cdn.pixabay.com/photo/2018/02/24/12/33/silhouette-3177957_1280.jpg" alt="" fill className={styles.img}/>        
        </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.content}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit in quod facere unde repellat.</div>
      </div>
    </div>
  )
  }
  export default PostPage