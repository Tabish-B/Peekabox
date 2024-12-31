import React from "react";
import { FaStar } from "react-icons/fa";

//replace by useeffect later by backend
const restaurantData = [
    "Magnolia Bakery", "Paul", "Dunkin’ Donuts", "Costa"
];

const RestaurantHeadline = () => {
    return (
        <section className="text-center py-8">
            <h3 className="text-2xl font-semibold text-black">Featured Restaurants</h3>
            <div className="overflow-hidden mt-8">
                <div className="flex animate-marquee gap-6 sm:gap-8 md:gap-16 lg:gap-24 items-center">
                    {restaurantData.map((restaurant, index) => (
                        <React.Fragment key={index}>
                            <span className="inline-block whitespace-nowrap text-xl sm:text-2xl md:text-3xl min-w-max">
                                {restaurant}
                            </span>
                            <FaStar className="inline-block text-2xl sm:text-2xl md:text-3xl text-yellow-500 min-w-max" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RestaurantHeadline;