import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import topic1 from '@/public/topic1.jpg'
import Link from 'next/link'
export default function Topic({topic}) {
  return (
    <Link href={`/topic/${topic.id}`}>
      <div className={style.container}>
        <Image 
            src = {topic.image}
            className={style.img}
            height={250}
            width={250}
            alt=''
        />
        <div className={style.name}>{topic.name}</div>
        <div className={style.description}>Khái quát văn học dân gian Việt Nam - Đọc hiểu văn bản - Anh văn học</div>
      </div>
    </Link>
  )
}
