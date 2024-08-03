"use client"
import React, {useEffect,  useState} from "react"
import Image from "next/image"
import {RxCross2} from "react-icons/rx"
import {MdOutlineFavorite} from "react-icons/md"
import {FaPlus} from "react-icons/fa6"
import {GrFormSubtract} from "react-icons/gr"

export default function AddToCart() {
  const [cart,setCart]=useState("0");
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("cartItems")
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    console.log("Data from local Storage", cartItems.length)
    console.log("Data from Cart", cart)
    setCart(cartItems.length)
  }, [])
  useEffect(() => {
  
    setCart(cartItems.length)
  }, [cartItems.length])

  const increaseQuantity = (index) => {
    const updatedData = [...cartItems]
    updatedData[index].totalQuantity += 1
    setCartItems(updatedData)
    
  }

  const decreaseQuantity = (index) => {
    const updatedData = [...cartItems]
    if (updatedData[index].totalQuantity > 1) {
      updatedData[index].totalQuantity -= 1
    }
    setCartItems(updatedData)
   
  }

  const removeFromCart = (id) => {
    const updatedData = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedData)
    localStorage.setItem("cartItems", JSON.stringify(updatedData))
    
  }

  // Calculate total price of all products
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.totalQuantity
  }, 0)

  return (
    <div className="h-[100vh] flex justify-center items-center sm:pt-20 pt-40">
    {cart === 0 ?
     <div className=" w-screen h-[80vh] flex justify-center items-center">
      <h1 className=" text-gray-500 font-bold sm:text-[50px] text-[25px]">No Product Added Yet!</h1>
     </div>
     :
    <div className="w-[90%]  overflow-y-auto h-[80vh] border mx-auto    lg:flex justify-center   flex-col ">
      <div className="  px-4 rounded-md h-full  w-full space-y-4 ">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="lg:flex justify-between items-center  border-b w-[100%]"
          >
            <div className="lg:flex items-center lg:w-[30%]">
              <div className="flex gap-x-4 justify-between py-6 lg:py-0 lg:w-[35%]">
                <p onClick={() => removeFromCart(item.id)} className=" bg-[#ff3131] rounded-full text-white p-1 cursor-pointer">
                  <RxCross2 size={16} />
                </p>
                <p className=" px-2">
                  <MdOutlineFavorite size={25} />
                </p>
              </div>
              <div>
                <Image
                  src={item.thumbnail}
                  alt="File is not Loaded"
                  width={150}
                  height={150}
                  className="mx-auto lg:mx-0"
                />
              </div>
            </div>
            <div className="lg:w-[40%] lg:flex items-center gap-x-12">
              <div className="text-center my-4 lg:w-[10%]">
                <p>{item.price * item.totalQuantity}</p>
              </div>
              <div className="text-center lg:text-start">
                <p className="font-semibold text-lg">{item.title}</p>
                <p>{item.description}</p>
                <p className="text-gray-500">{item.category}</p>
              </div>
            </div>
            <div className="flex justify-center my-4 items-center gap-x-4 lg:w-[10%]">
              <p
                onClick={() => decreaseQuantity(index)}
                className="text-xl font-bold hover:cursor-pointer "
              >
                <GrFormSubtract size={25} />
              </p>
              <p className="bg-gray-200 rounded border p-2">
                {item.totalQuantity}
              </p>
              <p
                onClick={() => increaseQuantity(index)}
                className="text-2xl font-bold hover:cursor-pointer"
              >
                <FaPlus size={20} />
              </p>
            </div>
          </div>
        ))}
        {/* Display total price */}
        <div className="text-center mt-4">
          <p className="font-bold lg:text-end">Total Price: {totalPrice}</p>
        </div>
      </div>
    </div>
}
    </div>
  )
}
