import React from 'react'
import ProductCard from '../components/ProductCard'
import { Button } from '@chakra-ui/react'

const Checkout = () => {
  return (
    <div className='max-w-[970px] mt-10 mb-10 ml-auto mr-auto w-full p-5 flex justify-center align-middle flex-col'>
      <ProductCard />
      <Button className='p-2 m-auto flex justify-center align-middle' borderColor="rgb(118, 227, 131)" variant="outline">Купить</Button>
    </div>
  )
}

export default Checkout