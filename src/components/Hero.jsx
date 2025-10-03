import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ target, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 16); // ~60fps
        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                clearInterval(counter);
                setCount(target);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(counter);
    }, [target, duration]);

    return <span>{count.toLocaleString()}</span>;
};

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#2DCEBF] to-[#2ECE90] overflow-hidden pt-[12vh] px-6 md:px-16 pb-5">
            {/* Background Orbs */}
            <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl top-[-150px] left-[-150px] animate-pulse"></div>
            <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-ping"></div>
            <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl top-[30%] left-[70%] animate-bounce"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl w-full flex flex-col gap-10">
                {/* Row: Heading + Stats */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#dfffe6] to-[#a7ffd1] bg-clip-text text-transparent leading-snug drop-shadow-md">
                            The Fastest Growing Free Forever School Management Software
                        </h1>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-2 gap-6 text-center"
                    >
                        {[
                            { number: 9, label: "Cities" },
                            { number: 80, label: "Schools" },
                            { number: 1280, label: "Teachers" },
                            { number: 11200, label: "Parents" },
                            { number: 31020, label: "Students" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 text-white hover:scale-105 transition-transform duration-300"
                            >
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-baseline justify-center">
                                    <Counter target={item.number} duration={1200} />
                                    <span className="text-lg sm:text-xl md:text-2xl font-bold ml-1">+</span>
                                </h2>
                                <p className="text-sm md:text-base opacity-90">{item.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* para/but */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                    {/* Para */}
                    <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-3xl">
                        <span className="font-semibold text-white">ILMWasooli</span> is the
                        ultimate school management solution designed for both mobile and web
                        platforms. Accessible anytime, anywhere, ILMWasooli simplifies and
                        enhances the management of your educational institution.
                        <br />
                        <span className="font-bold text-white">
                            Let's do ILM ki Wasooli With ILMWasooli.
                        </span>
                    </p>

                    {/* Btn */}
                    <div className="flex gap-4">
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold shadow-md hover:shadow-xl border border-white/30 transition-all"
                        >
                            Watch
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
                        >
                            Demo
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
