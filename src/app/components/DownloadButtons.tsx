import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadButtons = () => {
    return (
        <div className="flex justify-center gap-4 py-4 md:py-8 flex-wrap justify-center items-center">
            <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download from Google Play"
                className="flex items-center bg-white border border-gray-300 text-black py-3 px-6 rounded-full shadow-md w-full max-w-xs transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 mb-4 md:mb-0"
            >
                <FaGooglePlay className="text-4xl mr-4" />
                <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold">Get it on</span>
                    <span className="font-medium">Google Play</span>
                </div>
            </a>
            <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download from App Store"
                className="flex items-center bg-white border border-gray-300 text-black py-3 px-6 rounded-full shadow-md w-full max-w-xs transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
                <FaApple className="text-4xl mr-4" />
                <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold">Download on</span>
                    <span className="font-medium">App Store</span>
                </div>
            </a>
        </div>
    );
};

export default DownloadButtons;