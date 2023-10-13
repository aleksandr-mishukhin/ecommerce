import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <div className='max-w-[1500px] mt-10 mb-10 ml-auto mr-auto w-full p-5'>
      <div className='grid grid-cols-4 gap-5'>
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