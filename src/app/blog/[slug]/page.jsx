import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/cow.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/cow.jpg"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Usman</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>2.3.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          incidunt temporibus quidem voluptatum architecto perspiciatis totam
          laboriosam! Rem accusantium veritatis praesentium beatae incidunt
          eveniet at laudantium vel harum quibusdam laboriosam perspiciatis nam
          vero similique voluptatem, possimus aspernatur numquam saepe
          reprehenderit provident quae in eius soluta! Eos explicabo natus
          consectetur omnis.
        </div>
      </div>
    </div>
  );
};

export default SinglePostpage;
