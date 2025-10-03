import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaMosque, FaUniversity } from "react-icons/fa";
import bg from "../assets/cardbg.jpg"

const HomeCards = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage : `url(${bg})`}}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl text-center px-6 py-20">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.5 }} 
                    className="text-3xl md:text-5xl font-bold leading-snug drop-shadow-lg"
                    style={{ color: "#2ECE90" }}
                >
                    ILMWasooli – Educational Administration Solution
                </motion.h1>

                {/* Cards Section */}
                <div className="mt-14 grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all"
                    >
                        <FaSchool className="text-5xl text-[#2ECE90] mx-auto mb-6" />
                        <h3 className="text-xl font-semibold text-white mb-4">
                            School Management System
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            ILMWasooli is developed for schools, seamlessly integrating all
                            administrative departments and providing direct communication
                            channels between parents, students, and staff.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all"
                    >
                        <FaMosque className="text-5xl text-[#2ECE90] mx-auto mb-6" />
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Madrasa Management System
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            ILMWasooli is designed specifically for Madrasas, addressing the
                            unique challenges and administrative hurdles faced by Madrasa
                            management.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl transition-all"
                    >
                        <FaUniversity className="text-5xl text-[#2ECE90] mx-auto mb-6" />
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Institute Management System
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            ILMWasooli simplifies institute administration by streamlining
                            complex procedures, offering user-friendly features designed to
                            meet the specific needs of educational institutions.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeCards;
