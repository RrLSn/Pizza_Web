import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { BaseListDatas } from '@/data'
import { baseSelected } from '@/data'

const BaseList = (props) => {
    const { imgUrl, name, params, } = props

    const handleBaseClicked = () => {
      baseSelected.push(BaseListDatas[params].baseName)
      console.log(baseSelected)
    }

  return (
    <div className='w-[17vw] font-bold h-[max-content] text-center'>
        <Image src={imgUrl} width={200} height={30} alt='Pizza' priority />
        <Link href={`/Toppings/${params}`} className='hover:text-red-200' onClick={handleBaseClicked}>{name}</Link>
    </div>
  )
}

export default BaseList