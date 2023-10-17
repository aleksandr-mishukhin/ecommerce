import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/D648N7.jpg"

const Product = () => {
  return (
    <div className='shadow-[0px_0px_10px_-2px_rgba(34,60,80,0.2)] p-5 ml-auto mr-auto mt-10 mb-10 max-w-[1000px] w-[1000px]'>
      <p className='font-medium text-xl mb-10'>Название товара: Some product</p>
      <div className='flex flex-row gap-3'>
        <Image src={Logo} objectFit="contain" />
        <div className='flex flex-col gap-4'>
          <p>Описание тоавара: Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint com</p>
          <p>Производитель: хорошое ☺</p>
          <p>Цена: 45$</p>
          <p>Наличие на складе: 5</p>
          <Button borderColor="rgb(118, 227, 131)" variant={'outline'} >Купить</Button>
        </div>
      </div>
    </div>
  )
}

export default Product