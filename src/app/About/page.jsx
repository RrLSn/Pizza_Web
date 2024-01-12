import React from "react";
import styles from "@/styles/About.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pizza}>
        <div className="w-[0.5vw] h-[100%] bg-[#fab940]"></div>
        <h1>ABOUT US</h1>
      </div>
      <main className={styles.main}></main>
    </div>
  );
};

export default page;
