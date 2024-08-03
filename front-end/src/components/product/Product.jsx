"use client"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../common/ProductCard"
import { fetchProducts } from "@/store/product/productThunk"
import ProductSkeleton from "@/components/common/ProductSkeleton"
import Link from "next/link"
const Product = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state?.product)
  const searchProducts = useSelector((state) => state?.searchProduct)
  const productLoader = useSelector((state) => state?.product)
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(25)
  console.log("Searched Products Are here", searchProducts)
  useEffect(() => {
    setLoading(true)
    dispatch(fetchProducts(limit))
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [limit])

  // Handling Logic of Load More
  const handleMore = () => {
    setLimit(limit + 50);
  }

  const handleProductDetails = (id) => {
    // dispatch(fetchProductDetails(id));

    if (id) {
      localStorage.setItem("productDetailsId", id)
    }
  }

  const handleRefresh = () => {
    location.reload();
  }

  return (
    <div className=" pb-8">

      {loading === true ? (
        <div className="sm:mx-12 mx-1   grid xl:grid-cols-4 gap-y-14  2xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 p-2 place-content-center place-item-center ">
          {Array.from({ length: limit }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>

          {searchProducts?.searchProducts?.products?.length === 0 && productLoader === false ? (<div className="w-full h-[37vh] flex flex-col justify-center items-center"> <button className=" text-[26px] text-white font-semibold p-3 border-none rounded-xl" onClick={handleRefresh}>Click to Reload
          </button></div>) :
            (<div className="  sm:mx-12 mx-1   grid xl:grid-cols-4 gap-y-14  2xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 gap-x-4 p-2 place-content-center place-item-center">
              {searchProducts?.searchProducts?.products?.length <= 30 ?
                <>
                  {searchProducts?.searchProducts?.products?.map((item, index) => {
                    return (
                      <Link href="/product-details">
                        <div
                          className=" cursor-pointer  transform-gpu transition-transform hover:scale-105"
                          key={index}
                          onClick={() => {
                            handleProductDetails(item.id)
                          }}
                        >
                          <ProductCard
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            stocks={item.stock}
                            thumbnail={item.thumbnail}
                            rating={item.rating}
                            category={item.category}
                          />
                        </div>
                      </Link>

                    )
                  })}
                </>
                :
                <>
                  {products?.products?.map((item, index) => {
                    return (
                      <Link href="/product-details">
                        <div
                          className=" cursor-pointer  transform-gpu transition-transform hover:scale-105"
                          key={index}
                          onClick={() => {
                            handleProductDetails(item.id)
                          }}
                        >
                          <ProductCard
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            stocks={item.stock}
                            thumbnail={item.thumbnail}
                            rating={item.rating}
                            category={item.category}
                          />
                        </div>
                      </Link>

                    )
                  })}
                </>
              }
            </div>)
          }
          {/* Load More Button */}
          {products?.products?.length !== 0 ? (
            <div className="w-full flex justify-center">
              <button
                onClick={() => { handleMore() }}
                className="px-6 py-2 rounded-xl custom-gradient text-white font-bold mt-3"
              >
                {loading ? "Loading... " : "Load More"}
              </button>
            </div>)
            : ""}
        </>
      )}

      {/* <button onClick={(e)=>{handleUpdate(e)}}>Click to Update</button> */}
    </div>
  )
}

export default Product
