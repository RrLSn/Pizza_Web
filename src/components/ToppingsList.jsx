"use client";
import Image from "next/image";
import React, { useState } from "react";
// import styles from '@/styles/Toppings.module.css'

const ToppingsList = (props) => {
  const { topping, price, params } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  return (
    // <div className="flex lg:my-4 lg:px-5 justify-between cursor-pointer">
    <span className="w-[max-content] flex cursor-pointer my-2">
      <Image
        src="/svgs/arrow-right-line.svg"
        height={30}
        width={10}
        alt="sign"
        priority
        className={isHovered ? "lg:block" : "hidden"}
      />
      <div
        className="lg:w-[23vw] w-[46vw] hover:text-[#daa23b] flex justify-between"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverLeave}
      >
        <p>{topping}</p>
        <p>${price}</p>
      </div>
    </span>
    // </div>
  );
};

export default ToppingsList;
