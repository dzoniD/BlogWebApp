import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./categoryList.module.css";
import { getData } from "@/utils/fetchHelper";

const CategoryList = async () => {
  const data = await getData("http://localhost:3000/api/categories");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.categories?.map((item) => {
          return (
            <Link
              key={item._id}
              href={`/blog?cat=${item.slug}`}
              className={`${styles.category} ${styles[item.slug]}`}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  height={32}
                  width={32}
                  className={styles.image}
                />
              )}
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
