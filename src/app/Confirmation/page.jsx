'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()
  const list = router.query
  console.log(list)
  return (
    <div>Confirmation</div>
  )
}

export default page