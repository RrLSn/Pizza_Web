'use client'
import React, { useState } from 'react'
import styles from '@/styles/Base.module.css'
import BaseList from '@/components/BaseList'
import { BaseListDatas } from '@/data'

const page = () => {
    const [showBase, setShowBase] = useState(false)

    const handleShowBaseClick = () => {
        setShowBase(!showBase)
    }
  return (
    <div className={styles.wrapper}>
        <h1 onClick={handleShowBaseClick}>Select a Base for your Pizza</h1>

        <section className='my-10 w-[50vw] h-[max-content] flex flex-wrap gap-7 justify-center items-center py-2'>
            {
                showBase && 
                BaseListDatas.map((data) => (
                    <BaseList
                        imgUrl={data.imgeUrl} 
                        name={data.baseName}
                        baseUrl={data.baseUrl}
                    />
                ))
            }
        </section>
    </div>
  )
}

export default page