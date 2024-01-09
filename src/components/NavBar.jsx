import React from "react";
import Image from "next/image";
import styles from "@/styles/Nav.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.main}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.main}>
          <Link href="/Intro" className={styles.link}>
            HOME
          </Link>
          <Link href="/Base" className={styles.link}>
            MENU
          </Link>
          <Link href="" className={styles.link}>
            ORDER
          </Link>
          <Link href="" className={styles.link}>
            CONTACT US
          </Link>
          <Link href="" className={styles.link}>
            ABOUT
          </Link>
        </div>
        <footer></footer>
      </div>
    </nav>
  );
};

export default NavBar;
