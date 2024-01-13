"use client";
import React from "react";
import styles from "@/styles/Toppings.module.css";
import SelectedToppings from "@/components/SelectedToppings";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <SelectedToppings />
    </div>
  );
};

export default page;
