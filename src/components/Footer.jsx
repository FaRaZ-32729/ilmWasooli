import React from "react";
import { NavLink } from "react-router"; 
import logo from "../assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full shadow-[0_-4px_10px_rgba(0,0,0,0.1)] ">
            <div className="max-w-[1400px] mx-auto px-10 py-5 grid md:grid-cols-2 gap-10 ">
                {/* Left Column */}
                <div className="flex flex-col items-center gap-4">
                    <img src={logo} alt="Logo" className="w-32" />
                    <div className="flex gap-4 text-[#2ECE90] text-xl">
                        <a href="#"  rel="noreferrer" className="hover:scale-110 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#"  rel="noreferrer" className="hover:scale-110 transition">
                            <FaLinkedinIn />
                        </a>
                        <a href="#"  rel="noreferrer" className="hover:scale-110 transition">
                            <FaWhatsapp />
                        </a>
                        <a href="#"  rel="noreferrer" className="hover:scale-110 transition">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <NavLink
                        to="/"
                        className="text-gray-700 hover:text-[#2ECE90] font-medium"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="text-gray-700 hover:text-[#2ECE90] font-medium"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/faqs"
                        className="text-gray-700 hover:text-[#2ECE90] font-medium"
                    >
                        FAQ
                    </NavLink>
                    <NavLink
                        to="/request-demo"
                        className="text-gray-700 hover:text-[#2ECE90] font-medium"
                    >
                        Request a Demo
                    </NavLink>
                </div>
            </div>

            {/* Gradient Divider */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90]"></div>

            {/* Bottom Text */}
            <div className="text-center py-4 text-gray-600 text-sm">
                © {new Date().getFullYear()} All rights reserved by{" "}
                <span className="font-semibold text-[#2ECE90]">Logics Lab</span>
            </div>
        </footer>
    );
};

export default Footer;
