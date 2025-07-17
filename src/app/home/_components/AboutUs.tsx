// components/AboutUs.tsx
import React, { useState, useEffect, useRef } from "react";

export default function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    const fullText =
        "Powering Brands through Digital Innovation combines data-driven strategies, creative storytelling, and targeted campaigns to maximize engagement and ROI.";

    // Infinite moving cards data
    const movingCards = [
        { title: "Innovation", icon: "⚡" },
        { title: "Design", icon: "🎨" },
        { title: "Brand", icon: "🏆" },
        { title: "Market", icon: "📊" },
        { title: "Strategy", icon: "🎯" },
        { title: "Creative", icon: "✨" },
        { title: "Digital", icon: "💻" },
        { title: "Growth", icon: "📈" },
        { title: "Storytelling", icon: "📖" },
        { title: "Engagement", icon: "🤝" },
        { title: "ROI", icon: "💰" },
        { title: "Results", icon: "🎯" },

        // { title: "Innovation", icon: <FiZap /> },
        // { title: "Design", icon: <FiPenTool /> },
        // { title: "Brand", icon: <FiAward /> },
        // { title: "Market", icon: <FiBarChart2 /> },
        // { title: "Strategy", icon: <FiTarget /> },
        // { title: "Creative", icon: <FiStar /> },
        // { title: "Digital", icon: <FiMonitor /> },
        // { title: "Growth", icon: <FiTrendingUp /> },
        // { title: "Storytelling", icon: <FiBookOpen /> },
        // { title: "Engagement", icon: <FiUsers /> },
        // { title: "ROI", icon: <FiDollarSign /> },
        // { title: "Results", icon: <FiCheckCircle /> },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (paragraphRef.current) {
            observer.observe(paragraphRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                // Reset for repeat
                setDisplayText("");
                currentIndex = 0;
            }
        }, 60); // Slightly slower for smoother effect

        return () => clearInterval(interval);
    }, [isVisible, fullText]);

    return (
        <section id="about-us">
            <section className="bg-[#f7f7f7] text-[#0b0b0b] py-8 sm:py-10 md:py-12 lg:py-14 ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-5 md:mb-6 px-4 sm:px-6 md:px-8">
                    What is Adstories?
                </h2>
                <p
                    ref={paragraphRef}
                    className="text-lg sm:text-xl md:text-2xl mb-10 book-font w-11/12 sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto text-center min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center px-4 sm:px-6 md:px-8 leading-relaxed"
                >
                    <span className="transition-all duration-300 ease-in-out">
                        {displayText}
                    </span>
                    {isVisible && displayText.length < fullText.length && (
                        <span className="animate-pulse ml-1">|</span>
                    )}
                </p>

                {/* First Row - Moving Right */}
                <div className="flex animate-scroll-right">
                    {movingCards.map((card, index) => (
                        <div
                            key={`first-${index}`}
                            className={
                                `flex-shrink-0 mx-1 sm:mx-2 md:mx-3 group relative ` +
                                `bg-white/60 backdrop-blur-md border border-gray-200 ` +
                                `rounded-2xl px-6 py-4 min-w-[180px] sm:min-w-[200px] md:min-w-[220px] ` +
                                `flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1`
                            }
                        >
                            <div
                                className={
                                    `w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ` +
                                    `text-black text-xl sm:text-2xl font-semibold mb-2`
                                }
                            >
                                {card.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-black text-center tracking-tight">
                                {card.title}
                            </h4>
                        </div>
                    ))}
                    {/* Duplicate cards for seamless loop */}
                    {movingCards.map((card, index) => (
                        <div
                            key={`first-duplicate-${index}`}
                            className={
                                `flex-shrink-0 mx-1 sm:mx-2 md:mx-3 group relative ` +
                                `bg-white/60 backdrop-blur-md border border-gray-200 ` +
                                `rounded-2xl px-6 py-4 min-w-[180px] sm:min-w-[200px] md:min-w-[220px] ` +
                                `flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1`
                            }
                        >
                            <div
                                className={
                                    `w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ` +
                                    `text-black text-xl sm:text-2xl font-semibold mb-2`
                                }
                            >
                                {card.icon}
                            </div>
                            <h4 className="text-lg font-medium text-black text-center tracking-tight">
                                {card.title}
                            </h4>
                        </div>
                    ))}
                </div>

                {/* Second Row - Moving Left */}
                <div className="flex animate-scroll-left mt-6 sm:mt-8 md:mt-10">
                    {movingCards
                        .slice()
                        .reverse()
                        .map((card, index) => (
                            <div
                                key={`second-${index}`}
                                className={
                                    `flex-shrink-0 mx-1 sm:mx-2 md:mx-3 group relative ` +
                                    `bg-white/60 backdrop-blur-md border border-gray-200 ` +
                                    `rounded-2xl px-6 py-4 min-w-[180px] sm:min-w-[200px] md:min-w-[220px] ` +
                                    `flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1`
                                }
                            >
                                <div
                                    className={
                                        `w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ` +
                                        `text-black text-xl sm:text-2xl font-semibold mb-2`
                                    }
                                >
                                    {card.icon}
                                </div>
                                <h4 className="text-lg font-medium text-black text-center tracking-tight">
                                    {card.title}
                                </h4>
                            </div>
                        ))}
                    {/* Duplicate cards for seamless loop */}
                    {movingCards
                        .slice()
                        .reverse()
                        .map((card, index) => (
                            <div
                                key={`second-duplicate-${index}`}
                                className={
                                    `flex-shrink-0 mx-1 sm:mx-2 md:mx-3 group relative ` +
                                    `bg-white/60 backdrop-blur-md border border-gray-200 ` +
                                    `rounded-2xl px-6 py-4 min-w-[180px] sm:min-w-[200px] md:min-w-[220px] ` +
                                    `flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1`
                                }
                            >
                                <div
                                    className={
                                        `w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ` +
                                        `text-black text-xl sm:text-2xl font-semibold mb-2`
                                    }
                                >
                                    {card.icon}
                                </div>
                                <h4 className="text-lg font-medium text-black text-center tracking-tight">
                                    {card.title}
                                </h4>
                            </div>
                        ))}
                </div>
            </section>
        </section>
    );
}
