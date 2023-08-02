'use client'
import React, { useContext, useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import BookContext from '../../../context/bookContext'

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
export default function CartId() {
    const [isOpen, setOpen] = useState(false)
    const pizzas = [{
        product : '/anh1.jpg',
        name : 'Văn học',
        price: 20,
        quantity: 4
    }]
    const {books, setBooks} = useContext(BookContext)
    const total1 = () =>{
      let total = 0;
      books.map((book) =>{
         total += book.quantity*book.price
      })
      return total;
    }
    const total = total1();
    const style = {"layout":"vertical"};
    useEffect(()=>{
      if(isOpen){
        localStorage.clear()
      }
    }, [isOpen])

    async function createOrder() {
        // replace this url with your server
        const response = await fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
          cart: [
            {
              sku: "1blwyeo8",
              quantity: 2,
            },

          ],
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: 100, // Convert total to string and use as the value
              },
            },
          ],
    
        }),
      })
      const order = await response.json()
      console.log(1)
      return order.id
    }
    async function onApprove(data) {
        // replace this url with your server
        const response = await fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      })
      const orderData = await response.json()
      setOpen(true)
      window.location.reload();
    }

    // Custom component to wrap the PayPalButtons and show loading spinner
    const ButtonWrapper = ({ showSpinner }) => {
        const [{ isPending }] = usePayPalScriptReducer();

        return (
            <>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[style]}
                    fundingSource={undefined}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </>
        );
    }
  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <table className={styles.table}>
        <tr className={styles.trTitle}>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {books.length >0 && books.map((book) =>(
            <tr className={styles.tx}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={book.image}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{book.name}</span>
            </td>
            <td>
              <span className={styles.price}>${book.price}</span>
            </td>
            <td>
              <span className={styles.quantity}>{book.quantity}</span>
            </td>
            <td>
              <span className={styles.total}>${book.price*book.quantity}</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
    <div className={styles.right}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>CART TOTAL</h2>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Subtotal:</b>${total}
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Discount:</b>$0.00
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Total:</b>${total}
        </div>
        <div>
          <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider options={{ 
              clientId: "AXF6YcrmvP6RlNWjFrENN9s-WAL6N-Ih9xTBIOsNyGZ-1N2oKxpmxQcisF6Q5tl6zJM66dkxI-Tk2t7z", 
              components: "buttons", 
              currency: "USD",
              }}>
                <ButtonWrapper showSpinner={false} />
            </PayPalScriptProvider>
        </div>
        </div>
  
      </div>
    </div>
  </div>
  )
}
