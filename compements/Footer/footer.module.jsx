import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import logo from '@/public/images.png'
export default function Footer() {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            <Image
                src = {logo}
                className={style.img_logo}
                alt=''            
            />
            <div className= {style.desc}>
                Cung cấp sản phẩm với chất lượng an toàn 
                cho quý khách
            </div>
        </div>
        <div className={style.content}>
            <h1 className={style.title}>Nội dung</h1>
            <ul className={style.list_item}>
                <li className={style.item}>Trang chủ</li>
                <li className={style.item}>Sản phẩm</li>
                <li className={style.item}>Blog</li>
                <li className={style.item}>Liên hệ</li>
            </ul>   
        </div>
        <div className={style.contact}>
            <h1 className={style.title}>Liên Hệ</h1>
            <input type="text" name="" id="" className={style.email} placeholder='Địa chỉ email'/>
            <button  className={style.button}>Nhận tin</button>
        </div>
    </div>
  )
}
