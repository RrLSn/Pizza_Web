import React from "react";
import Image from "next/image";
import styles from "@/styles/Nav.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className="absolute z-20 w-[10vw] h-[4vh] bg-[#fab940] flex text-center justify-center items-center font-bold text-2xl">
          PIZZA HOME
        </div>
      </div>
      <div className={styles.main}>
        <Link href="/Intro" className={styles.link}>
          HOME
        </Link>
        <Link href="/Menu" className={styles.link}>
          MENU
        </Link>
        <Link href="/Base" className={styles.link}>
          ORDER
        </Link>
        <Link href="/Contact" className={styles.link}>
          CONTACT US
        </Link>
        <Link href="" className={styles.link}>
          ABOUT
        </Link>
      </div>
      <footer className={styles.footer}>
        <div className="w-[15vw] h-[0.5vh] bg-[#fab940]"></div>
        <div>
          <p></p>
          <p></p>
        </div>
      </footer>
    </nav>
  );
};

export default NavBar;
