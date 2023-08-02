import React from 'react'
import style from './page.module.css'
import Feadback from '../Feadback/Feadback'
import Image from 'next/image'
import next from '@/public/next.png'
import prev from '@/public/prev.png'
export default function Feedbacks() {
  return (
    <div className={style.container}>
        <h1 className={style.title}>NHẬN XÉT CỦA KHÁCH HÀNG</h1>
        <div className={style.list_item}>
            <Feadback></Feadback>        
        </div>
        <div className={style.button}>
            <Image 
                src = {prev}
                alt=''
                className={style.img}
            />
            <Image 
                src = {next}
                alt=''
                className={style.img}
            />
        </div>
    </div>
  )
}
