import React from 'react'
import Image from "next/image"
import Main from "../assets/main.png"

export default function HomePage() {
    return (
        <div className='flex flex-col lg:flex-row mt-[100px] justify-center items-center align-middle py-6'>
            <div className='flex flex-col md:mx-12 basis-1/3 justify-center items-center'>
                <h1 className='font-bold text-orange-400 text-7xl my-2'>&#x23;freePads</h1>
                <p><button className='shadow-2xl rounded-lg px-4 py-2 text-base my-2 text-orange-400 border-orange-200 hover:text-white hover:bg-orange-500 border-2'>ADVERTISE WITH US</button></p>
            </div>
            <div className='flex flex-col md:mx-4 basis-1/3'>
                <Image src={Main} alt='' height={500} width={500} />
            </div>
            <div className='flex flex-col md:mx-4 basis-1/3 md:text-2xl font-QuickSand text-xl mx-8 my-6 md:my-0 text-orange-500 text-start'>Menstruation is not a
                curse or a sin. It&apos;s a normal
                bodily function that
                deserves to be treated
                with respect and dignity</div>
        </div>
    )
}
