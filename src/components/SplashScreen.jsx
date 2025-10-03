import React, { useEffect } from "react";
import logo from "../assets/logo.png";

const SplashScreen = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish(); 
        }, 2500); 

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <img src={logo} alt="Logo" className="w-40 md:w-60 animate-pulse" />
        </div>
    );
};

export default SplashScreen;
