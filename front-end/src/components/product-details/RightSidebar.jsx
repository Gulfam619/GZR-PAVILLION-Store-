import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import { Button } from '../ui/button';


export default function RightSidebar() {
  return (
    <div >

      <div className=' border rounded-lg p-3'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-x-4  '>
            <MdAccountCircle size={40} />
            <div>
              <p className='text-blue-500 font-semibold'>Tech_Galore (2.3k)</p>
              <p className='text-sm mt-1'>99.2% positive feedback</p>
            </div>
          </div>

          <div className='flex items-center gap-x-4'>
            <MdOutlineFavoriteBorder size={30} className='text-gray-500' />
            <p className='text-gray-500 font-medium text-lg'>Save</p>

          </div>


        </div>
        <Button className="w-full border rounded-full mt-3"> Contact Seller</Button>
        <p className='text-xs mt-2 mx-2'>Register as a business Seller</p>
      </div>

      <div className='bg-blue-200 rounded my-3 flex justify-between items-center p-3'>
        <div className='flex gap-x-4 items-center'>
          <GoDotFill />
          Take AU $29.94 off this item
        </div>
        <div>
          <p className='underline font-semibold'>Show more</p>
        </div>

      </div>

      <div className='flex  gap-x-4 items-center'>
        <RiMoneyDollarCircleFill size={30} className='text-blue-600' />
        <div>
          <p className='text-xs font-semibold'>eBay Money Back Guarantee</p>
          <p className='text-xs'>Get the item you ordered or your money back. </p>
        </div>
      </div>



    </div>
  )
}
