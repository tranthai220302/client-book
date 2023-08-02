import React from 'react'
import style from './page.module.css'
import Product from '../../../../compements/Product/product'

const getBooks = async (id) =>{
  try {
    const data = await fetch(`http://localhost:3001/topic/book/${id}`, {
      cache: 'no-store'
    })
    return data.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function Topics(id) {
  const data = await getBooks(id.params.id);
  return (
    <div className={style.container}>
        <h1 className={style.title}>SẢN PHẨM</h1>
        <div className={style.list_item}>
          {data.map((book, i) => {
            if(i <=4 ){
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

