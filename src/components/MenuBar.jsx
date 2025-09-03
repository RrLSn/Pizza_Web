"use client";
import React, { useState } from "react";
import styles from "@/styles/MenuBar.module.css";
import { useStateValue } from "@/contexts/Context";

const MenuBar = () => {
  const [toggleMenu, setToggleMenu] = useStateValue();
  const handleToggle = () => {
    setToggleMenu(true);
    alert(toggleMenu);
  };
  return (
    <div className={styles.wrapper}>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default MenuBar;
