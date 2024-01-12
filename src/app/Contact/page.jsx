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
        <div className="flex flex-col gap-y-4">
          <div>
            <h1>ADDRESS</h1>
            <p>3400 Ajanaku, Igboshore street</p>
            <p>Agbegilodo, KW 312056, NIGERIA</p>
          </div>
          <div>
            <h1>CALL OR WRITE</h1>
            <span className={styles.opnTime}>
              <h2>Phone/</h2>
              <p></p>
            </span>
            <span className={styles.opnTime}>
              <h2>Email/</h2>
              <p></p>
            </span>
          </div>
          <div>
            <h1>OPENING HOURS</h1>
            <span className={styles.opnTime}>
              <h2>Mon – Fri /</h2>
              <p>8am-11am</p>
            </span>
            <span className={styles.opnTime}>
              <h2>Saturday/</h2>
              <p>8am-1am</p>
            </span>
            <span className={styles.opnTime}>
              <h2>Sunday</h2>
              <p> (closed)</p>
            </span>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h1>CONTACT FORM</h1>
          <div className={styles.form}>
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
          <div className={styles.button}>
            <button></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
