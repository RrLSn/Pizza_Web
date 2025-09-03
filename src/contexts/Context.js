<<<<<<< HEAD
"use client";
=======
>>>>>>> e51c4ecbd6e5205aac59e0f31e5466f64b4ac878
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <StateContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
