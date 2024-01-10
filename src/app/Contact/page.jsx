import React from "react";
import styles from "@/styles/Conatact.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pizza}>
        <div className="w-[0.5vw] h-[100%] bg-[#fab940]"></div>
        <h1>CONTACT US</h1>
      </div>
      <main className={styles.main}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={styles.contactInfo}></div>
      </main>
    </div>
  );
};

export default page;
