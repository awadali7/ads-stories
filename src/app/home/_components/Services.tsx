import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

export default function Services() {
    return (
        <section
            id="service"
            className="py-12 sm:py-14 md:py-16 lg:py-20 bg-[#f7f7f7]"
        >
            <div className="px-4 sm:px-8 md:px-16 lg:px-32">
                {" "}
                {/* Added wrapper for horizontal spacing */}
                <section className="">
                    {/* Animated Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-18"
                    >
                        <button className="relative inline-flex h-10 sm:h-12 md:h-12 lg:h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex medium-font h-full w-full cursor-default items-center justify-center rounded-full bg-[#1C1C19] px-4 sm:px-6 md:px-6 lg:px-6 text-base sm:text-lg md:text-xl lg:text-xl font-medium text-[#f7f7f7] backdrop-blur-3xl">
                                Our Services
                            </span>
                        </button>

                        <h1 className="mt-8 sm:mt-10 text-[#12110c] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 ">
                            Digital Marketing Solutions
                        </h1>

                        <p className="text-base sm:text-lg text-[#12110c] md:text-xl lg:text-xl book-font w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto text-center">
                            From SEO and social media management to PPC
                            advertising and content strategy, we craft tailored
                            campaigns that drive traffic, engage your audience,
                            and boost conversions. Let us help your brand stand
                            out in a crowded digital landscape.
                        </p>
                    </motion.div>
                    <ServiceCard />
                </section>
            </div>
        </section>
    );
}
