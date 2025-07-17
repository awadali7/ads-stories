import React from "react";

const MissionVisionSection = () => (
    <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Mission */}
            <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#12110c]">
                    Our Mission
                </h2>
                <p className="text-base sm:text-lg md:text-xl book-font text-gray-700">
                    To empower brands with innovative digital marketing
                    solutions that drive measurable growth, foster authentic
                    engagement, and create lasting impact in a rapidly evolving
                    digital world.
                </p>
            </div>
            {/* Vision */}
            <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#12110c]">
                    Our Vision
                </h2>
                <p className="text-base sm:text-lg md:text-xl book-font text-gray-700">
                    To be the leading force in digital transformation, inspiring
                    brands to reach new heights through creativity, technology,
                    and a relentless pursuit of excellence.
                </p>
            </div>
        </div>
    </section>
);

export default MissionVisionSection;
