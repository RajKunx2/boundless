import React from 'react'
import Drop from "../assets/drop.png"
import Orange from "../assets/orange.png"
import Piggy from "../assets/piggy.png"
import Image from "next/image"
import How from "./How"

export default function Features() {
    return (
        <>

            <div className='flex flex-col align-middle justify-center items-center mx-4 md:my-8'>
                <div className='flex flex-col lg:flex-row py-4 h-auto align-middle pt-6 w-fit'>
                    <div className='w-full px-2 text-2xl mx-4 py-auto justify-center align-middle font-NotoSerif font-semibold text-orange-500'>
                        <div className=''>Out of the 355 millions mensurating women only 46.2 million have access to sanitary napkins in India, that is only 12% of the total mensurating women.</div>
                        <div className='flex justify-end my-3'><div>Source: Ministry Of Health</div></div>
                    </div>
                </div>
                <How />
                <div className='flex md:flex-row flex-col align-middle justify-center items-center mx-4 md:my-6'>

                    <div className='flex flex-col basis-1/2 items-center align-middle justify-center md:mx-8'>
                        <Image src={Drop} alt='' width={200} height={200} />
                        <h1 className='text-center text-lg my-2 font-bold text-orange-400'>Sanitary Pads</h1>
                        <p className='text-center text-base text-slate-500'>We provide everyone with safe sanitary pads</p>
                    </div>
                    <div className='flex flex-col basis-1/2 items-center justify-center align-middle md:mx-8'>
                        <Image src={Orange} alt='' width={200} height={200} />
                        <h1 className='text-center text-lg my-2 font-bold text-orange-400'>Recyclable</h1>
                        <p className='text-center text-base text-slate-500'>We use Biodegradable and Recyclable Pads</p>
                    </div>
                </div>

                <div className='flex flex-col basis-1/2 items-center my-6'>
                    <Image src={Piggy} alt='' width={200} height={200} />
                    <h1 className='text-center text-lg my-2 font-bold text-orange-400'>Save Money</h1>
                    <p className='text-center text-base text-slate-500'>We help you cut your CAC by 40%</p>
                </div>
            </div></>

    )
}
