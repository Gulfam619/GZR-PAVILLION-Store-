import Image from 'next/image'
import React from 'react'

const ProductCard = ({ id, title, price, stocks, rating, thumbnail, category }) => {
  // Truncate title to a maximum length of 20 characters
  const truncatedTitle = title.length > 30 ? title.slice(0, 20) : title;

  return (
    <div className='flex flex-col p-4 w-full h-fit  rounded-xl border-[0.1px] shadow-md'>
      <Image src={thumbnail} alt='Image Not Loaded' width={200} height={100} className='w-[394px] object-fit h-[196px] rounded-xl' />
      <h1 className='mt-1 pl-1 font-medium text-sm'>{truncatedTitle}...</h1>
      <h1 className='pl-1 font-medium text-sm'>{category}</h1>
      <div className="pl-1 flex justify-between">
        <h1 className='font-medium text-sm'>$ {price}</h1>
        <h1 className='font-medium text-sm'>{rating}</h1>
      </div>
    </div>
  )
}

export default ProductCard
