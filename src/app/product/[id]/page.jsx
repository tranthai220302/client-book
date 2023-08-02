  'use client'
  import React, { useContext, useEffect, useState } from 'react'
  import style from './page.module.css'
  import Image from 'next/image'
  import Loading from '@/public/loading.gif'
  import CartContext from '../../../../context/cartContext'
  import useSWR from 'swr'
  import BookContext from '../../../../context/bookContext'
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  export default function ProductId(id) {

    const { data, isLoading, error } = useSWR(`http://localhost:3001/book/${id.params.id}`, fetcher)
    const {quantity, setQuantity} = useContext(CartContext);
    const [number, setNumber] = useState(0);
    const {books, setBooks} = useContext(BookContext)
    const [arr, setArr] = useState(books)
    const handleQuantity = (number)=>{
      setQuantity(quantity + 1)
      const book = {
        image : data.image,
        name: data.name,
        price: data.price,
        description: data.description,
        quantity: number
      }
      setArr((prev)=> [...prev, book])
    }
    useEffect(()=>{
      setBooks(arr)
    }, [arr])
    console.log(books)
    console.log(quantity)
    return (
      <div className={style.container}>
      {isLoading && (
        <div>
          <Image  
          src = {Loading}
          height={200}
          width={200}
          className={style.loading}
          alt=''
          />  
        </div>
      )}
      {data && (
        <div className={style.imgContainer}>
          <Image 
            className= {style.img}
            src={data.image} 
            alt=""
            width="500" 
            height="500" />
        </div>
      )}
      {data && (
            <div className = {style.content}>
            <h1 className={style.title}>
                {data.name}
              </h1>
              <div className={style.price}>{data.price}$</div>
              <div className={style.desc}>
                {data.description}
              </div>

              <div className={style.add}>
                  <input type="number" onChange={(e) => setNumber(e.target.value)}  defaultValue={1} className={style.quantity}/>
                  <button className={style.button} onClick={() => handleQuantity(number)}>Add to Cart</button>
              </div>
            </div>
      )}
  </div>
    )
  }
