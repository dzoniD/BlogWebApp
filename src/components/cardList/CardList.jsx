import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { getData } from "@/utils/fetchHelper";

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`
  );

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination hasPrev={hasPrev} hasNext={hasNext} page={page} />
    </div>
  );
};

export default CardList;
