import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import anh1 from '@/public/anh1.jpg'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';
import image from '@/public/1.jpg'
export default function Product({link, product}) {
  return (
      <Link href={`/product/${product.id}`} className={style.link}>
      <div className={style.container}>
        <Image 
              src = {product.image}
              className={style.img}
              alt=''
              height={240}
              width={270}
          />
          <div className={style.star}>
              <FontAwesomeIcon icon={faStar} className={style.icon} />
              <FontAwesomeIcon icon={faStar} className={style.icon} />
              <FontAwesomeIcon icon={faStar} className={style.icon} />
              <FontAwesomeIcon icon={faStar} className={style.icon} />
          </div>
          <div className={style.name}>{product.name}</div>
          <div className={style.description}>{product.description}</div>
          <div className={style.price}>{product.price}VNĐ</div>
      </div>
      </Link>
  )
}
