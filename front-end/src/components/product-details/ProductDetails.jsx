"use client"
import React, { useEffect } from 'react';
import LeftSidebar from './LeftSidebar';
import InfoCard from './InfoCard';
import RightSidebar from './RightSidebar';
import { fetchProductDetails } from '@/store/productDetails/productDetailThunk';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {
  // const id = useSelector((state) => state.productDetails.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedId = localStorage.getItem('productDetailsId');
    if (storedId) {
      dispatch(fetchProductDetails(storedId));
    }
  }, []);

  

  return (
    <div className='lg:flex justify-between items-center gap-x-3 px-4 md:px-6 lg:px-12 h-screen'>
      <div className=' w-full lg:w-[25%]'>
        <LeftSidebar />
      </div>
      <div className='w-full lg:w-[50%]'>
        <InfoCard />
      </div>
      <div className='w-full lg:w-[25%]'>
        <RightSidebar />
      </div>
    </div>
  );
}

export default ProductDetails;


  
  
