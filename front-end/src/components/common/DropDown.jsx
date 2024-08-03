
"use client"
import * as React from "react"
import { useState,useEffect } from "react";
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { RiUserAddLine } from "react-icons/ri";
import Link from "next/link";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { auth } from '@/firebase';
import toast from "react-hot-toast";
import {signOut, useSession} from "next-auth/react";
import logo from "../../../public/logo.png"
export function DropDown({ open, setOpen }) {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
   
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    await auth.signOut();
    
    setIsLoggedIn(false);
    toast.success("Your are Logout Successfully")
    setOpen(!open); 
  };

  const {data: session} = useSession();

 

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} >
      <div className="flex flex-col gap-4 justify-start border-[1px] items-start shadow-lg bg-white w-[190px] rounded-[4px] p-4 ">
        { session !== null ? (
          <>
          
            <p className="text-xs font-bold text-black text-wrap ">{session.user.email}</p>
          
          <div onClick={()=>{handleLogout();signOut()}} className="cursor-pointer inline-flex gap-3 justify-center items-center">
            <IoMdLogOut className='rounded-full p-1 bg-[#EEEE]' size={25} />
            <h1 className="text-sm font-normal">Logout</h1>
          </div>
          </>
        ) : (
          <>
            <Link href="/auth/signup" className="inline-flex gap-3 justify-center items-center">
              <RiUserAddLine className='p-1 rounded-full bg-[#EEEE]' size={25} />
              <h1 className="sm:text-md text-sm font-normal">SignUp</h1>
            </Link>
            <Link href="/auth/login" className="inline-flex gap-3 justify-center items-center">
              <IoMdLogIn className='rounded-full p-1 bg-[#EEEE]' size={25} />
              <h1 className="sm:text-md text-sm font-normal">Login</h1>
            </Link>
          </>
        )}
      </div>
    </DropdownMenu>
  )
}
