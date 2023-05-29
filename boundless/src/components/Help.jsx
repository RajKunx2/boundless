"use client"
import React from 'react'
import Helppic from "../assets/help.jpg"
import Image from "next/image"
import Arrow from "../assets/arrow.png"
import { motion } from "framer-motion"

export default function Help() {
    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row align-middle w-full'>
                <div className='flex lg:flex-row flex-col-reverse w-full h-auto'>
                    <div className='flex lg:basis-1/2 flex-col text-black align-middle mx-10 justify-center'>
                        <div className='text-3xl lg:text-[52px] lg:my-6 ml-8 text-[#FF7F00] font-Lora mt-6 lg:leading-normal'>How Boundless wasnt to help around 300 million mensurating female population denied of basic sanitary needs?</div>
                    </div>
                    <div className='flex lg:basis-1/2 justify-center align-middle mx-8'>
                        <Image src={Helppic} height={400} width={400} alt='' className='z-10' />
                    </div>
                </div>
            </div>
            <motion.div
                animate={{
                    y: [-6, 6],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }} className="w-full flex justify-center align-middle mt-8">
                <Image src={Arrow} alt='' height={40} width={40} />
            </motion.div>
        </>

    )
}
