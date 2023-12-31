"use client";
import React from "react";
import styles from "@/styles/Confirmation.module.css";
import Link from "next/link";

const page = () => {
  const storedItems = sessionStorage.getItem("selectedItems");
  const selectedToppings = storedItems ? JSON.parse(storedItems) : [];
  const isSelected = JSON.parse(sessionStorage.getItem("isSelected"));
  const selectedBase = JSON.parse(sessionStorage.getItem("SelectedBase"));
  return (
    <div className={styles.wrapper}>
      <div>
        <ul>
          {isSelected ? (
            <div>
              <h1>Your Order</h1>
              <div className={styles.order}>
                <h2>Base Selected:</h2>
                <p>{selectedBase}</p>
              </div>
              <div className={styles.order}>
                <h2>Toppings Selected: </h2>
                {selectedToppings.map((toppings, index) => (
                  <li key={index}>{toppings}</li>
                ))}
              </div>
            </div>
          ) : (
            <p>
              No Toppings, kindly go back to the previous page to select a
              Toppings
            </p>
          )}
        </ul>
      </div>

      <div>
        {isSelected ? (
          <button onClick={() => (window.location = "/")}>Confirm Order</button>
        ) : (
          <button disabled="true">
            <Link href={`/Toppings`}>Previous Page</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default page;
