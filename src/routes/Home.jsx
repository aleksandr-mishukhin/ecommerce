import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div className='max-w-[970px] mt-10 mb-10 ml-auto mr-auto w-full p-5'>
      <div className='gap-5'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Home