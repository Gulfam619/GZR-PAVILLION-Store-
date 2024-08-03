import Link from "next/link"
import React from "react"

const Footer = () => {
    const data = [
        {
            item: "eBay Deals",
        },
        {
            item: "eBay Mobile",
        },
        { 
            item: "eBay for Chariy"
        },
        {
             item: "eBay Store" 
        },
        { 
            item: "Get Finder"
        },
        { 
            item: "Holidays and  Seasonal Occasions" 
        },
    ]

    const Help = [
        {
            item: "eBay Returns"
        },
        {
            item: "eBay Money Back Guaramtee",
        },
    ]

    const Community = [
        {
            item: "Announcements"
        },
        {
            item: "Discussion Forum",
        },
        {
            item: "Answer Centre",
        },
        {
            item: "Groups",
        },
    ]

    return (
        <div className=" border-t-2 bg-white h-[310px] w-full flex flex-col items-center justify-between p-4">
            <div className=" flex flex-row flex-wrap gap-16 sm:pl-0 pl-6  w-full justify-between  ">
                {/* Buy Div */}
                <div className="  pt-6">
                    <h1 className=" text-[#616161] text-[16px] font-bold">Buy</h1>
                    {data.map((items, index) => {
                        return (
                            <div
                                className="flex flex-col pb-2 text-[#616161] text-[12px]"
                                key={index}
                            >
                                {items.item}
                            </div>
                        )
                    })}
                </div>

                {/* Sell Div */}
                <div className="  pt-6">
                    <h1 className=" text-[#616161] text-[16px] font-bold">Sell</h1>
                    {data.map((items, index) => {
                        return (
                            <div
                                className="flex flex-col pb-2 text-[#616161] text-[12px]"
                                key={index}
                            >
                                {items.item}
                            </div>
                        )
                    })}
                </div>

                {/* Stay Connected Div */}
                <div className="  pt-6">
                    <h1 className=" text-[#616161] text-[16px] font-bold">
                        Stay Connected
                    </h1>
                    {data.map((items, index) => {
                        return (
                            <div
                                className="flex flex-col pb-2 text-[#616161] text-[12px]"
                                key={index}
                            >
                                {items.item}
                            </div>
                        )
                    })}
                </div>
                {/* About eBay Div */}
                <div className="  pt-6">
                    <h1 className=" text-[#616161] text-[16px] font-bold">About eBay</h1>
                    {data.map((items, index) => {
                        return (
                            <div
                                className="flex flex-col pb-2 text-[#616161] text-[12px]"
                                key={index}
                            >
                                {items.item}
                            </div>
                        )
                    })}
                </div>

                {/* Help and Community */}
                <div className="  pt-6">
                    <h1 className=" text-[#616161] text-[16px] font-bold">Help</h1>
                    {Help.map((items, index) => {
                        return (
                            <div
                                className="flex flex-col pb-2 text-[#616161] text-[12px]"
                                key={index}
                            >
                                {items.item}
                            </div>
                        )
                    })}
                    <h1 className=" text-[#616161] text-[16px] font-bold mt-5">Community</h1>
                    {Community.map((items, index) => {
                        return (
                            <div
                                className="flex flex-col pb-2 text-[#616161] text-[12px]"
                                key={index}
                            >
                                {items.item}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=" inline-flex">
            <p className=" font-semibold text-center  sm:text-[16px] text-[8px]">Copyright 1995-2024 eBay Inc. All Right Reserved. <Link href='#'>User Agreement</Link> , <Link href='#'>Privacy</Link> , <Link href='#'>Payment Terms of Use</Link> , <Link href='#'>Cookies</Link> and <Link href='#'>AdChoice</Link></p>
            </div>
        </div>
    )
}

export default Footer
