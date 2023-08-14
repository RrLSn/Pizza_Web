'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Toppings.module.css'

const ToppingsList = (props) => {
    const {topping} = props
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = () => {
        setIsHovered(true)
    }

    const handleHoverLeave = () => {
        setIsHovered(false)
    }

  return (
    <Link href="" className='flex my-4 gap-2 px-5 w-[17vw]'>
        <Image src='/svgs/Greater.svg' height={30} width={10} alt='sign' priority className={isHovered ? styles.hover : 'hidden'} />
        <p onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>{topping}</p>
    </Link>
  )
}

export default ToppingsList