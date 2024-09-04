import styles from "./about.module.css";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency </h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          dolores voluptas totam amet laborum facilis obcaecati minima quam,
          debitis a. Illo, esse aliquam nisi nemo assumenda enim dolorum
          blanditiis vel.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
