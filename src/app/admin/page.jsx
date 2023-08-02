'use client'
import React, { useEffect, useState } from 'react'
import style from './page.module.css'
import Products from '../../../compements/Products/products'
import Product from '../../../compements/Product/product'
import loading1 from '@/public/loading.gif'
import useSWR from 'swr'
import Image from 'next/image'
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Admin() {
    const user = JSON.parse(localStorage.getItem('user'))  
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([])
    const [book, setBook] = useState({
        name : '',
        description: '',
        price : 0,
        image: 'https://thietkekhainguyen.com/wp-content/uploads/2018/10/sach-anh-dep3-788x445.jpg',
    })
    const [topicId, setTopicId] = useState(1);
    const [image, setImage] = useState('')
    const handleClick = () =>{
        setOpen(true)
    } 
    const disClick = () =>{
        setOpen(false)
    } 
    const onChange = (e) =>{
        const { name, value } = e.target;
        setBook((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    const handleTopic = (e) =>{
        setTopicId(e.target.value)
    }
    const addBook = async(event) =>{
        event.preventDefault()
        const token = localStorage.getItem('token')
        try {
            const response = await fetch(`http://localhost:3001/book/create/${topicId}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify(book),
            });
            const data1 = await response.json()
            window.location.reload()
          } catch (error) {
            window.location.href = '/login';
          }
    }
    const deleteBook = async(id) =>{
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`http://localhost:3001/book/delete/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
              });
            const dataBook = await response.json()
            setData(dataBook)
            console.log(dataBook)
        } catch (error) {
            console.log(error)
        }
    }
    const {
        data : data1,
        isLoading,
        isError,
      } = useSWR(
        "http://localhost:3001/book",
        fetcher,
        { revalidateOnFocus: false, revalidateOnReconnect: false }
      ); 
    useEffect(()=>{setData(data1)}, [data1]) 
    const {
        data : topic,
        isLoading : loading,
        isError: error,
      } = useSWR(
        "http://localhost:3001/topic",
        fetcher,
        { revalidateOnFocus: false, revalidateOnReconnect: false }
      ); 
  return (
    <div>
        {user ? (
            <div className={style.container}>
                <button className={style.button} onClick={() => handleClick()}>+ Add Book</button>
                {isLoading ? (
                    <Image 
                        src={loading1}
                        alt=''
                        className={style.loading}
                    />
                ) : (
                    <div className={style.products}>
                        {open && (
                            <div className={style.add}>
                                <form className={style.form}>
                                    <div className={style.x} onClick={() => disClick()}>X</div>
                                    <div className={style.to}>
                                        <label className={style.label}>Name</label>
                                        <input type="text" name="name"  className={style.input} onChange={(e)=> onChange(e) }/>
                                    </div>
                                    <div className={style.to}>
                                        <label className={style.label}>Description</label>
                                        <textarea name="description" id="" cols="30" rows="5" className={style.input} onChange={(e)=> onChange(e)}></textarea>
                                    </div>
                                    <div className={style.to}>
                                        <label className={style.label}>Price</label>
                                        <input type="text" name="price"  className={style.input} onChange={(e)=> onChange(e)}/>
                                    </div>
                                    <div className={style.to} >
                                        <label className={style.label}>Topic</label>
                                        <select name="topic" id="" onChange={handleTopic}>
                                            {topic && topic.map((t, i) =>(
                                                <option value={t.id} key={i}>{t.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={style.to}>
                                        <label className={style.label}>Image</label>
                                        <input type="file" name="image"  className={style.input} />
                                    </div>
                                    {/* Thêm các trường dữ liệu khác của sách tại đây */}
                                    <button type="submit" className={style.button1} onClick={addBook}>Add Book</button>
                                </form>
                            </div>
                        )}
                        <div className={style.item}>
                        
                        <h1 className={style.title}>SẢN PHẨM</h1>
                        <div className={style.list_item}>
                        {data && data.map((product) =>(
                            <div>
                            <Product 
                                link={`product/${product.id}`}
                                product={product}
                                key={product.id}
                            />
                            <div className={style.action}>
                                <button className={style.action_item} onClick={() => deleteBook(product.id)}>Delete</button>
                                <button className={style.action_item}>Edit</button>
                            </div>
                            </div>
                        )
                        )}
                        </div>
                    </div>
                    </div>
                )}
            </div>
        ) : (
            <div>Bạn không phải amidn</div>
        )}
    </div>
  )
}
