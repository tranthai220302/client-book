import Image from 'next/image'
import styles from './page.module.css'
import Feature from '../../compements/Feature/feature'
import Products from '../../compements/Products/products'
import Topics from '../../compements/Topics/topics'
import Feedbacks from '../../compements/Feedbacks/Feedbacks'
export default function Home() {
  return (
    <div className={styles.main}>
        <Feature />
        <Products />
        <Topics />
        <Feedbacks />
    </div>
  )
}
