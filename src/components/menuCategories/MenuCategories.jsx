import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";
import { getData } from "@/utils/fetchHelper";

export const MenuCategories = async () => {
  const data = await getData("http://localhost:3000/api/categories");
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
