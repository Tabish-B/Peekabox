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
            title: "Explore",
            description: "Open the app to discover Surprise Bags filled with local, delicious items.",
        },
        {
            title: "Select",
            description: "Choose a Surprise Bag, reserve it, and complete your payment right away.",
        },
        {
            title: "Pick Up",
            description: "Visit the store at pickup time, show your reservation, and collect your bag.",
        },
        {
            title: "Enjoy",
            description: "Enjoy your meal while helping reduce food waste and supporting sustainability!",
        },
    ];

    return (
        <section className="max-w-4xl mx-auto text-center py-12">
            <h3 className="text-2xl md:text-3xl font-semibold">How to Use Peekabox</h3>
            <p className="mt-4 text-md md:text-lg text-gray-700">
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
                            <div className="bg-white shadow-lg rounded-lg p-8 min-h-[250px] flex flex-col justify-center items-center">
                                <h4 className="text-xl font-bold text-secondary mb-4 border-b-2 border-secondary">{step.title}</h4>
                                <p className="text-gray-750 text-center">{step.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Grid for Larger Screens */}
            <div className="hidden md:grid mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-Background shadow-lg rounded-lg p-6 min-h-[250px] flex flex-col justify-between items-center relative transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
                    >
                        <h4 className="text-xl font-bold text-secondary mb-2 border-b-2 border-secondary">{step.title}</h4>
                        <p className="text-gray-750">{step.description}</p>

                        {/* Arrow */}
                        {index < steps.length - 1 && (
                            <div
                                className="absolute right-0 top-1/2 transform translate-y-1/2"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    right: "-15px",  // Adjust for space between cards
                                }}
                            >
                                <div className="w-6 h-6 border-t-2 border-r-2 border-primary rotate-45"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowToUse;