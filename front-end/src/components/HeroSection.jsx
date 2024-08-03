"use client";
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import hsImg from '../../public/hero-section.png';
import smhs from '../../public/smhs.png';

const HeroSection = () => {
    const [activebtn, setActivebtn] = useState(1);

    // Creating an Array of Object to Show All
    const btn = [
        { name: 'Home', icon: null },
        { name: 'Saved', icon: <FaHeart/> },
        { name: 'Electronics', icon: null },
        { name: 'Motors', icon: null },
        { name: 'Home & Garden', icon: null },
        { name: 'Clothing & Accessories', icon: null },
        { name: 'Sports', icon: null },
        { name: 'Health & Beauty', icon: null },
        { name: 'Toys', icon: null },
        { name: 'Business & Industrial', icon: null },
        { name: 'Collectables', icon: null },
        { name: 'Deals & Sales', icon: null }
    ];

    return (
        <div className='sm:pt-20 pt-28 '>
            <div className="flex flex-nowrap overflow-x-auto bg-[#FAF9F8] p-3 gap-2 b2xl:gap-14   2xl:justify-center justify-start overscroll-x-auto xl:pl-12">
                {btn.map((item, index) => (
                    <div className={`flex-shrink-0 flex items-center font-semibold gap-1 ${activebtn === index + 1 ? 'bg-[#E8EDF8] text-[blue] text-balance rounded-xl px-2' : ''}`} key={index}>
                        <span className=' text-[#FAC74F]'>{item.icon}</span>
                        <Link href='#'>
                            <button
                                className="text-[14px] py-2 px-2 min-w-[fit-content]"
                                onClick={() => { setActivebtn(index + 1) }}
                            >
                                {item.name}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="px-14 mt-2 mb-10  sm:block hidden">
                <Image src={hsImg} className='w-full aspect-auto' alt='' />
            </div>

            <div className="px-3 mt-2 my-6 sm:hidden block">
                <Image src={smhs} className=' w-full aspect-square' alt='' />
            </div>
          
        </div>
    );
};

export default HeroSection;
