import React from 'react'
import style from './page.module.css'
import Product from '../Product/product'

const getBooks = async () =>{
  try {
    const data = await fetch('http://localhost:3001/book', {
      cache: 'no-store'
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function Products() {
  const data = await getBooks();
  console.log(data)
  return (
    <div className={style.container}>
        <h1 className={style.title}>SẢN PHẨM</h1>
        <div className={style.list_item}>
          {data.map((book, i) => {
            if(i <=3 ){
              return (
                <Product 
                  link = "cart" 
                  key={i} 
                  product={book} 
                />
              )
            }
          })}
        </div>
    </div>
  )
}

