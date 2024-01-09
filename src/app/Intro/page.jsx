import React from "react";
import Link from "next/link";
import styles from "@/styles/Intro.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1>Welcome,</h1>
        <h1>we offer the Best</h1>
        <div className={styles.pizza}>
          <h1>Pizza</h1>
        </div>
        <h1>in Town</h1>
      </div>
      {/* <Link href="/Base">
        <button>Place Order</button>
      </Link> */}
    </div>
  );
};

export default page;
