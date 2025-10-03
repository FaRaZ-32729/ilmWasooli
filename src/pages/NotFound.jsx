import React from "react";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Oops! Page not found
            </h2>
            <p className="text-gray-600 mb-6">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-6 py-2 bg-[#2ECE90] text-white rounded-lg shadow hover:bg-transparent hover:text-[#2ECE90] transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
