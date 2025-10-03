import React from "react";
import { motion } from "framer-motion";
import believe from "../assets/believe.jpg";
import laptop from "../assets/laptop.jpg";
import {
    FaMobile,
    FaDesktop,
    FaPalette,
    FaHeadset,
    FaBullhorn,
    FaUsers,
    FaEye,
    FaHeart,
    FaHandshake,
    FaLightbulb,
    FaCode,
    FaCrosshairs,
} from "react-icons/fa";

const About = () => {
    const services = [
        { icon: FaCode, title: "Web Design & Development" },
        { icon: FaMobile, title: "Android / iOS Mobile Apps" },
        { icon: FaDesktop, title: "Application Development" },
        { icon: FaDesktop, title: "Desktop Software Solutions" },
        { icon: FaPalette, title: "Graphic Designing" },
        { icon: FaHeadset, title: "Support Services" },
        { icon: FaBullhorn, title: "Digital Marketing" },
    ];

    const projects = [
        "Pharmaceutical Marketing Software",
        "Clinic Management System",
        "Union Management System",
        "Wasoolipk ERP",
        "Help Desk Management System",
        "Bookshop Management System",
        "Gym Management System",
        "Event Management System",
        "School Management System",
        "Marketing ERP",
    ];

    const beliefs = [
        {
            icon: FaHandshake,
            title: "Building Long-Lasting Relationships",
            description:
                "We value meaningful collaboration and mutual growth with our clients.",
        },
        {
            icon: FaUsers,
            title: "Working Closely with People",
            description:
                "Our teams, clients, and partners are the heart of our success.",
        },
        {
            icon: FaLightbulb,
            title: "Creative Problem Solvers",
            description:
                "Every challenge is an opportunity to innovate and move forward.",
        },
        {
            icon: FaHeart,
            title: "Passion & Empathy",
            description:
                "We treat everyone with warmth and respect, which reflects in our work.",
        },
    ];

    // Split projects into two halves
    const mid = Math.ceil(projects.length / 2);
    const leftProjects = projects.slice(0, mid);
    const rightProjects = projects.slice(mid);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] text-white py-28">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-4xl mx-auto px-6"
                >
                    <h1 className="text-6xl font-extrabold drop-shadow-lg mb-6">
                        Logics Labs
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        Since 2016, we’ve been helping businesses and institutions thrive
                        with creative IT solutions, powerful apps, and innovative
                        technologies that transform ideas into impactful results.
                    </p>
                </motion.div>

                {/* Floating circles */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute w-32 h-32 bg-white/10 rounded-full top-10 left-10"
                />
                <motion.div
                    animate={{ y: [0, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="absolute w-40 h-40 bg-white/10 rounded-full bottom-10 right-10"
                />
            </section>

            {/* Services - Infinite Marquee */}
            <section className="py-20 px-6 bg-gray-50 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    <span className="bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] bg-clip-text text-transparent">
                        Our Services
                    </span>
                </motion.h2>

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 25,
                            ease: "linear",
                        }}
                    >
                        {[...services, ...services].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.08, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="min-w-[250px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#2DCEBF] to-[#2ECE90] rounded-xl flex items-center justify-center mb-4">
                                    <service.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="font-semibold text-gray-800 text-center">
                                    {service.title}
                                </h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-6 bg-white">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] text-white p-10 shadow-2xl"
                >
                    <FaEye className="text-5xl mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                    <p className="text-lg text-white/90">
                        We envision an IT ecosystem where technology is abundant, accessible
                        and empowering businesses, schools, and institutions to achieve
                        excellence.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl bg-gray-50 p-10 shadow-xl border"
                >
                    <FaCrosshairs className="text-5xl text-[#2ECE90] mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-gray-700 text-lg">
                        Our mission is to deliver innovative solutions with top quality and
                        services at affordable costs while nurturing long-lasting client
                        relationships.
                    </p>
                </motion.div>
            </section>

            {/* Projects - Two Columns (Half & Half) */}
            <section className="py-20 px-6 bg-gray-50">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    <span className="bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] bg-clip-text text-transparent">
                        Our Projects
                    </span>
                </motion.h2>

                <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="relative border-l-4 border-[#2ECE90] pl-8 space-y-10">
                        {leftProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-5 top-1 w-4 h-4 bg-[#2ECE90] rounded-full"></div>
                                <p className="text-lg text-gray-700">{project}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="relative border-l-4 border-[#2ECE90] pl-8 space-y-10">
                        {rightProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-5 top-1 w-4 h-4 bg-[#2ECE90] rounded-full"></div>
                                <p className="text-lg text-gray-700">{project}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beliefs with Background */}
            <section
                className="relative py-20 px-6 bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${believe})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-bold text-center mb-16"
                    >
                        <span className="bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] bg-clip-text text-transparent">
                            We Believe
                        </span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {beliefs.map((belief, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
                            >
                                <div className="flex gap-4 items-start">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#2DCEBF] to-[#2ECE90] rounded-2xl flex items-center justify-center">
                                        <belief.icon className="text-white text-2xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-white">
                                            {belief.title}
                                        </h4>
                                        <p className="text-white/90">{belief.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
