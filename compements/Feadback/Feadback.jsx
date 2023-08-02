import React from 'react'
import style from './page.module.css'
import Image from 'next/image'
import avatar from '@/public/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';
export default function Feadback() {
  return (
    <div className={style.container}>
        <Image 
            src={avatar}
            className={style.img}
            alt=''
        />

        <div className={style.star}>
            <FontAwesomeIcon icon={faStar} className={style.icon} />
            <FontAwesomeIcon icon={faStar} className={style.icon} />
            <FontAwesomeIcon icon={faStar} className={style.icon} />
            <FontAwesomeIcon icon={faStar} className={style.icon} />
        </div>
        <div className={style.name}>Trần Quang Thái</div>
        <div className={style.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
    </div>
  )
}
