import React from "react";
import styles from "@/styles/Nav.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <section>
        <div className={styles.logo}>
          <div className="absolute z-20 lg:w-[10vw] w-[30vw] h-[4vh] bg-[#fab940] flex text-center justify-center items-center font-bold lg:text-2xl text-black">
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
          <Link href="/About" className={styles.link}>
            ABOUT US
          </Link>
        </div>
        <footer className={styles.footer}>
          <div className="lg:w-[15vw] w-[28vw] h-[0.5vh] bg-[#fab940]"></div>
          <div>
            <p></p>
            <p></p>
          </div>
        </footer>
      </section>
    </nav>
  );
};

export default NavBar;
