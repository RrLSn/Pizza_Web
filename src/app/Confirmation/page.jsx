"use client";
import React from "react";
import styles from "@/styles/Confirmation.module.css";

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
              <h2>Base Selected: {selectedBase}</h2>
              <h2>Toppings Selected: </h2>
              {selectedToppings.map((toppings, index) => (
                <li key={index}>{toppings}</li>
              ))}
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
          <div>
            <button onClick={() => (window.location = "/")}>
              Confirm Order
            </button>
          </div>
        ) : (
          <div>
            <button disabled="true">Previous Page</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
