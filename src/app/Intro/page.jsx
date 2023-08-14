import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Intro.module.css'

const page = () => {
  return (
    <div className={styles.wrapper}>
        <h1>Hello
            <br />
            Welcome to the Pizza Home</h1>
            <p>Select your Pizza Base and Toppings</p>
        <Link href='/Base'><button>Place Order</button></Link>
    </div>
  )
}

export default page