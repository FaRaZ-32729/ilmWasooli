import React from "react";
import { motion } from "framer-motion";
import image from "../assets/download1.png";
import image1 from "../assets/download2.png";
import image2 from "../assets/download3.png";
import bg from "../assets/downloadbg.jpg";

const DownloadSection = () => {
    const images = [image, image1, image2];

    return (
        <section
            className="relative w-full bg-fixed py-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
                {/* Left Column */}
                <div className="text-white z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Download Now and Get <br /> Start Immediately!
                    </h2>
                    <p className="text-lg mb-8">
                        Transform Your School, Madrasa, and Institute Today!
                    </p>
                    <button
                        className="px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
                        style={{ backgroundColor: "#2ECE90", color: "#fff" }}
                    >
                        Download
                    </button>
                </div>

                {/* Right Column - Slideshow */}
                <div className="relative w-full h-[500px] flex justify-center items-center">
                    {images.map((img, index) => (
                        <motion.img
                            key={index}
                            src={img}
                            alt="Download Preview"
                            className="absolute w-60 md:w-72 rounded-xl shadow-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 2, 
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
