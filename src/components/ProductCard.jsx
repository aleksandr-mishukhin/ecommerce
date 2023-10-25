import React from 'react'
import { Button, Image } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { DeleteIcon } from '@chakra-ui/icons';
function ProductCard({product}) {
  const {pathname} = useLocation();
  return (
    <div className='flex p-5 shadow-[0px_0px_10px_-2px_rgba(34,60,80,0.2)] rounded-md text-[12px]'>
      <Link className='mr-2' to={`/product/${product.sku}`}>
        <Image src={`images/${product.image}`} objectFit="contain" width={160} height={160} onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src="images/picture.png";
        }} /> 
      </Link>
      <div className='flex flex-row justify-between align-middle w-[100%]'>
        <div>
          <Link className='flex flex-col justify-between h-full mr-5 w-full' to={`/product/${product.sku}`}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.manufacturer}</p>
            <p>{product.price}</p>
          </Link>
        </div>
        {
          pathname === "/checkout"
          ?
          <div className='flex justify-center align-middle flex-col'>
            <Button className='m-auto'>
              <DeleteIcon />
            </Button>
          </div>
          :
          <div className='flex justify-center align-middle'>
            <p className='m-auto'>Наличие на складе: {product.stockquantity}</p>
          </div>
        }
      </div>
    </div>
  )
}

export default ProductCard