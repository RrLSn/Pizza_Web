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

  // const handleClick = () => {};

  return (
    <div className="flex my-4 px-5 justify-between cursor-pointer">
      <span className="w-[max-content] flex gap-y-2">
        <Image
          src="/svgs/arrow-right-line.svg"
          height={30}
          width={10}
          alt="sign"
          priority
          className={isHovered ? "block" : "hidden"}
        />
        <p
          className="hover:text-[#daa23b]"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverLeave}
        >
          {topping}
        </p>
      </span>
      <p>${price}</p>
    </div>
  );
};

export default ToppingsList;
