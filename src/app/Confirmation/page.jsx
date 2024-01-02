"use client";
import { useRouter } from "next/router";
import React from "react";

const page = () => {
  const router = useRouter();
  const { selectedToppings } = router.query;
  const topingsArray = JSON.parse(selectedToppings);

  return (
    <div>
      <h1>Selected Toppings Page</h1>
      <h2>selected Toppings:</h2>
      <ul>
        {topingsArray.map((toppings, index) => (
          <li key={index}>{toppings}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
