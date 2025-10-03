import React from "react";
import { motion } from "framer-motion";
import student from "../assets/student.png";
import admin from "../assets/admin.png";
import parent from "../assets/teacher.png";
import {
    FaUserCheck,
    FaChartLine,
    FaIdCard,
    FaBookOpen,
    FaCalendarAlt,
    FaExclamationCircle,
    FaClipboardList,
    FaUsers,
    FaBus,
    FaMoneyBillWave,
} from "react-icons/fa";

const features = [
    { icon: <FaUserCheck />, title: "Student Attendance" },
    { icon: <FaChartLine />, title: "Result Management" },
    { icon: <FaIdCard />, title: "Student Information" },
    { icon: <FaBookOpen />, title: "Homework" },
    { icon: <FaCalendarAlt />, title: "Planner" },
    { icon: <FaExclamationCircle />, title: "Complaints" },
    { icon: <FaClipboardList />, title: "Result Management" },
    { icon: <FaUserCheck />, title: "Student Attendance" },
    { icon: <FaUsers />, title: "Parent Portal" },
    { icon: <FaBus />, title: "Transport Management" },
    { icon: <FaMoneyBillWave />, title: "Fee Management" },
];

const SchoolManagement = () => {
    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-5xl font-bold mb-16"
                    style={{ color: "#2ECE90" }}
                >
                    Smart School Management
                </motion.h2>

                {/* Center Mobile Images */}
                <div className="relative flex justify-center mb-20">
                    <motion.img
                        src={admin}
                        alt="mobile1"
                        className="w-40 md:w-56 rounded-xl shadow-xl z-20"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.img
                        src={parent}
                        alt="mobile2"
                        className="w-40 md:w-56 rounded-xl shadow-xl mx-[-30px] z-30"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 1.2 }}
                    />
                    <motion.img
                        src={student}
                        alt="mobile3"
                        className="w-40 md:w-56 rounded-xl shadow-xl z-20"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 1 }}
                    />  
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                        >
                            <div className="text-3xl text-[#2ECE90] mb-3">{feature.icon}</div>
                            <h3 className="text-sm md:text-base font-semibold text-gray-700">
                                {feature.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SchoolManagement;
