"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Toppings.module.css";
import { Toppings } from "@/data";
import ToppingsList from "@/components/ToppingsList";
import Link from "next/link";

const SelectedToppings = () => {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const isSessionStorageAvailable =
    typeof window !== "undefined" && window.sessionStorage;
  if (isSessionStorageAvailable) {
    sessionStorage.setItem("selectedItems", JSON.stringify(selectedToppings));
    sessionStorage.setItem("isSelected", JSON.stringify(isSelected));
  }

  const selectedBase = isSessionStorageAvailable
    ? JSON.parse(sessionStorage.getItem("SelectedBase"))
    : null;

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
      <h1 className="underline underline-offset-4 lg:text-3xl font-bold pb-2 text-[#fab940]">
        Add Toppings for {selectedBase}
      </h1>
      <h2></h2>

      <main className="lg:w-[40vw] xl:w-[25vw] w-[53vw] h-[max-content] ">
        <ul className="w-[full] h-[max-content] my-4 flex flex-col gap-6">
          {Toppings.map((list, index) => (
            <li key={index} onClick={() => handleListClicked(list.name)}>
              <ToppingsList
                topping={list.name}
                price={list.price}
                isSelected={selectedToppings.includes(list.name)}
              />
            </li>
          ))}
        </ul>
      </main>

      <button className="lg:w-[8rem] w-[4rem] lg:h-[3rem] h-[2rem] m-auto border rounded-full lg:mt-4 mt-2 text-[#fab940] border-[#fab940] hover:border-[#daa23b] hover:text-[#daa23b]">
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
