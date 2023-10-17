import React from 'react'
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Logo from "../logo.png"
import { Outlet } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <div className='sticky top-0 w-full z-10 bg-main text-xl'>
      <header className='h-20 flex items-center justify-between pl-10  pr-10 max-w-[1500px] w-full m-auto'>
        <Link href="/">
          <Image
            boxSize='40px'
            src={Logo}
          />
        </Link>
        <div className='flex gap-10 h-full'>
          <Link href="signin" className="h-full flex items-center">Sign In</Link>
          <Link href="signup" className="h-full flex items-center">Sign Up</Link>
          <Link href="Checkout" className="h-full flex items-center">Checkout</Link>
        </div>
      </header>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation