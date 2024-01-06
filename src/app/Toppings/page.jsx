"use client";
import React, { useState } from "react";
import styles from "@/styles/Toppings.module.css";
import { Toppings } from "@/data";
import ToppingsList from "@/components/ToppingsList";
import Link from "next/link";

const page = () => {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  sessionStorage.setItem("selectedItems", JSON.stringify(selectedToppings));
  sessionStorage.setItem("isSelected", JSON.stringify(isSelected));
  const selectedBase = JSON.parse(sessionStorage.getItem("SelectedBase"));

  const handleListClicked = (list) => {
    setIsSelected(true);
    if (selectedToppings.includes(list)) {
      return setSelectedToppings(
        selectedToppings.filter((newList) => newList !== list)
      );
    } else {
      return setSelectedToppings([...selectedToppings, list]);
    }
  };

  console.log(selectedToppings);

  return (
    <div className={styles.wrapper}>
      <h1>Add Toppings for {selectedBase}</h1>
      <h2></h2>

      <main>
        <ul>
          {Toppings.map((list, index) => (
            <li key={index} onClick={() => handleListClicked(list.name)}>
              <ToppingsList topping={list.name} params={list.id} />
            </li>
          ))}
        </ul>
      </main>

      <Link
        href={{
          pathname: "/Confirmation",
          query: { selectedToppings: selectedToppings.join(",") },
        }}
      >
        <button className="w-[8rem] h-[3rem] m-auto border rounded-full mt-4 hover:text-red-200 hover:border-red-200">
          Next
        </button>
      </Link>
    </div>
  );
};

export default page;
