"use client";
import Image from "next/image";
import React, { useState } from "react";
// import styles from '@/styles/Toppings.module.css'


const ToppingsList = (props) => {
  const { topping, price, isSelected} = props;

  const handleSelect = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <span className="w-full flex cursor-pointer">
      <div
        className={`w-full flex justify-between ${isSelected ? 'text-red-600 font-bold' : ''}`}
        onClick={handleSelect}
      >
        <p>{topping}</p>
        <p>${price}</p>
      </div>
    </span>
  );
};

export default ToppingsList;
