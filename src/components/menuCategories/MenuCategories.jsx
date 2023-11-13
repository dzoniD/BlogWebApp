import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export const MenuCategories = async () => {
  const data = await getData();
  return (
    <div className={styles.categoryList}>
      {data?.categories?.map((item) => {
        if (item.title) {
          return (
            <Link
              href={`/blog?cat=${item.slug}`}
              className={`${styles.categoryItem} ${styles[item.slug]}`}
            >
              {item.title}
            </Link>
          );
        }
      })}
    </div>
  );
};
