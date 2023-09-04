"use client"
import React, { useState } from 'react'
import styles from '@/styles/Toppings.module.css'
import { Toppings, baseSelected } from '@/data'
import ToppingsList from '@/components/ToppingsList'
import Link from 'next/link'

const page = () => {

  const [selectedToppings, setSelectedToppings] = useState([])

  const handleClicked = (list) => {
    setSelectedToppings([list, ...list])
    console.log(selectedToppings)
  }
  return (
    <div className={styles.wrapper}>
      <h1>Add Toppings for {baseSelected}</h1>
      <h2></h2>

      <section>
          {
            Toppings.map((list,index) => (
              <ul key={index}>
                <li onClick={handleClicked}>
                  <ToppingsList 
                  topping={list.name}
                  params={list.id}
                 />
                </li>
              </ul>
            ))
          }
          {/* <button><Link href="/Confirmation">Next</Link></button> */}
      </section>
    </div>
  )
}

export default page