import React from 'react'
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Logo from "../logo.png"
import { Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <header className='h-20 flex items-center justify-between pl-10  pr-10 max-w-[1500px] w-full m-auto'>
        <Link href="/">
          <Image
            boxSize='40px'
            src={Logo}
          />
        </Link>
        <div className='flex gap-10 h-full'>
          <Link href="auth" className="h-full flex items-center">Login</Link>
          <Link href="Checkout" className="h-full flex items-center">Checkout</Link>
        </div>
      </header>
    <Outlet />
    </>
  )
}

export default Navigation