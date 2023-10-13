import React from 'react'
import Logo from "../assets/B538G6.jpg"
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function ProductCard({product}) {
  return (
    <Link className='p-5 shadow-[0px_0px_10px_-2px_rgba(34,60,80,0.2)] rounded-md'>
      <Image src={Logo} objectFit="contain"/>
      <div className='flex flex-col gap-3 mt-5'>
        <span>Some product</span>
        <span>45$</span>
      </div>
    </Link>
  )
}

export default ProductCard