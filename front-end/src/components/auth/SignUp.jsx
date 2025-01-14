"use client"
import React, { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel,FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import ebay from '../../../public/ebay.png';

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation';
import {SignupSchema} from "@/components/schema"
import { signIn } from "next-auth/react";
import toast from 'react-hot-toast';
import axios from 'axios';
function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    let payload = {
      email: values.email,
      password: values.password,
    };
  
    try {
      const response = await axios.post('http://localhost:8080/addData', payload);
      if (response.status === 200) {
        // Account created successfully
        toast.success(response.data.message);
        router.push("/auth/login")
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // Error message sent from backend
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        // Other errors
        console.error('Error:', error);
        toast.error('An error occurred while processing your request');
      }
    }
  };
  
    
  return (
    // parent div
    <>
      <div className='  flex justify-center  items-center w-screen h-screen bg-[#F9F9F9] '>
        <div className=' bg-gradient-to-br  from-[#FAC74F] to-[#238BF9]  border-0  rounded-xl absolute w-[95%] px-2 m-3  md:w-[65%] lg:w-[49%] xl:w-[40%] 2xl:w-[35%] md:px-5 md:py-3 lg:p-3 lg:px-6 2xl:py-14 2xl:px-20 md:h-fit'>
        <center><Image src={ebay} alt=''  className=' sm:w-[120px] w-[80px]  object-contain' /></center>
          <p className='text-center py-1 font-semibold sm:text-xl text-md text-primary'>Get Started for free</p>
          <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <form className="">
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-mutedFields text-[15px] font-semibold">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter your email"
                            type="email"
                            className=" rounded-[10px] border-[#f9f9f9] bg-transparent"
                            //   disabled={loader}
                        
                          />
                        </FormControl>
                        <FormMessage></FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-mutedFields text-[15px] font-semibold">
                          Password
                        </FormLabel>
                        <FormControl>
                          <>
                            <div className="relative">
                              <Input
                                {...field}
                                placeholder="Create Password"
                                type={showPassword ? "text" : "password"}
                                required
                                className="rounded-[10px] border-[#f9f9f9] bg-transparent"
                              />
                              <div
                                className="absolute inset-y-0 right-0 flex items-center mr-4 cursor-pointer text-zinc-600"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                              </div>
                            </div>
                            <small className='pt-2 sm:text-sm text-[9px]'>Use 6 or more characters with a mix of letters, numbers & symbols</small>
                         
                          </>
                        </FormControl>
                    <FormMessage ></FormMessage> 
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </div>
            <Button
              className="mx-auto rounded-3xl mt-7 font-bold w-full bg-[#0066a0] flex justify-center"
              onClick={form.handleSubmit(onSubmit)}
            >
              {/* {isPending?<ImSpinner8 className="spinning-icon" />: "Login"} */}
              Sign up
            </Button>
            <div className='mx-auto my-6 flex items-center justify-evenly w-full text-black  before:mr-4 before:block before:h-[2px] before:flex-grow before:bg-zinc-300 after:ml-4 after:block after:h-[2px] after:flex-grow after:bg-zinc-300 font-bold'>
            OR CONTINUE WITH
          </div>
            <Link href="/auth/login">
              <p className="text-center text-sm mt-5 font-medium">
                Already have an account?  <span className='text-secondary font-bold text-[#1111ac]'> Log in</span>
              </p>
            </Link>
          </Form>
      
          {/* <Link href="/api/auth/signin" > */}
          {/* <Button
            className="mx-auto rounded-3xl mt-7 font-bold w-full bg-transparent text-primary hover:text-white border-primary border-2 gap-x-2 flex justify-center items-center"
          onClick={()=>{signIn('google')}} >
            <FcGoogle size={20} />
            <p>Google</p>
          </Button> */}
          {/* </Link> */}

          <p className='text-center mt-5 text-sm'> {'By continuing, you agree to our'} <span className='underline font-semibold hover:cursor-pointer'>Terms of Service</span>  and <span className='underline font-semibold hover:cursor-pointer'>Privacy Policy.</span> </p>
        </div>
      </div>
    </>
  )
}
export default SignUp