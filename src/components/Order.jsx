import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Confirmation.module.css";
import PopUpMessage from "./PopUpMessage";

const Order = () => {
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const isSessionStorage = typeof sessionStorage !== "undefined";
  const storedItems = isSessionStorage
    ? sessionStorage.getItem("selectedItems")
    : null;
  const selectedToppings = storedItems ? JSON.parse(storedItems) : [];
  const isSelected = isSessionStorage
    ? JSON.parse(sessionStorage.getItem("isSelected"))
    : "false";
  const selectedBase = isSessionStorage
    ? JSON.parse(sessionStorage.getItem("SelectedBase"))
    : null;

  const handleOrderMessage = () => {
    setOrderConfirmation(true);
  };
  return (
    <div className={styles.mainSection}>
      <ul>
        {isSelected ? (
          <div>
            <h1 className="underline underline-offset-4 text-3xl font-bold pb-2 text-[#fab940]">
              Your Order
            </h1>
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
          <p className="text-2xl font-bold text-[#daa23b]">
            No Toppings, kindly go back to the previous page to select a
            Toppings
          </p>
        )}
      </ul>
      <div>
        {isSelected ? (
          <button onClick={handleOrderMessage}>Confirm Order</button>
        ) : (
          <button disabled="true">
            <Link href={`/Toppings`}>Previous Page</Link>
          </button>
        )}
      </div>
      {orderConfirmation && <PopUpMessage />}
    </div>
  );
};

export default Order;
