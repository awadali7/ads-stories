// File: app/page.tsx
"use client"; /* <-- required for framer-motion */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Article = {
    imgSrc: string;
    title: string;
    description: string;
    tags: string[];
};

const articles: Article[] = [
    {
        imgSrc: "/service1.avif", // SEO banner (place your own file under public/)
        title: "Search Engine Optimization",
        description:
            "Optimize your website content and structure to rank higher in Google and drive qualified organic traffic.",
        tags: ["SEO", "Organic Traffic"],
    },
    {
        imgSrc: "/service2.avif", // PPC / Paid Ads banner
        title: "Pay-Per-Click Advertising",
        description:
            "Create and manage targeted Google Ads and Bing Ads campaigns to get immediate visibility and measurable ROI.",
        tags: ["PPC", "Paid Search"],
    },
    {
        imgSrc: "/service3.avif", // Social Media Marketing banner
        title: "Social Media Marketing",
        description:
            "Build brand awareness and engagement on platforms like Facebook, Instagram, LinkedIn and Twitter.",
        tags: ["Social Media", "Engagement"],
    },
    {
        imgSrc: "/service1.avif", // Content Marketing banner
        title: "Content Marketing",
        description:
            "Produce high-quality blog posts, infographics, and ebooks that attract, educate and convert your audience.",
        tags: ["Content", "Lead Generation"],
    },
    {
        imgSrc: "/service2.avif", // Email Marketing banner
        title: "Email Marketing",
        description:
            "Design automated email sequences and newsletters that nurture leads and drive revenue on autopilot.",
        tags: ["Email", "Automation"],
    },
    {
        imgSrc: "/service3.avif", // Influencer Marketing banner
        title: "Influencer Marketing",
        description:
            "Partner with niche influencers to amplify your message and reach highly-engaged, relevant audiences.",
        tags: ["Influencers", "Brand Awareness"],
    },
];

export default function ServiceCard() {
    return (
        <main className="min-h-screen ">
            <section className="max-w-7xl mx-auto px-4 py-12">
                {/* 1-col mobile | 2-col @sm | 3-col @lg */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center text-center   overflow-hidden  transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay:
                                    idx * 0.12 /* stagger each card slightly */,
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* — Image/banner at top — */}
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={article.imgSrc}
                                    alt={article.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            <div className="px-6 py-4 flex flex-col flex-1">
                                {/* — Card Title — */}
                                <h2 className="mt-4 text-2xl medium-font text-[#12110c]">
                                    {article.title}
                                </h2>

                                {/* — Card Description — */}
                                <p className="mt-2 book-font text-gray-700 leading-relaxed flex-1">
                                    {article.description}
                                </p>

                                {/* — Tags (pill-shaped outline buttons) — */}
                                <div className="mt-4 flex flex-wrap justify-center gap-2">
                                    {article.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-4 py-2 border border-[#12110c] rounded-full text-sm medium-font text-[#12110c] hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
