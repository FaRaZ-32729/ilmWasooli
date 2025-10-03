import React from "react";
import { motion } from "framer-motion";
import {
    FaMapMarkedAlt,
    FaFingerprint,
    FaIdCard,
    FaBarcode,
    FaFileInvoiceDollar,
    FaBell,
    FaSms,
    FaWhatsapp,
    FaEnvelope,
    FaMoneyCheckAlt,
} from "react-icons/fa";

const features = [
    { icon: <FaMapMarkedAlt />, title: "By Geo Location" },
    { icon: <FaFingerprint />, title: "By Fingerprint" },
    { icon: <FaIdCard />, title: "By RFID" },
    { icon: <FaBarcode />, title: "By Barcode" },
    { icon: <FaFileInvoiceDollar />, title: "One Bill" },
    { icon: <FaBell />, title: "By Push Notification" },
    { icon: <FaSms />, title: "By Branded Message" },
    { icon: <FaWhatsapp />, title: "By Whatsapp" },
    { icon: <FaEnvelope />, title: "By Email" },
    { icon: <FaMoneyCheckAlt />, title: "Quick Pay" },
];

const ConnectivitySection = () => {
    return (
        <section className="relative w-full py-20 bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] overflow-hidden">
            {/* Floating Animated Image */}
            <motion.img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Connectivity Illustration"
                className="absolute right-10 top-10 w-32 md:w-40 opacity-80"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                    Designed for Effortless Connectivity
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-14 leading-relaxed"
                >
                    ILMWasooli connects with third-party software, applications, and
                    devices to simplify management tasks and ensure efficient operations.
                </motion.p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/20 text-center text-white hover:shadow-2xl"
                        >
                            <div className="text-4xl mb-4 text-white">{feature.icon}</div>
                            <h3 className="font-semibold">{feature.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConnectivitySection;
