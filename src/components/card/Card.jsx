import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ item, key }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          quo odio, veniam totam mollitia inventore officiis nemo ex libero
          aliquam corporis, praesentium dolor soluta incidunt, atque voluptas.
          Saepe, quam vel!
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};
export default Card;
