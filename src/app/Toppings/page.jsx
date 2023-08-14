import React from 'react'
import styles from '@/styles/Toppings.module.css'
import { Toppings } from '@/data'
import ToppingsList from '@/components/ToppingsList'

const page = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Add Toppings for {}</h1>

      <section>
          {
            Toppings.map((list) => (
              <ToppingsList 
                topping={list.name}
              />
            ))
          }
      </section>
    </div>
  )
}

export default page