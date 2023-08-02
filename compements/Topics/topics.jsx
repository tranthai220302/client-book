import React from 'react'
import style from './page.module.css'
import Topic from '../Topic/topic'
const getTopic = async() =>{
  try {
    const data = await fetch('http://localhost:3001/topic')
    return data.json()
  } catch (error) {
    console.log(error)
  }
}
export default async function Topics() {
  const data = await getTopic();
  console.log(data)
  return (
    <div className={style.container}>
        <h1 className={style.title}>MỘT SỐ CHỦ ĐỀ</h1>
        <div className={style.list_item}>
          {data.map((topic, i) =>{
            if(i <= 4 ){
              return (
                <Topic 
                  topic={topic}
                  key={i}
                />
              )
            }
          })}
        </div>
    </div>
  )
}
