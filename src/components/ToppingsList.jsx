'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '@/styles/Toppings.module.css'

const ToppingsList = (props) => {
    const {topping, params} = props 
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = () => {
        setIsHovered(true)
    }

    const handleHoverLeave = () => {
        setIsHovered(false)
    }

    const handleClick = () => {

    }

  return (
    <div className='flex my-4 gap-2 px-5 w-[17vw] cursor-pointer'>
        <Image src='/svgs/Greater.svg' height={30} width={10} alt='sign' priority className={isHovered ? "block" : 'hidden'} />
        <p className='hover:text-red-200' onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>{topping}</p>
    </div>
  )
}

export default ToppingsList