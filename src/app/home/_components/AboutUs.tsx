// components/AboutUs.tsx
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const [displayText, setDisplayText] = useState("");
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    const fullText =
        "Powering Brands through Digital Innovation combines data-driven strategies, creative storytelling, and targeted campaigns to maximize engagement and ROI.";

    // Moving cards data
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
    ];

    // Slider settings for first row (moving right)
    const sliderSettingsRight = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    // Slider settings for second row (moving left)
    const sliderSettingsLeft = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: "linear",
        arrows: false,
        rtl: true, // This makes it move left
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

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
            <section className="bg-[#f7f7f7] text-[#0b0b0b] py-8 sm:py-10 md:py-12 lg:py-14 overflow-hidden">
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
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <Slider {...sliderSettingsRight}>
                        {movingCards.map((card, index) => (
                            <div key={`first-${index}`} className="px-2">
                                <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl px-6 py-4 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-black text-xl sm:text-2xl font-semibold mb-2">
                                        {card.icon}
                                    </div>
                                    <h4 className="text-lg font-medium text-black text-center tracking-tight">
                                        {card.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Second Row - Moving Left */}
                <div className="mt-6 sm:mt-8 md:mt-10">
                    <Slider {...sliderSettingsLeft}>
                        {movingCards
                            .slice()
                            .reverse()
                            .map((card, index) => (
                                <div key={`second-${index}`} className="px-2">
                                    <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl px-6 py-4 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 group">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-black text-xl sm:text-2xl font-semibold mb-2">
                                            {card.icon}
                                        </div>
                                        <h4 className="text-lg font-medium text-black text-center tracking-tight">
                                            {card.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </section>
        </section>
    );
}
