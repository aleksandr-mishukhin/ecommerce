import React from 'react'
import Logo from "../assets/D648N7.jpg"
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function ProductCard() {
  return (
    <div className='flex p-5 shadow-[0px_0px_10px_-2px_rgba(34,60,80,0.2)] rounded-md text-[12px]'>
      <Link className='mr-2'>
        <Image src={Logo} objectFit="contain" width={160} height={160}/>
      </Link>
      <div>
        <Link className='flex flex-col justify-between h-full'>
          <p>Название товара: Some product</p>
          <p>Описание тоавара: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint com</p>
          <p>Производитель: хорошое ☺</p>
          <p>Цена: 45$</p>
        </Link>
      </div>
      <div className='flex justify-center align-middle'>
        <p className='m-auto'>Наличие на складе: 5</p>
      </div>
    </div>
  )
}

export default ProductCard