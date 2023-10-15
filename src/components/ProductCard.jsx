import React from 'react'
import Logo from "../assets/D648N7.jpg"
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function ProductCard() {
  return (
    <div className='p-5 shadow-[0px_0px_10px_-2px_rgba(34,60,80,0.2)] rounded-md'>
      <Link>
        <Image src={Logo} objectFit="contain"/>
      </Link>
      <div className='flex flex-col gap-3 mt-5'>
        <Link>
          <span>Some product</span>
        </Link>
        <span>45$</span>
      </div>
    </div>
  )
}

export default ProductCard