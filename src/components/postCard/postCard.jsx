import Link from "next/link";
import Image from "next/image";
import styles from "./postcard.module.css";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/cow.jpg" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>4.9.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum a
          reprehenderit velit veritatis est consequuntur adipisci magni labore
          blanditiis, quos natus culpa hic repudiandae eum enim veniam quia
          dolor placeat?
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
