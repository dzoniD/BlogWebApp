import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

export const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <div className={styles.username}>John Doe</div>
              <div className={styles.date}>01.01.2023</div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, vero doloremque optio sit facere vel obcaecati, fuga
              voluptas nulla suscipit laborum minima! Quasi corrupti at pariatur
              nemo deleniti mollitia obcaecati?
            </p>
            <h2>Lorem ipsum dolor sit amet </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, vero doloremque optio sit facere vel obcaecati, fuga
              voluptas nulla suscipit laborum minima! Quasi corrupti at pariatur
              nemo deleniti mollitia obcaecati?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, vero doloremque optio sit facere vel obcaecati, fuga
              voluptas nulla suscipit laborum minima! Quasi corrupti at pariatur
              nemo deleniti mollitia obcaecati?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
