"use client"
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white rounded-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <svg className='w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 15.5L5.40989 13.5901C6.75553 12.2445 7.42836 11.5717 8.1572 11.5102C8.52413 11.4792 8.89249 11.5501 9.22167 11.7152C9.87554 12.043 10.2504 12.9175 11 14.6667L11.0534 14.7913C11.3795 15.5522 11.5425 15.9326 11.811 16.0988C12.0197 16.2279 12.2685 16.2759 12.5102 16.2334C12.8212 16.1789 13.1138 15.8862 13.6992 15.3008L13.8123 15.1877C14.5336 14.4664 14.8943 14.1057 15.3032 13.9538C15.7527 13.7867 16.2473 13.7867 16.6968 13.9538C17.1057 14.1057 17.4664 14.4664 18.1877 15.1877L18.9393 15.9394C19.4762 16.4762 20.1641 16.8271 20.9032 16.9505C20.7778 18.2778 20.4898 19.1668 19.8284 19.8282C18.6569 20.9997 16.7712 20.9997 13 20.9997H11C7.22876 20.9997 5.34315 20.9997 4.17157 19.8282C3 18.6566 3 16.771 3 12.9997V10.9997C3 8.16039 3 6.38991 3.5 5.18829V15.5Z" fill="#222222" />
                                <path d="M12 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8284C21 18.6569 21 16.7712 21 13V12" stroke="#222222" stroke-width="2" />
                                <path d="M21 3V2H22V3H21ZM16.6247 7.78087C16.1934 8.12588 15.5641 8.05596 15.2191 7.62469C14.8741 7.19343 14.944 6.56414 15.3753 6.21913L16.6247 7.78087ZM20 8V3H22V8H20ZM21 4H16V2H21V4ZM21.6247 3.78087L16.6247 7.78087L15.3753 6.21913L20.3753 2.21913L21.6247 3.78087Z" fill="#222222" />
                            </svg>
                            <span className="ml-2 text-xl font-bold">MagicPixel</span>
                        </div>
                        {/* Menu for large screens */}
                        <div className="hidden md:flex md:space-x-8 ml-10 items-center">
                            <a href="#" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Product</a>
                            <a href="#" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Solutions</a>
                            <a href="#" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Resources</a>
                            <a href="#" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Company</a>
                            <a href="#" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-700 hover:text-black px-4 py-2 border border-gray-300 rounded-md">Sign In</a>
                        <a href="#" className="bg-black text-white px-4 py-2 rounded-md">Get Started</a>
                    </div>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon for the hamburger menu */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black">Product</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black">Solutions</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black">Resources</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black">Company</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black">Pricing</a>
                        <div className="mt-4 flex space-x-2">
                            <a href="#" className="text-gray-700 hover:text-black px-4 py-2 border border-gray-300 rounded-md w-full text-center">Sign In</a>
                            <a href="#" className="bg-black text-white px-4 py-2 rounded-md w-full text-center">Get Started</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
