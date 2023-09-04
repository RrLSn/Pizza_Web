import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className='w-screen h-[17vh] flex px-10 py-5 items-center gap-4'>
        <div className='w-[4vw] h-[8vh]'>
            <Image src="/svgs/Logo1.svg" width={35} height={30} alt='logo' className='absolute left-[5.6rem]' priority />
            <Image src="/svgs/Logo2.svg" width={70} height={30} alt='logo' className='' priority />
        </div>
        <div className='w-[90%] border-b-2 px-5 py-2'>
            <h1>PIZZA</h1>
        </div>
    </nav>
  )
}

export default NavBar