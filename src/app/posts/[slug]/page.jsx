import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { getData } from "@/utils/fetchHelper";

export const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(`http://localhost:3000/api/posts/${slug}`);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.post?.title}</h1>
          <div className={styles.user}>
            {data?.post?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data?.post?.user?.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <div className={styles.username}>{data?.post?.user?.name}</div>
              <div className={styles.date}>
                {data?.post?.createdAt.substring(0, 10)}
              </div>
            </div>
          </div>
        </div>
        {data?.post?.img && (
          <div className={styles.imageContainer}>
            <Image src={data?.post?.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.post?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
