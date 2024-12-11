"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HowToUse = () => {
    const steps = [
        {
            title: "1: Explore Nearby Options",
            description: "Open the app to find Surprise Bags filled with delicious items from local stores and restaurants near you.",
        },
        {
            title: "2: Make Your Selection",
            description: "Choose the Surprise Bag, reserve it instantly, and complete your payment.",
        },
        {
            title: "3: Pick Up with Ease",
            description: "Visit the store at the scheduled pickup time, show your reservation in the app, and collect your Surprise Bag hassle-free.",
        },
        {
            title: "4: Enjoy & Make a Difference",
            description: "Relish your meal knowing you've helped reduce food waste and supported a more sustainable planet!",
        },
    ];

    return (
        <section className="max-w-4xl mx-auto text-center py-12">
            <h3 className="text-2xl md:text-3xl font-semibold">How to Use Peekabox</h3>
            <p className="mt-4 text-md md:text-lg text-Gray700">
                Experience the joy of saving great food and contributing to sustainability with Peekabox. Just follow these easy steps:
            </p>

            {/* Swiper for Small Screens */}
            <div className="block md:hidden mt-8">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    loopAdditionalSlides={1}  // Preloads additional slides for a smoother loop
                    className="swiper-container"
                >
                    {steps.map((step, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-White shadow-lg rounded-lg p-6 min-h-[200px] flex flex-col justify-between">
                                <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                                <p className="text-Gray750">{step.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grid for Larger Screens */}
            <div className="hidden md:grid mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-White shadow-lg rounded-lg p-6 min-h-[200px] flex flex-col justify-between animate-fade-in"
                    >
                        <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                        <p className="text-Gray750">{step.description}</p>
                    </div>
                ))}
            </div>

        
        </section>
    );
};

export default HowToUse;
