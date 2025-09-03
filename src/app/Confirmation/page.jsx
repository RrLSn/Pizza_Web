"use client";
import React, { useState } from "react";
import styles from "@/styles/Confirmation.module.css";
import Order from "@/components/Order";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <Order />
    </div>
  );
};

export default page;
