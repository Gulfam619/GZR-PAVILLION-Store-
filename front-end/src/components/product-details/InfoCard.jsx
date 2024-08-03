"use client"
import React, {useEffect, useState} from "react";
import {Button} from "../ui/button";
import {useSelector} from "react-redux";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";


export default function InfoCard() {
  const productDetails = useSelector((state) => state?.productDetails)
  const { data: session } = useSession();

  // Initialize cartItems from local storage or set to empty array if nothing is found
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("cartItems")
    return localData ? JSON.parse(localData) : []
  })

  const [added, setAdded] = useState(false)
  const addToCart = () => {
    if (!session) {
      // User is not authenticated, prompt for sign-in
      toast.error("Please Register Yourself")
      return;
    }
    else
    {
    const newItem = {
      id: productDetails.products.id,
      title: productDetails.products.title,
      price: productDetails.products.price,
      category: productDetails.products.category,
      description: productDetails.products.description,
      thumbnail: productDetails.products.thumbnail,
      totalQuantity: 1,
    }

    toast.success("Added to Cart Successfully")
    setAdded(true)

    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.title === newItem.title)

    let updatedCartItems
    if (existingItem) {
      // If item exists, update the quantity
      updatedCartItems = cartItems.map((item) =>
        item.title === newItem.title
          ? {...item, quantity: item.quantity + 1}
          : item
      )
    } else {
      // If item doesn't exist, add the new item with quantity 1
      updatedCartItems = [...cartItems, {...newItem, quantity: 1}]
    }

    setCartItems(updatedCartItems)
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems))
  }
}

  return (
    <div>
      <div>
        <h1 className=" font-bold md:text-lg lg:text-xl">
          {productDetails.products?.title}
        </h1>
        <p className="my-2 border-b w-full"></p>

        <p>
          Conditon: <span className="font-bold mx-2 my-2">Brand New</span>
        </p>

        <p className="mt-3 ">
          Quantity{" "}
          <span className="border bg-gray-100 px-5 rounded py-1 mx-2  ">
            {" "}
            1{" "}
          </span>{" "}
          <span className="font-semibold">
            {" "}
            {productDetails.products?.stock} available/{" "}
            <span className="text-red-500">7 Sold</span>
          </span>
        </p>

        <p className="mt-3 border-b w-full"></p>

        <p className="mt-5 ">
          {" "}
          <span className=" text-xl font-bold rounded py-1 mx-2  ">
            {" "}
            AU ${productDetails.products?.price}{" "}
          </span>{" "}
          <span className=""> Buy Now and pay later</span>
        </p>

        <div className="md:flex justify-between mt-5">
          <button className="bg-blue-600 rounded-full w-full md:w-fit px-12 mb-5 md:mb-0 py-3 md:py-1 text-white  font-semibold ">
            Buy Now
          </button>
          <div className="flex flex-col gap-y-4 md:flex-row justify-between gap-x-5">
            <button
              className="bg-blue-200 text-blue-600 px-3 xl:px-8 py-3 md:py-1  font-semibold rounded-full"
              onClick={() => {
                addToCart()
              }}
            >
             {added === true ? <> Added Cart</> :<> Add to Cart</>}
            </button>
            <button className="border text-blue-600 px-3 xl:px-6 py-3 md:py-1 font-semibold rounded-full">
              Add to Watchlist
            </button>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold my-2">
            Additional service available
          </p>
          <div className="flex gap-x-3">
            <input type="checkbox" />
            <p className="text-xs">
              Full Protection For Consoles and Other Household Items from
              XCover.comAU $69.89
            </p>
          </div>
          <p className="text-xs">
            I have read and agreed to the policy terms. The policy is provided
            by XCover.com <br />
            and underwritten by Pacific International Insurance Pty Ltd.[1]
          </p>
        </div>
      </div>
    </div>
  )
}
