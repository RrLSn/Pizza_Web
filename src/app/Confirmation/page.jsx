'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()
  const {testParam} = router.query

  const selectedToppingsArray = selectedToppings ? JSON.parse(selectedToppings) : [];
  console.log(testParam)

  return (
    <div>Confirmation</div>
  )
}

export default page