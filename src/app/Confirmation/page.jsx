"use client";
import React from "react";

const page = () => {
  const storedItems = sessionStorage.getItem("selectedItems");
  const selectedToppings = storedItems ? JSON.parse(storedItems) : [];
  const isSelected = JSON.parse(sessionStorage.getItem("isSelected"));
  console.log(isSelected);
  return (
    <div>
      <h1>Confirmation</h1>

      <ul>
        {isSelected ? (
          <div>
            <h2>selected Toppings: </h2>
            {selectedToppings.map((toppings, index) => (
              <li key={index}>{toppings}</li>
            ))}
          </div>
        ) : (
          <h1>
            No Toppings, kindly go back to the previous page to select a
            Toppings
          </h1>
        )}
      </ul>

      <div>
        {isSelected ? (
          <div>
            <button onClick={() => (window.location = "/")}>Place Order</button>
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
