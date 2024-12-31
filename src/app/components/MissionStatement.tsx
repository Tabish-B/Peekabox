import React from "react";

const MissionStatement = () => {
    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-Background text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary leading-tight">
                Empowering Sustainable Partnerships & Business Solutions
            </h3>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl sm:max-w-4xl mx-auto text-justify">
                At <span className="font-semibold text-secondary underline">Peekabox</span>, we tackle the challenge of
                <span className="font-semibold text-secondary underline"> food waste</span> with innovative solutions.
                We help businesses contribute to a <span className="text-secondary underline">sustainable future</span> while aligning
                <span className="text-secondary underline">profitability</span> with purpose.
            </p>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl sm:max-w-4xl mx-auto text-justify">
                <span className="font-semibold text-secondary underline">Peekabox</span> enables businesses to reduce waste,
                improve operational efficiency, and contribute positively to the environment. Together, we create a world where
                sustainability and success coexist.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
                <a
                    href="/business-signup"
                    className="w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-primary text-white shadow-lg hover:bg-secondary hover:shadow-xl transition-all"
                >
                    Join Us
                </a>
                <a
                    href="/learn-more"
                    className="w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg border-2 border-primary text-primary transition-all hover:bg-primary hover:text-white hover:shadow-xl focus:outline-none"
                >
                    Learn More
                </a>
            </div>
        </section>
    );
};

export default MissionStatement;