import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const faqs = {
    english: [
        {
            question: "What is IlmWasooli?",
            answer:
                "IlmWasooli is a comprehensive school management system that streamlines the daily operations of educational institutions, offering dedicated portals for students, parents, teachers, and administrators.",
        },
        {
            question: "What features are available in the Student Portal?",
            answer:
                "The Student Portal provides access to academic schedules, homework assignments, attendance records, grades, and notifications. Students can also interact with teachers and track their progress.",
        },
        {
            question: "How does the Parent Portal work?",
            answer:
                "The Parent Portal allows parents to monitor their child's performance, view attendance reports, communicate with teachers, and stay updated on school events and fees.",
        },
        {
            question: "What functionalities are available for teachers?",
            answer:
                "Teachers can manage class schedules, upload assignments, mark attendance, submit grades, and communicate directly with students and parents via the portal.",
        },
        {
            question: "Is there a mobile app for IlmWasooli?",
            answer:
                "Yes, IlmWasooli offers a mobile app for Android and iOS, allowing users to access their portals on the go.",
        },
        {
            question: "How secure is IlmWasooli?",
            answer:
                "IlmWasooli prioritizes data security by implementing encryption, secure logins, and role-based access controls to ensure user information is protected at all times.",
        },
    ],
    urdu: [
        {
            question: "ILMWasooli کیا ہے؟",
            answer:
                "ILMWasooli ایک جامع اسکول مینجمنٹ سسٹم ہے جو تعلیمی اداروں کے روزانہ کے آپریشنز کو آسان بناتا ہے، اس میں طلباء، والدین، اساتذہ اور منتظمین کے لیے خصوصی پورٹلز فراہم کیے جاتے ہیں۔",
        },
        {
            question: "اسٹوڈنٹ پورٹل میں کون سی خصوصیات دستیاب ہیں؟",
            answer:
                "اسٹوڈنٹ پورٹل میں تعلیمی شیڈول، ہوم ورک کی تفصیلات، حاضری کے ریکارڈ، گریڈز اور نوٹیفیکیشنز تک رسائی فراہم کی جاتی ہے۔ طلباء اساتذہ کے ساتھ بات چیت کرسکتے ہیں اور اپنی کارکردگی کو ٹریک کرسکتے ہیں۔",
        },
        {
            question: "والدین کا پورٹل کیسے کام کرتا ہے؟",
            answer:
                "والدین کا پورٹل والدین کو ان کے بچے کی کارکردگی کو مانیٹر کرنے، حاضری کی رپورٹیں دیکھنے، اساتذہ سے بات چیت کرنے اور اسکول کے ایونٹس اور فیسوں پر اپ ڈیٹ رہنے کی اجازت دیتا ہے۔",
        },
        {
            question: "اساتذہ کے لیے کون سی فعالیتیں دستیاب ہیں؟",
            answer:
                "اساتذہ کلاس شیڈولز کو منظم کرسکتے ہیں، اسائنمنٹس اپ لوڈ کرسکتے ہیں، حاضری کی نشاندہی کرسکتے ہیں، گریڈز جمع کرسکتے ہیں اور پورٹلز کے ذریعے طلباء اور والدین سے براہ راست بات چیت کرسکتے ہیں۔",
        },
        {
            question: "ILMWasooli کے لیے کیا کوئی موبائل ایپ دستیاب ہے؟",
            answer:
                "جی ہاں، ILMWasooli ایک موبائل ایپ پیش کرتا ہے جو اینڈرائیڈ اور آئی او ایس کے لیے دستیاب ہے، جس سے صارفین اپنے پورٹلز کو چلتے پھرتے تک رسائی حاصل کرسکتے ہیں۔",
        },
        {
            question: "ILMWasooli کتنی محفوظ ہے؟",
            answer:
                "ILMWasooli صارفین کی معلومات کی حفاظت کو یقینی بنانے کے لیے انکرپشن، محفوظ لاگ ان، اور رول بیسڈ ایکسیس کنٹرول کو نافذ کرتا ہے۔",
        },
    ],
};

const FAQs = () => {
    const [active, setActive] = useState(0);
    const [language, setLanguage] = useState("english");

    const toggleLanguage = () => {
        setLanguage(language === "english" ? "urdu" : "english");
        setActive(0); 
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Banner */}
            <section className="relative bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] text-white py-28">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-4xl mx-auto px-6"
                >
                    <h1 className="text-6xl font-extrabold drop-shadow-lg mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        Quick answers to the most common questions about WasooliPK
                    </p>
                </motion.div>

                {/* Floating decorative circles */}
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

            {/* Language Toggle Button BELOW Banner */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={toggleLanguage}
                    className="px-6 py-2 bg-[#2DCEBF] text-white rounded-full font-semibold hover:bg-[#2ECE90] transition-all"
                >
                    {language === "english" ? "Switch to Urdu" : "Switch to English"}
                </button>
            </div>

            {/* FAQ Content */}
            <section className="relative max-w-[1400px] mx-auto px-8 py-24">
                {/* Background accents */}
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] rounded-full blur-3xl opacity-20"></div>

                {/* FAQ Layout */}
                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    {/* Left Column - Questions */}
                    <div className="space-y-4">
                        {faqs[language].map((faq, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                onClick={() => setActive(index)}
                                className={`w-full text-left px-6 py-4 rounded-xl flex items-center justify-between shadow-sm transition ${active === index
                                    ? "bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] text-white font-semibold shadow-lg"
                                    : "bg-white text-gray-800 hover:shadow-md"
                                    }`}
                            >
                                {faq.question}
                                <FaChevronRight
                                    className={`ml-3 transition ${active === index ? "rotate-90" : ""
                                        }`}
                                />
                            </motion.button>
                        ))}
                    </div>

                    {/* Right Column - Answer */}
                    <div className="relative bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4 }}
                                className="text-gray-700 leading-relaxed text-lg"
                            >
                                {faqs[language][active].answer}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;
