import React, { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import {cart} from "../api/user"
import ProductCard from "../components/ProductCard"

const Cart = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    cart().then(products => setProducts(products)).catch(console.log)
  }, [])

  return (
    <div className='max-w-[970px] mt-10 mb-10 ml-auto mr-auto w-full p-5 flex justify-center align-middle flex-col'>
      {
        products.length === 0
        ?
        <div className='m-auto text-xl h-full'>Корзина пустая</div>
        :
        <>
          {products.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))}
          <Button className='p-2 m-auto flex justify-center align-middle mt-5' borderColor="rgb(118, 227, 131)" variant="outline">Купить</Button>
        </>
      }
    </div>
  )
}

export default Cart