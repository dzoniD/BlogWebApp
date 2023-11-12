"use client";
import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSwr from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

export const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, isLoading } = useSwr(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  console.log(status);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment" className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading..."
          : data?.comments?.map((item) => {
              return (
                <div key={item._id} className={styles.comment}>
                  <div className={styles.user}>
                    {item?.user.image && (
                      <Image
                        src={item.user.image}
                        alt=""
                        width={50}
                        height={50}
                        className={styles.image}
                      />
                    )}
                    <div className={styles.userInfo}>
                      <span className={styles.username}>{item.user.name}</span>
                      <span className={styles.date}>
                        {item.createdAt.substring(0, 10)}
                      </span>
                    </div>
                  </div>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Comments;
