"use client";
import React, { useState } from "react";
import styles from "@/styles/Base.module.css";
import BaseList from "@/components/BaseList";
import { BaseListDatas } from "@/data";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <section className="w-[50vw] h-[max-content] flex flex-wrap gap-7 justify-center items-center py-10 bg-[#fcf6ec]">
        {BaseListDatas.map((data, index) => (
          <div key={data.id}>
            <BaseList
              imgUrl={data.imgeUrl}
              name={data.baseName}
              params={index}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
