import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";
import { getData } from "@/utils/fetchHelper";

export const MenuPosts = async ({ withImage }) => {
  const { posts } = await getData(
    `http://localhost:3000/api/posts?popular=${true}`
  );

  // console.log("posts", posts);
  return (
    <div className={styles.items}>
      {posts &&
        posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.slug}`}
            className={styles.item}
          >
            {withImage && (
              <div className={styles.imageContainer}>
                <Image
                  src={post?.img || "/p1.jpeg"}
                  fill
                  alt=""
                  className={styles.image}
                />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles[post.catSlug]}`}>
                {post.catSlug}
              </span>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <div className={styles.detail}>
                <span className={styles.username}>{post.user.name}</span>
                <span className={styles.date}>
                  {" "}
                  - {post.createdAt.substring(0, 10)}
                </span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MenuPosts;
