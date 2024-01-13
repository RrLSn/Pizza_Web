"use client";
import React, { useState } from "react";
import styles from "@/styles/Toppings.module.css";
import { Toppings } from "@/data";
import ToppingsList from "@/components/ToppingsList";
import Link from "next/link";

const SelectedToppings = () => {
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
  return (
    <section className={styles.mainSection}>
      <h1 className="underline underline-offset-4 text-3xl font-bold pb-2 text-[#fab940]">
        Add Toppings for {selectedBase}
      </h1>
      <h2></h2>

      <main className="w-[25vw] h-[max-content]">
        <ul>
          {Toppings.map((list, index) => (
            <li key={index} onClick={() => handleListClicked(list.name)}>
              <ToppingsList
                topping={list.name}
                params={list.id}
                price={list.price}
              />
            </li>
          ))}
        </ul>
      </main>

      <button className="w-[8rem] h-[3rem] m-auto border rounded-full mt-4 text-[#fab940] border-[#fab940] hover:border-[#daa23b] hover:text-[#daa23b]">
        <Link
          href={{
            pathname: "/Confirmation",
            query: { selectedToppings: selectedToppings.join(",") },
          }}
        >
          Next
        </Link>
      </button>
    </section>
  );
};

export default SelectedToppings;
