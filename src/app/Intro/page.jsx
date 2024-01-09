import React from "react";
import Link from "next/link";
import styles from "@/styles/Intro.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1>WELCOME</h1>
        <h1>WE OFFER THE BEST</h1>
        <div>
          <h1>PIZZA</h1>
        </div>
        <h1>IN TOWN</h1>
      </div>
      <Link href="/Base">
        <button>Place Order</button>
      </Link>
    </div>
  );
};

export default page;
