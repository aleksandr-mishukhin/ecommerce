import { Button, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct } from '../api/products'
import { addToCart } from '../api/user'
import { useSelector } from 'react-redux';

const Product = () => {
  const {id} = useParams()
  const isAuth = useSelector(state => state.user.isAuth)
  const [product, setProduct] = useState({})
  const navigate = useNavigate()

  const handleAddToCart = () => {
    if (!isAuth) navigate("/signin")
    else addToCart(product.id).catch(console.log)
  }

  useEffect(() => {
    getProduct(id).then(product => setProduct(product)).catch(err => console.log(err))
  }, [])
  return (
    <div className='shadow-[0px_0px_10px_-2px_rgba(34,60,80,0.2)] p-5 ml-auto mr-auto mt-10 mb-10 max-w-[1000px] w-[1000px]'>
      <p className='font-medium text-xl mb-10'>{product.name}</p>
      <div className='flex flex-row gap-3'>
        <Image src={`${process.env.REACT_APP_API_URL}/${product.image}`} maxW={'600px'} objectFit="contain" onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src=`${process.env.REACT_APP_API_URL}/picture.png`;
        }} />
        <div className='flex flex-col gap-4 w-full'>
          <p>{product.description}</p>
          <p>{product.manufacturer}</p>
          <p>{product.price}</p>
          <p>Наличие на складе: {product.stockquantity}</p>
          <Button borderColor="rgb(118, 227, 131)" variant={'outline'} onClick={handleAddToCart}>Добавить в корзину</Button>
        </div>
      </div>
    </div>
  )
}

export default Product