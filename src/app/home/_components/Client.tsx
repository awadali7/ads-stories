// File: app/page.tsx
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Client = {
    name: string;
    logoSrc: string;
};

const clients: Client[] = [
    { name: "VI", logoSrc: "/vi.svg" },
    { name: "Miko³", logoSrc: "/miko.svg" },
    { name: "boAt", logoSrc: "/boat.svg" },
    { name: "Cheesecake Factory", logoSrc: "/miko.svg" },
    { name: "Axio", logoSrc: "/axio.svg" },
    { name: "MoneyPlanned", logoSrc: "/moneyplanned.svg" },
    { name: "2070Health", logoSrc: "/health.svg" },
    { name: "Plural by Pine Labs", logoSrc: "/plural.svg" },
    { name: "MoneyPlanned (2)", logoSrc: "/moneyplanned.svg" },
    { name: "Cheesecake Factory (2)", logoSrc: "/miko.svg" },
    { name: "Axio (2)", logoSrc: "/axio.svg" },
    { name: "VI (2)", logoSrc: "/vi.svg" },
];

export default function TrustedClientsPage() {
    return (
        <main className="bg-[#12110c] text-white min-h-screen">
            {/* give this section an ID so Header can detect it */}
            <section
                id="trusted-section"
                className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-18"
                >
                    <button className="relative inline-flex h-10 sm:h-12 md:h-12 lg:h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex medium-font h-full w-full cursor-default items-center justify-center rounded-full bg-[#f7f7f7] px-4 sm:px-6 md:px-6 lg:px-6 text-base sm:text-lg md:text-xl lg:text-xl font-medium text-[#1C1C19] backdrop-blur-3xl">
                            Our Partners
                        </span>
                    </button>

                    <h1 className="mt-8 sm:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
                        Brands We’ve Helped Grow
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-xl book-font w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto text-center">
                        We help brands drive traffic, boost engagement, and
                        increase ROI with data-driven strategies. Below are a
                        few of the partners who trust us to elevate their online
                        presence.
                    </p>
                </motion.div>

                {/* Animated Logos Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6"
                >
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="group bg-[#1C1C19] rounded-lg p-4 sm:p-6 md:p-6 lg:p-8 flex items-center justify-center"
                        >
                            <div className="relative w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-14 lg:w-36 lg:h-16">
                                <Image
                                    src={client.logoSrc}
                                    alt={client.name}
                                    fill
                                    style={{ objectFit: "contain" }}
                                    className="grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-200"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
}
