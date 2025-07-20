import React from "react";
import Image from "next/image";

import MissionVisionSection from "./_components/MissionVisionSection";
import LocationSection from "./_components/LocationSection";
import HeaderMinimal from "@/components/ui/HeaderMinimal";

const AboutPage = () => {
    return (
        <>
            <HeaderMinimal />
            <section className="bg-[#12110c] py-12 sm:py-16 md:py-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        About Us
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl book-font text-gray-300 mb-8">
                        Learn more about our story, our mission, and what drives
                        us to help brands grow through digital innovation.
                    </p>
                </div>
            </section>
            <section className="bg-[#f7f7f7] py-12 sm:py-14 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 sm:px-6 md:px-8 lg:px-12">
                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/assets/images/what-we-are.webp"
                            alt="About Adstories - Team at work"
                            width={480}
                            height={360}
                            className="rounded-2xl shadow-lg object-cover w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
                            priority
                        />
                    </div>
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#12110c]">
                            What We Are
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl book-font text-[#1C1C19] mb-4">
                            Adstories is a digital marketing agency dedicated to
                            powering brands through innovation, creativity, and
                            data-driven strategies. We blend storytelling with
                            technology to help businesses grow, engage
                            audiences, and achieve measurable results.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl book-font text-gray-700">
                            Our team of passionate marketers, designers, and
                            strategists work closely with clients to craft
                            campaigns that stand out in a crowded digital
                            landscape. From brand building to performance
                            marketing, we’re your partner in every step of your
                            growth journey.
                        </p>
                    </div>
                </div>
            </section>
            <MissionVisionSection />
            <LocationSection />
        </>
    );
};

export default AboutPage;
