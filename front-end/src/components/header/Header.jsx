"use client"
import React, {useEffect, useRef, useState} from "react"
import logo from "../../../public/logo.png"
import ebay from "../../../public/ebay.png"
import Image from "next/image"
import {IoIosNotificationsOutline} from "react-icons/io"
import {FaMagnifyingGlass} from "react-icons/fa6"
import {FaCartShopping} from "react-icons/fa6"
import {DropDown} from "../common/DropDown"
import Link from "next/link"
import Notification from "../common/Notification"
import { searchProduct } from "@/store/searchProduct/SearchThunk"
import { useDispatch } from "react-redux"

const Header = () => { 
  const [open, setOpen] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const [search , setSearch] = useState("")
  const dispatch = useDispatch()
  //  Search API Calling
  useEffect(() => {
    dispatch(searchProduct(search))
   
  }, [search])
  const toggleAccount = () => {
    setOpen(!open)
  }
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target.value)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed w-full bg-white shadow-md z-50 ">
      <div className="sm:flex flex-col w-full  hidden     ">
        <div className=" h-[76px] w-full px-6 border-b inline-flex justify-between items-center gap-5 ">
         <Link href="/"> <Image src={ebay} alt="" className=" w-[100px] object-contain cursor-pointer" /></Link>
          <div className="w-[60%] h-fit inline-flex justify-center items-center  bg-[#FAF9F8] rounded-full  ">
            <input
              type="text"
              className=" w-full h-[43px] rounded-full bg-transparent   outline-none pl-4 placeholder:text-[#000000be] placeholder:font-medium placeholder:text-[13px]"
              placeholder="Search for Something"
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <button className=" text-[#238BF9] rounded-full p-3">
              <FaMagnifyingGlass size={25} />
            </button>
          </div>
          <ol className="flex flex-row gap-4 h-full items-center">
            <li
              className=" cursor-pointer h-[40px] w-[40px] "
              onClick={toggleAccount}
            >
              <Image
                src={logo}
                alt="File is not Loaded"
                className="  rounded-full w-fit h-full"
              />
            </li>
            
        <div className="fixed top-16 w-fit right-2">
          {open === true ? <DropDown  open={open} setOpen={setOpen}/> : ""}
        </div>
    
            <li className="cursor-pointer" onClick={()=>{setOpenNotification(!openNotification)}}>
              <IoIosNotificationsOutline size={25} />
            </li>
            <div className="fixed top-16 w-fit right-4">
            {openNotification === true ? <Notification open={openNotification} setOpen={setOpenNotification}/> : ''}
            </div>
            <Link href="/add-to-cart">
            <li className="cursor-pointer">
              <FaCartShopping size={20} />
            </li>
            </Link>
          </ol>
        </div>
      </div>
      <div className="flex flex-col justif items-center  w-full sm:hidden ">
        <div className=" flex flex-row justify-between w-full px-2">
        <Link href="/"><Image src={ebay} alt="" className=" w-[70px] object-contain cursor-pointer" /></Link>  

          <ol className=" inline-flex gap-3 items-center ">
            <li
              className="font-semibold inline-flex gap-2 justify-center items-center cursor-pointer"
              onClick={toggleAccount}
            >
              <Image
                src={logo}
                alt="File is not Loaded"
                className=" h-[40px] w-fit rounded-full"
              />{" "}
            </li>
            <div className=" fixed top-16 w-fit right-2">
              {open === true ? <DropDown open={open} setOpen={setOpen} /> : ""}
            </div>
            <li className=" p-2 rounded-full bg-[#EEEE]">
              <IoIosNotificationsOutline size={20} />
            </li>
            <Link href="/product-details">
            <li className=" p-2 rounded-full bg-[#EEEE]" >
              <FaCartShopping size={20} />
            </li>
            </Link>
          </ol>
        </div>
        
         <div className="w-[90%] mb-2 h-fit inline-flex justify-center items-center  bg-[#FAF9F8] rounded-full  ">
            <input
              type="text"
              className=" w-full h-[43px] rounded-full bg-transparent   outline-none pl-4 placeholder:text-[#000000be] placeholder:font-medium placeholder:text-[13px]"
              placeholder="Search for Something"
            />
            <button className=" text-[#238BF9] rounded-full p-3">
              <FaMagnifyingGlass size={25} />
            </button>
          </div>
      </div>
    </div>
  )
}

export default Header
