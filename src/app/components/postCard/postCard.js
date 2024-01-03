import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
         <div className={styles.imgContainer}>
          <Image src="https://cdn.pixabay.com/photo/2018/02/24/12/33/silhouette-3177957_1280.jpg" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01/03/24</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magnam optio doloremque ratione ullam ipsum?</p>
        <Link className={styles.link} href={`/blog/post`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard

// toString().slice(4, 16)