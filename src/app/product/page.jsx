'use client'
import React from 'react'
import style from './page.module.css'
import Product from '../../../compements/Product/product'
import useSWR from "swr"
import Image from 'next/image'
import loading from '@/public/loading.gif'
import "bootswatch/dist/litera/bootstrap.min.css"

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function page() {
  const {
    data,
    isLoading,
    isError: error,
  } = useSWR(
    "http://localhost:3001/book",
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );
  const user =  JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
    <div className={style.container}>
      {isLoading ? (
        <div>
          <Image 
            src={loading}
            alt=""
            className={style.loading}
          />
        </div>
      ) : (
        <div className={style.content}>
        <h1>Sản phẩm</h1>
        <div className={style.list_item}>
          {data && data.map((product) =>(
            <Product 
              link={`product/${product.id}`}
              product={product}
              key={product.id}
            />
          )
          )}
        </div>
        </div>
      )}
    </div>
  );
}

