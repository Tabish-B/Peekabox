"use client";

import React, { useState, useEffect } from "react";

const images = [
    "/images/Food.jpg",
    "/images/grains.jpg",
    "/images/veg2.jpg",
];

const BusinessSignup = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative text-center"
        >
            {/* Background Image */}
            <div
                className="relative h-[60vh] md:h-[75vh] lg:h-[80vh] w-full"
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 1s ease-in-out",
                }}
            >
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 transition-all transform hover:text-primary shadow-md">
                        Start Your Business Partnership
                    </h3>
                    <p className="text-gray-200 text-lg md:text-xl mb-6 opacity-75 transition-all transform hover:opacity-100 shadow-md">
                        Join us in reducing food waste and providing sustainability solutions. Become a part of Peekabox today.
                    </p>
                    <div className="space-x-4">
                        {/* Sign Up Button */}
                        <a
                            href="/business-signup"
                            className="py-3 px-8 text-lg font-extrabold rounded-lg bg-accent text-white transition-all transform hover:bg-primary hover:shadow-lg focus:outline-none"
                        >
                            Buisness Sign Up
                        </a>
                        {/* Sign In Button */}
                        <a
                            href="/business-signin"
                            className="py-3 px-8 text-lg font-semibold rounded-lg border-2 border-white text-white transition-all transform hover:bg-white hover:text-primary hover:shadow-lg focus:outline-none"
                        >
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSignup;