'use client';
import React, { useState } from "react";
import styles from "@/styles/Nav.module.css";
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  
  return (
    <nav className="w-[max-content] h-[max-content]">
      <button 
        className={`w-20 h-22 ml-4 p-2 flex flex-col justify-center items-center gap-2 lg:hidden xl:hidden absolute top-4 left-0 z-30 ${!menuOpen && "mt-6"}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu">
          <span className={`w-12 h-[10px] bg-black ${!menuOpen && "absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white"}`}></span>
          <span className={`w-12 h-[10px] bg-black ${!menuOpen && "absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"}`}></span>
          <span className={`w-12 h-[10px] bg-black ${!menuOpen && "hidden"}`}></span>
      </button>
      <section className={`bg-[url('/Media/Nav_bg.jpg')] xl:w-[15vw] lg:w-[26vw] h-[100vh] text-[#fdf6eb] lg:flex xl:flex hidden flex-col justify-center items-center gap-5 ${!menuOpen && "flex"}`}>
        <div className={styles.logo}>
          <div className="absolute z-20 lg:w-[15vw] xl:w-[6vw] h-[4vh] bg-red-600 flex text-center justify-center items-center font-bold lg:text-2xl text-black">
            PIZZA HOME
          </div>
        </div>
        <div className={styles.main}>
          <Link href="/Intro" className={styles.link}>
            HOME
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
      </section>
      {/* Sidebar: show when menuOpen is false */}
      <section className={`bg-[url('/Media/Nav_bg.jpg')] w-[40vw] h-[100vh] lg:hidden xl:hidden text-[#fdf6eb] flex-col justify-center items-center fixed top-0 left-0 z-20 transition-transform duration-300 ${!menuOpen ? "flex translate-x-0" : "hidden -translate-x-full"} lg:static lg:flex xl:flex`}>
        <div className={styles.logo}>
          <div className="absolute z-20 h-[4vh] bg-red-600 flex text-center justify-center items-center font-bold lg:text-2xl text-black">
            PIZZA HOME
          </div>
        </div>
        <div className={styles.main}>
          <Link href="/Intro" className={styles.link} onClick={() => setMenuOpen(true)}>
            HOME
          </Link>
          <Link href="/Base" className={styles.link} onClick={() => setMenuOpen(true)}>
            ORDER
          </Link>
          <Link href="/Contact" className={styles.link} onClick={() => setMenuOpen(true)}>
            CONTACT US
          </Link>
          <Link href="/About" className={styles.link} onClick={() => setMenuOpen(true)}>
            ABOUT US
          </Link>
        </div>
      </section>

      {!menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={() => setMenuOpen(true)}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
