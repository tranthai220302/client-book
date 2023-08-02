'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './page.module.css'
import logo from '@/public/images.png'
import avatar from '@/public/avata.png'
import cart from '@/public/cart.png'
import CartContext from '../../context/cartContext'
export default function Navbar() {
    const {quantity, setQuantity} = useContext(CartContext);
    const token = localStorage.getItem('token')
    const logout = () =>{
        localStorage.clear()
        window.location.reload();   
    }
  return (
    <div className={style.container}>
        <Link  href={"#"} className= {style.logo}>
        <Image
            src={logo}
            className={style.img_logo}
            objectFit="cover"
            alt=""  
        />
        </Link>
        <ul className={style.menu}>
            <Link className = {style.link} href={'/'}>
                <li className={style.item}>Trang chủ</li>
            </Link>
            <Link className = {style.link} href={'/product'}>
                <li className={style.item}>Sản phẩm</li>
            </Link>
            <Link className = {style.link} href={'/'}>
                <li className={style.item}>Blog</li>
            </Link>
            <li className={style.item}>Liên hệ</li>
        </ul>
        <div className={style.actions}>
            {token ? (
                <div className={style.item_action}>
                    <div className={style.login} onClick={() => logout()}>Đăng xuất</div>
                </div>
            ) : (<div><Link href={'/login'} className={style.login}>Đăng nhập</Link></div>)}
            <Link className = {style.link} href={'/cart'}>
            <div className={style.item_cart}>
                <Image 
                    src = {cart}
                    className={style.img_cart}
                    objectFit="cover"
                    alt="" 
                />
                <div className={style.quantity}>{quantity}</div>
            </div>
            </Link>
            
        </div>
        
    </div>
  )
}
