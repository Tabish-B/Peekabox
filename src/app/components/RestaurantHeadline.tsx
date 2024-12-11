import React from "react";
import { FaStar } from "react-icons/fa";

const RestaurantHeadline = () => {
    return (
        <section className="text-center py-8">
            <h3 className="text-2xl font-semibold animate-pulse text-black">Featured Restaurants</h3>
            <div className="overflow-hidden mt-8">
                <div className="flex animate-marquee space-x-6 sm:space-x-8 md:space-x-16 lg:space-x-24 text-secondary">
                    <span className="inline-block whitespace-nowrap text-xl sm:text-2xl md:text-3xl">Magnolia Bakery</span>
                    <FaStar className="inline-block text-2xl sm:text-2xl md:text-3xl text-yellow-500" />
                    <span className="inline-block whitespace-nowrap text-xl sm:text-2xl md:text-3xl">Paul</span>
                    <FaStar className="inline-block text-2xl sm:text-2xl md:text-3xl text-yellow-500" />
                    <span className="inline-block whitespace-nowrap text-xl sm:text-2xl md:text-3xl">Dunkin’ Donuts</span>
                    <FaStar className="inline-block text-2xl sm:text-2xl md:text-3xl text-yellow-500" />
                    <span className="inline-block whitespace-nowrap text-xl sm:text-2xl md:text-3xl">Costa</span>
                    <FaStar className="inline-block text-2xl sm:text-2xl md:text-3xl text-yellow-500" />
                </div>
            </div>
        </section>
    );
};

export default RestaurantHeadline;