"use client";
import React from 'react';
import Image from 'next/image';
import img from "@/../public/ebay.png";
import { useSelector } from 'react-redux';


export default function LeftSidebar() {
  const  productDetails  = useSelector((state)=> state?.productDetails)
  console.log("Product Details from Redux",productDetails.products)
  return (
    <div className='lg:pt-0 pt-32'>
      <div className=' bg-white w-full rounded flex justify-center '>
        <Image src={productDetails.products?.thumbnail} alt='img'  width={600} height={100} className=' aspect-video'/>
      </div>
    </div>
  )
}
