import React from "react";
import styles from "@/styles/Menu.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.wallpaper}>
        <div className={styles.pizza}>
          <div className="w-[0.5vw] h-[100%] bg-[#fab940]"></div>
          <h1>MENU</h1>
        </div>
      </section>
      <main className={styles.main}></main>
    </div>
  );
};

export default page;
