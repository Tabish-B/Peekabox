import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadButtons = () => {
    return (
        <div className="flex flex-wrap gap-4 items-center justify-center md:flex-row pt-6 pb-8 sm:pt-8 sm:pb-12 md:pt-10 md:pb-14">
            {/* App Store Button */}
            <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download from App Store"
                className="flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-lg bg-white shadow-md text-black transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
                <FaApple className="text-3xl md:text-4xl" />
                <div className="text-left">
                    <span className="block text-xs md:text-sm uppercase tracking-wide text-pink-500">
                        Download on
                    </span>
                    <span className="block font-medium text-base md:text-lg">
                        App Store
                    </span>
                </div>
            </a>

            {/* Google Play Button */}
            <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download from Google Play"
                className="flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-lg bg-white shadow-md text-black transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
                <FaGooglePlay className="text-3xl md:text-4xl" />
                <div className="text-left">
                    <span className="block text-xs md:text-sm uppercase tracking-wide text-pink-500">
                        Get it on
                    </span>
                    <span className="block font-medium text-base md:text-lg">
                        Google Play
                    </span>
                </div>
            </a>
        </div>
    );
};

export default DownloadButtons;