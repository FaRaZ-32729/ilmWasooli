import React, { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { BiX } from "react-icons/bi";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScroll
                ? "backdrop-blur-lg bg-white/80 shadow-md"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center h-[12vh]">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="ILMWasooli Logo"
                        className="h-10 md:h-14 w-auto drop-shadow-md"
                    />
                </NavLink>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-x-8 font-medium text-gray-700">
                    <li>
                        <NavLink
                            to="/"
                            className="relative hover:text-[#2ECE90] transition-colors duration-300 
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#2ECE90] 
              after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/faqs"
                            className="relative hover:text-[#2ECE90] transition-colors duration-300 
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#2ECE90] 
              after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                        >
                            FAQs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="relative hover:text-[#2ECE90] transition-colors duration-300 
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#2ECE90] 
              after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/request-demo"
                            className="bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] text-white px-5 py-2 
              rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Request A Demo
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="text-3xl text-[#2ECE90] md:hidden"
                    onClick={toggleMenu}
                >
                    {showMenu ? <BiX /> : <RiMenuFill />}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 left-0 h-screen w-[70%] bg-gradient-to-br from-[#2DCEBF] to-[#2ECE90] 
          text-white flex flex-col gap-y-8 p-10 transform transition-transform duration-500 md:hidden 
          ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
                >
                    {/* Close Button */}
                    <button
                        className="self-end text-3xl mb-6"
                        onClick={toggleMenu}
                    >
                        <BiX />
                    </button>

                    <NavLink
                        to="/"
                        onClick={toggleMenu}
                        className="text-lg font-semibold hover:pl-2 transition-all duration-300"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/faqs"
                        onClick={toggleMenu}
                        className="text-lg font-semibold hover:pl-2 transition-all duration-300"
                    >
                        FAQs
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={toggleMenu}
                        className="text-lg font-semibold hover:pl-2 transition-all duration-300"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/request-demo"
                        onClick={toggleMenu}
                        className="bg-white text-[#2ECE90] md:px-5 py-2 rounded-full text-center font-semibold 
            shadow-md hover:bg-gray-100 transition-all duration-300 w-full md:w-auto"
                    >
                        Request A Demo
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
