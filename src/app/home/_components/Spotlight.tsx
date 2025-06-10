import React from "react";
import { motion } from "framer-motion";

export default function Spotlight() {
    return (
        <section
            id="home"
            className="relative height-screen bg-[#12110c] overflow-hidden"
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

            {/* 3. Content layer on top, with its own “spotlight reveal” animation */}
            <div className="relative z-10 h-full flex flex-col medium-font items-center justify-center text-center px-4">
                <motion.span
                    className="
            bg-[radial-gradient(50%_100%_at_50%_50%,_rgb(255,255,255)_0%,_rgba(255,255,255,0)_168%)]
            inline-block
            bg-clip-text
            text-transparent
            text-[72px]
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
            text-[72px]
            mt-2
          "
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                >
                    Holistic Customer Engagement
                </motion.span>
            </div>
        </section>
    );
}
