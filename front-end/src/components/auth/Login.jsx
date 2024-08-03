"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import ebay from '../../../public/ebay.png';
import { Input } from '../ui/input';
import { zodResolver } from "@hookform/resolvers/zod";
import {LoginSchema} from "@/components/schema";
import {toast} from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]= useState(""); 
  const [password,setPassword]= useState(""); 
  console.log("Email",email)
  console.log("password",password)
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
  
      const result = await signIn("credentials", {
        email:  email.toLowerCase(),
        password: password,
        redirect: false,
      });
      console.log("result: ", result);

      if (result.status === 200) {
        toast.success("User Logged in Successfully!");
        router.push("/");
      }
      if (result.status !== 200) {
        toast.error("Invalid email or Password");
      }
  };
    
    
  return (
    // parent div
    <>
      <div className=' flex justify-center  items-center w-screen h-screen bg-[#f9f9f9]'>
        <div className='    bg-gradient-to-br  from-[#FAC74F] to-[#238BF9]  border-0  rounded-xl absolute w-[95%] px-2 m-3  md:w-[65%] lg:w-[49%] xl:w-[40%] 2xl:w-[35%] md:px-5 md:py-3 lg:p-3 lg:px-6 2xl:py-14 2xl:px-20 md:h-fit   '>
         <center><Image src={ebay} alt=''  className=' sm:w-[120px] w-[80px] object-contain' /></center>
          <p className='text-center py-1 font-semibold sm:text-xl text-md text-primary'>Welcome Back</p>
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
                          onChange={(e) => {
                            field.onChange(e);
                            setEmail(e.target.value);
                          }}
                            placeholder="Enter your email"
                            type="email"
                            className=" rounded-[10px] border-[#f9f9f9] bg-transparent outline-none"
                            //   disabled={loader}
                            required
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
                                onChange={(e) => {
                                  field.onChange(e);
                                  setPassword(e.target.value);
                                }}
                                placeholder="Enter your assword"
                                type={showPassword ? "text" : "password"}
                                required
                                className="rounded-[10px] border-[#f9f9f9]  bg-transparent outline-none"
                              />
                              <div
                                className="absolute inset-y-0 right-0 flex items-center mr-4 cursor-pointer text-zinc-600"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                              </div>
                            </div>
                            <Link href='/auth/forgotpassword'>
                            <p className='flex justify-end font-medium'>Forget Password?</p>
                            </Link>
                          </>
                        </FormControl>
                        <FormMessage></FormMessage>
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
              Log in
            </Button>
            <div className='mx-auto my-6 flex items-center justify-evenly w-full text-black before:mr-4 before:block before:h-[2px] before:flex-grow before:bg-zinc-300 after:ml-4 after:block after:h-[2px] after:flex-grow after:bg-zinc-300 font-bold'>
            OR CONTINUE WITH
          </div>
            <Link href="/auth/signup">
            <p className="text-center text-sm mt-5 font-medium">
            {"Don't have an account? "}  <span className='text-secondary font-bold text-[#1111ac]'> Sign up</span>
            </p>
            </Link>
          </Form>
         
          
          <p className='text-center mt-5 text-sm'>By continuing, you agree to our <span className='underline font-semibold hover:cursor-pointer'>Terms of Service</span>  and <span  className='underline font-semibold hover:cursor-pointer'>Privacy Policy.</span> </p>
        </div>
      </div>
    </>
  )
}
export default Login;
