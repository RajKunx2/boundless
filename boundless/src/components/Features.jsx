import React from 'react'
import Drop from "../assets/drop.png"
import Orange from "../assets/orange.png"
import Piggy from "../assets/piggy.png"
import Image from "next/image"

export default function Features() {
    return (
        <div className='flex flex-col align-middle justify-center items-center mx-4 md:my-8'>
            <div className='flex md:flex-row flex-col align-middle justify-center items-center mx-4 md:my-6'>
                <div className='flex flex-col basis-1/2 items-center justify-center align-middle md:mx-8'>
                    <Image src={Orange} alt='' width={200} height={200} />
                    <h1 className='text-center text-lg my-2 font-bold text-orange-400'>Eco-friendly</h1>
                    <p className='text-center text-base text-slate-500'>Our goal is to be net positive by 2030</p>
                </div>
                <div className='flex flex-col basis-1/2 items-center align-middle justify-center md:mx-8'>
                    <Image src={Drop} alt='' width={200} height={200} />
                    <h1 className='text-center text-lg my-2 font-bold text-orange-400'>Premium Water</h1>
                    <p className='text-center text-base text-slate-500'>FreeWater is natural spring water and all of our containers are BPA free</p>
                </div>
            </div>
            <div className='flex flex-col basis-1/2 items-center my-6'>
                <Image src={Piggy} alt='' width={200} height={200} />
                <h1 className='text-center text-lg my-2 font-bold text-orange-400'>Save Money</h1>
                <p className='text-center text-base text-slate-500'>Bottled water costs 2,000 times the price of tap water</p>
            </div>
        </div>
    )
}
