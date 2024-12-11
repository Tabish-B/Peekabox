import React from "react";

const BusinessSignup = () => {
    return (
        <section className="text-center px-4 py-12 md:py-16 lg:px-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 transition-all transform hover:text-primary">
                Start Your Business Partnership
            </h3>
            <p className="text-muted text-lg md:text-xl mb-6 opacity-75 transition-all transform hover:opacity-100">
                Join us in reducing food waste and providing sustainability solutions. Become a part of Peekabox today.
            </p>
            <a
                href="/business-signup"
                className="bg-accent text-white py-3 px-8 rounded-lg mt-6 inline-block text-lg font-semibold transition-all transform hover:bg-primary hover:shadow-lg focus:outline-none"
            >
                Sign Up Now
            </a>
        </section>
    );
};

export default BusinessSignup;