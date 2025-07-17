"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
    return (
        <BackgroundBeamsWithCollision>
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                What&apos;s cooler than Beams?{" "}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">Exploding beams.</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                        <span className="">Exploding beams.</span>
                    </div>
                </div>
            </h2>
        </BackgroundBeamsWithCollision>
    );
}

export default function Spotlight() {
    const spotlightRef = useRef<HTMLDivElement>(null);
    // Remove mouse state and useEffect

    return (
        <section
            id="home"
            className="relative height-screen bg-[#12110c] overflow-hidden"
            ref={spotlightRef}
        >
            {/* 1. SVG background (low opacity) */}
            <div
                className="
          absolute inset-0
          bg-[url('/landing-grid.svg')]
          bg-no-repeat
          bg-center
          bg-cover
          opacity-10
        "
            />
            {/* Remove Mouse-following spotlight */}
            {/* Remove the div that uses mouse.x and mouse.y for background */}
            <motion.div
                className="absolute inset-0"
                initial={{
                    opacity: 0,
                    backgroundPosition: "50% 60%",
                }}
                animate={{
                    opacity: 0.5,
                    backgroundPosition: ["50% 60%", "50% 40%", "50% 60%"],
                }}
                transition={{
                    backgroundPosition: {
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 3,
                        ease: "easeInOut",
                    },
                    opacity: { duration: 0.5, ease: "easeInOut" },
                }}
            />

            <div className="relative z-20 h-full flex flex-col medium-font items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
                <motion.span
                    className="
            bg-[radial-gradient(50%_100%_at_50%_50%,_rgb(255,255,255)_0%,_rgba(255,255,255,0)_168%)]
            inline-block
            bg-clip-text
            text-transparent
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[72px]
            leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight
            px-2 sm:px-4 md:px-6 lg:px-8
          "
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                >
                    Igniting Brand Growth with
                </motion.span>

                <motion.span
                    className="
            bg-[radial-gradient(50%_50%_at_50%_50%,_rgb(255,255,255)_0%,_rgba(255,71,218,0.76)_38.3783%,_rgba(71,81,255,0.59)_76.4864%,_rgba(135,34,81,0.3)_168%)]
            inline-block
            bg-clip-text
            text-transparent
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[72px]
            leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight
            mt-1 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-2
            px-2 sm:px-4 md:px-6 lg:px-8
          "
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                >
                    Holistic Customer Engagement
                </motion.span>

                {/* Call to Action Button */}
                <motion.a
                    href="#about-us"
                    className="mt-10 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Learn More
                </motion.a>
            </div>
        </section>
    );
}
