"use client";
import React, { useState } from "react";
import styles from "@/styles/Base.module.css";
import BaseList from "@/components/BaseList";
import { BaseListDatas } from "@/data";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <section className="lg:w-[50vw] w-[70vw] min-h-[50vh] h-[max-content] lg:flex xl:flex flex-wrap gap-7 xl:gap-24 justify-center items-center p-10 bg-[#fcf6ec]">
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
