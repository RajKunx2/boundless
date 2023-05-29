import React from 'react'
import Heropic from "../assets/hero.png"
import Image from "next/image"
import Flower from "../assets/flowers.png"
import Shirt from "../assets/shirt.png"

export default function Hero() {
    return (
        <>
            <div className='flex lg:flex-row flex-col-reverse w-screen h-auto'>
                <div className='flex  lg:basis-1/2 flex-col text-black align-middle mx-10  lg:py-16'>
                    <div className='text-4xl  lg:text-7xl  lg:my-6  lg:mt-[100px] text-[#FF7F00] font-Lora'>Join our mission to end the stigma around periods</div>
                    <div className=' lg:text-2xl text-lg my-4 font-NotoSerif'>Take the first step towards creating a world where menstrual hygine is a basic human right. Start donating today!</div>
                    <div className='my-4 font-NotoSerif text-lg'><button className='w-auto h-auto bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg'>Get Started</button></div>
                </div>
                <div className='flex lg:basis-1/2 justify-center align-middle mx-8  lg:py-16 pt-8'>
                    <Image src={Heropic} height={600} width={600} alt='' className='z-10' />
                    {/* <Image src={Flower} height={360} width={360} alt='' className='absolute top-[100px]' /> */}
                </div>
            </div>
            <div className='flex flex-col  lg:flex-row bg-orange-200 py-4 h-auto align-middle pt-6 w-fit'>
                <div className='flex align-middle'> <Image src={Shirt} alt='' height={148} width={148} className='mx-10 px-4' /></div>
                <div className='w-full px-2 text-2xl mx-4 py-auto justify-center align-middle font-NotoSerif font-semibold text-orange-500'>
                    <div className=''>Out of the 355 millions mensurating women only 46.2 million have access to sanitary napkins in India, that is only 12% of the total mensurating women.</div>
                    <div className='flex justify-end my-3'><div>Source: Ministry Of Health</div></div>
                </div>

            </div>
        </>
    )
}
