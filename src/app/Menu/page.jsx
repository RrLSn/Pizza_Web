import React from "react";
import styles from "@/styles/Menu.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.wallpaper}>
        <div className={styles.pizza}>
          <div className="w-[0.5vw] h-[100%] bg-[#fab940]"></div>
          <Image
            src="/svgs/pizza.svg"
            alt="Pizza"
            width={40}
            height={40}
          ></Image>
          <h1>MENU</h1>
        </div>
      </section>
      <main className={styles.main}></main>
    </div>
  );
};

export default page;
