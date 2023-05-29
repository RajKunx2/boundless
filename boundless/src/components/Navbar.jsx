"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import Image from "next/image"
import Logo from "../assets/logo.png"
function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full fixed top-0 left-0 right-0 z-20 bg-white">
                <div className="justify-between px-4 mx-auto width-screen lg:items-center lg:flex">
                    <div>
                        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                            {/* LOGO */}
                            <Link href="/">
                                <Image src={Logo} width={90} height={66.8} alt='s' className='mx-3'/>
                            </Link>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="lg:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    <Hamburger toggled={navbar} toggle={setNavbar} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">
                                <li className="text-base text-black py-2 lg:px-6 text-center border-b-2 lg:border-b-0 font-semibold hover:cursor-pointer  hover:bg-[#FF7F00]  border-[#FF7F00]  lg:hover:text-[#FF7F00] lg:hover:bg-transparent mx-2">
                                    <Link href="#home" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="text-base text-black py-2 px-6 text-center  border-b-2 lg:border-b-0 font-semibold hover:cursor-pointer  hover:bg-[#FF7F00]  border-[#FF7F00]  lg:hover:text-[#FF7F00] lg:hover:bg-transparent mx-2">
                                    <Link href="#ourstory" onClick={() => setNavbar(!navbar)}>
                                        Our Story
                                    </Link>
                                </li>
                                <li className="ext-base text-black py-2 px-6 text-center  border-b-2 lg:border-b-0 font-semibold  hover:cursor-pointer hover:bg-[#FF7F00]  border-[#FF7F00]  lg:hover:text-[#FF7F00] lg:hover:bg-transparent mx-2">
                                    <Link href="#whatwedo" onClick={() => setNavbar(!navbar)}>
                                        What We Do
                                    </Link>
                                </li>
                                <li className="text-base text-black py-2 px-6 text-center  border-b-2 lg:border-b-0 font-semibold hover:cursor-pointer  hover:bg-[#FF7F00]  border-[#FF7F00]  lg:hover:text-[#FF7F00] lg:hover:bg-transparent mx-2">
                                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                                        Blog
                                    </Link>
                                </li>
                                <li className="text-base lg:text-white text-[#FF7F00] py-3 px-6 text-center lg:bg-[#FF7F00] font-semibold hover:cursor-pointer lg:rounded-lg border-b-2 lg:border-b-0 border-[#FF7F00] lg:border-none hover:text-white  hover:bg-[#de7811] h-auto flex justify-center mx-2 align-middle ">
                                    <Link href="#getinvolved" onClick={() => setNavbar(!navbar)}>
                                        Get Involved
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;