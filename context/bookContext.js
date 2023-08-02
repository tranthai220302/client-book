"use client"
// CartContext.js
import React, { createContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) =>{
  let initialbook;
    if(typeof window !== 'undefined' && typeof localStorage !== 'undefined'){
      initialbook = JSON.parse(localStorage.getItem('books')) || [];
    }else{
      initialbook = []
    }

    const [books, setBooks] = useState(initialbook);

    useEffect(() => {
      localStorage.setItem('books',  JSON.stringify(books));
    }, [books]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContext;