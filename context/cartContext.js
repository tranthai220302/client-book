"use client"
// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) =>{
  let initialbook;
  if(typeof window !== 'undefined' && typeof localStorage !== 'undefined'){
    initialbook = JSON.parse(localStorage.getItem('quantity')) || 0;
  }else{
    initialbook = []
  }

  const [quantity, setQuantity] = useState(initialbook);
    

  
    useEffect(() => {
      localStorage.setItem('quantity', quantity.toString());
    }, [quantity]);

  return (
    <CartContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;