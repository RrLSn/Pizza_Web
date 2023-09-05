"use client"
import React, { useState } from 'react'
import styles from '@/styles/Toppings.module.css'
import { Toppings, baseSelected } from '@/data'
import ToppingsList from '@/components/ToppingsList'
import Link from 'next/link'

const page = () => {

  const [selectedToppings, setSelectedToppings] = useState([])

  const handleListClicked = (list) => {
    if(selectedToppings.includes(list)){
      return setSelectedToppings(selectedToppings.filter((newList) => newList === list))
    }
    else{
      return setSelectedToppings([...selectedToppings, list])
    }
  }

  console.log(selectedToppings)

  return (
    <div className={styles.wrapper}>
      <h1>Add Toppings for {baseSelected}</h1>
      <h2></h2>

      <main>
        <ul>
          {
            Toppings.map((list,index) => (
              <li key={index} onClick={()=>handleListClicked(list.name)}>
                <ToppingsList 
                topping={list.name}
                params={list.id}
                />
              </li>
            ))
          }
        </ul>
      </main>

      <Link href={`/Confirmation?selectedToppings=${JSON.stringify(selectedToppings)}`} as={`/Confirmation`}><button  className='w-[6rem] h-[3rem] m-auto'>Next</button></Link>
    </div>
  )
}

export default page