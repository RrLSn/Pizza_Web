import React from "react";
import Link from "next/link";
import styles from "@/styles/Intro.module.css";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        Hello
        <br />
        Welcome to the Home For your favourites Pizza
      </h1>
      <Link href="/Base">
        <button>Place Order</button>
      </Link>
    </div>
  );
};

export default page;
