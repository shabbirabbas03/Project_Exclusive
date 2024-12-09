import React, { createContext, useContext, useState, useEffect } from "react";
import { json } from "react-router-dom";

const defaultValues = {
  cartData: [],
  setCartData: () => {},
  cartPrice: 0,
  setCartPrice: () => {},
};

const CartContext = createContext(defaultValues);

export const CartContextProvider = ({ children }) => {
  const storedCartData = JSON.parse(localStorage.getItem("cartData")) || [];
  const storedCartPrice = JSON.parse(localStorage.getItem("cartPrice")) || 0;

  const [cartData, setCartData] = useState(storedCartData);
  const [cartPrice, setCartPrice] = useState(storedCartPrice);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    localStorage.setItem("cartPrice", JSON.stringify(cartPrice));
  }, [cartPrice]);


  return (
    <CartContext.Provider
      value={{
         cartData,
         setCartData,
         cartPrice,
         setCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
