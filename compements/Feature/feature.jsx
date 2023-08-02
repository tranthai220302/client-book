import React from 'react'
import Image from 'next/image'
import style from './page.module.css'
import anh1 from '@/public/anh1.jpg'
import anh2 from '@/public/anh2.jpg'
import anh3 from '@/public/anh3.jpg'
import dow from '@/public/to_bottom.png'
export default function Feature() {
  return (
    <div>
        <div className={style.banner}>
            <div className={style.box_left}>
                <h2 className={style.title}>
                    <span>TRI THỨC LÀ </span>
                    <span>SỨC MẠNH</span>
                </h2>
                <p className={style.description}>Chuyên cung cấp các món ăn đảm bảo dinh dưỡng
                    hợp vệ sinh đến người dùng,phục vụ người dùng 1 cái
                    hoàn hảo nhất</p>
                <button className={style.button}>Mua ngay</button>
            </div>
            <div className={style.box_right}>
                <Image src={anh1} alt="" className={style.img_logo} />
                <Image src={anh3} alt="" className={style.img_logo} />
                <Image src={anh2} alt="" className={style.img_logo} />
            </div>
            <div className={style.bot_tom}>
                <a href="">
                    <Image src={dow} alt='' className={style.dow} />
                </a>
            </div>
        </div>
    </div>
  )
}
