import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const BaseList = (props) => {
    const {imgUrl, name, baseUrl} = props
  return (
    <div className='w-[17vw] font-bold h-[max-content] text-center'>
        <Image src={imgUrl} width={200} height={30} alt='Pizza' priority />
        <Link href='/Toppings'>{name}</Link>
    </div>
  )
}

export default BaseList