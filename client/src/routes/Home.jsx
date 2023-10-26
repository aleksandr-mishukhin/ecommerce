import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProducts } from "../api/products"

const Home = () => {
  const [products, setProducts] = useState([])
  const isAuth = useSelector(state => state.user.isAuth)
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, [])

  return (
    <div className='max-w-[970px] mt-10 mb-10 ml-auto mr-auto w-full p-5'>
      <div className='flex flex-col gap-5'>
        {products.map(product => (
          <ProductCard key={product.sku} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Home