import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonComponent = () => {
  return (
    <div className=' flex-col flex pl-4 gap-2  sm:mx-0 w-full justify-center rounded-xl shadow-md p-4'>
      
      <Skeleton  height={180} />
      <Skeleton width={100}  />
      <Skeleton width={150}  />
      
      
      
      <div className=" inline-flex justify-between gap-2 w-full">
      <Skeleton width={50}/>
      <Skeleton  width={50}  />
    </div>

      
    </div>
  );
};

export default SkeletonComponent;