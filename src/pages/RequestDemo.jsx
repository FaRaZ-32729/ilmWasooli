import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

const RequestDemo = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20">
            {/* New Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2ECE90] mb-4">
                    Ilm Wasooli
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Row 8, Block C N.C.E.S.H Gulshan-e-Iqbal Block 10-A, Karachi
                </p>
                <div className="w-40 h-1 bg-[#2DCEBF] mx-auto mt-4 rounded"></div>
            </div>

            {/* Form Section */}
            <div className="bg-white shadow-2xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div className="space-y-6">
                    {/* Sublocality */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Sublocality
                        </label>
                        <input
                            type="text"
                            placeholder="Enter sublocality"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2DCEBF] focus:ring-2 focus:ring-[#2DCEBF]/40 transition-all"
                        />
                    </div>

                    {/* Name */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter full name"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2DCEBF] focus:ring-2 focus:ring-[#2DCEBF]/40 transition-all"
                        />
                    </div>

                    {/* Address */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Address
                        </label>
                        <textarea
                            rows="3"
                            placeholder="Enter address"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:border-[#2DCEBF] focus:ring-2 focus:ring-[#2DCEBF]/40 transition-all"
                        ></textarea>
                    </div>
                </div>

                {/* Right Section */}
                <div className="space-y-6">
                    {/* Cell */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Cell
                        </label>
                        <input
                            type="text"
                            placeholder="Enter cell number"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2DCEBF] focus:ring-2 focus:ring-[#2DCEBF]/40 transition-all"
                        />
                    </div>

                    {/* Mobile */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Mobile
                        </label>
                        <input
                            type="text"
                            placeholder="Enter mobile number"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2DCEBF] focus:ring-2 focus:ring-[#2DCEBF]/40 transition-all"
                        />
                    </div>

                    {/* Deployment Charges */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Deployment Charges
                        </label>
                        <input
                            type="number"
                            value={5000}
                            disabled
                            className="w-full border border-gray-300 bg-gray-100 rounded-xl px-4 py-3 cursor-not-allowed"
                        />
                    </div>

                    {/* Package Dropdown */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Select Package
                        </label>
                        <select className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-[#2DCEBF] focus:ring-2 focus:ring-[#2DCEBF]/40 transition-all">
                            <option value="">Choose a package</option>
                            <option value="3000">Up to 3000 Students</option>
                            <option value="4000">Up to 4000 Students</option>
                            <option value="unlimited">Unlimited Students</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6 mt-10">
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-300 transition-all duration-300">
                    <FaTimes /> Cancel
                </button>
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#2DCEBF] to-[#2ECE90] text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <FaCheck /> Submit
                </button>
            </div>
        </div>
    );
};

export default RequestDemo;
