import { useState } from "react";
import Image from 'next/image';
import logo from '../public/logo.jpg';


export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-[#CAE4FF] shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="#home" className="flex">
                            <Image alt="logo" src={logo} className="w-[10%] sm:w-[10%] lg:w-[8%] rounded-[50%] mr-4"/>
                            <h2 className="text-xl font-bold text-black flex justify-center items-center">AKSHAR INTERNATIONAL</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                <div className="w-full">
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black font-extrabold bg-[#CAE4FF] p-2 rounded-lg hover:text-blue-600">
                                <a href="#home">Home</a>
                            </li>
                            <li className="text-black font-extrabold bg-[#CAE4FF] p-2 rounded-lg hover:text-blue-600">
                                <a href="#products">Products</a>
                            </li>
                            <li className="text-black font-extrabold bg-[#CAE4FF] p-2 rounded-lg hover:text-blue-600">
                                <a href="#about">About US</a>
                            </li>
                            <li className="text-black font-extrabold bg-[#CAE4FF] p-2 rounded-lg hover:text-blue-600">
                                <a href="#footer">Contact US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}