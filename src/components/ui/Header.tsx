// import React, { useState, useEffect, useRef, RefObject } from "react";
// import Link from "next/link";
// import { FiX } from "react-icons/fi";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import Image from "next/image";
// import Ham from "@/assets/images/ham.svg";
// import { usePathname } from "next/navigation";
"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Ham from "@/assets/images/ham.svg";
import { usePathname } from "next/navigation";

interface NavLink {
    label: string;
    href: string;
}

const links: NavLink[] = [
    { label: "Home", href: "/Home" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

function useOutsideClick(
    ref: RefObject<HTMLElement | null>,
    callback: () => void
): void {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
}

const mobileVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: "100vh",
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
    },
};

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const pathname: string | null = usePathname();
    const wrapperRef = useRef<HTMLElement>(null);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useOutsideClick(wrapperRef, () => setIsOpen(false));

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-[#12110c] text-white transition-shadow shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)] ${
                scrolled ? "shadow-lg backdrop-blur-md bg-opacity-80" : ""
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-2xl font-bold tracking-wide hover:text-gray-300 transition">
                                MyBrand
                            </span>
                        </Link>
                    </div>

                    {/* Mobile toggle button */}
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none p-2 hover:text-gray-300 relative z-40 transition"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <FiX size={24} />
                        ) : (
                            <Image
                                src={Ham}
                                alt="menu"
                                width={24}
                                height={24}
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile nav with smooth animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        key="mobile-nav"
                        ref={wrapperRef}
                        className="fixed top-0 right-0 h-full w-[50%] pl-8 pt-16 bg-[#12110c] text-white overflow-hidden z-30"
                        variants={mobileVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <nav className="flex flex-col py-10 px-6 space-y-4">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        passHref
                                    >
                                        <a
                                            className={`nav-link-heading ${
                                                isActive
                                                    ? "bold-font"
                                                    : "text-white medium-font"
                                            } hover:text-white hover:bold-font transition pl-1`}
                                        >
                                            <span className="relative">
                                                {link.label}
                                            </span>
                                        </a>
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="px-6">
                            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                                {/* Left column */}
                                <div className="w-full md:w-1/2">
                                    <h2 className="text-xl medium-font text-[16px] mb-[32px]">
                                        Adstories
                                    </h2>
                                    <p className="text-gray-300 text-[1rem] book-font">
                                        Adstories is a digital marketing
                                        editorial hub showcasing people,
                                        strategies, and processes behind
                                        impactful campaigns, brand storytelling.
                                    </p>
                                </div>

                                {/* Right column */}
                                <div className="w-full md:w-1/2 flex flex-col sm:flex-row sm:space-x-6">
                                    {/* Discover */}
                                    <div className="w-1/2 sm:w-5/12">
                                        <h2 className="text-lg medium-font text-[16px] mb-[32px]">
                                            Discover
                                        </h2>
                                        <ul className="space-y-1">
                                            <li>
                                                <a
                                                    href="https://material.io/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white transition text-[1rem] book-font"
                                                    aria-label="Material Design (opens in a new tab or window)"
                                                >
                                                    Material Design
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://fonts.google.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white transition text-[1rem] book-font"
                                                    aria-label="Google Fonts (opens in a new tab or window)"
                                                >
                                                    Google Fonts
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://blog.google/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white transition text-[1rem] book-font"
                                                    aria-label="The Keyword (opens in a new tab or window)"
                                                >
                                                    The Keyword
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Connect */}
                                    <div className="w-1/2 sm:w-2/12 mt-6 sm:mt-0">
                                        <h2 className="text-lg medium-font text-[16px] mb-[32px]">
                                            Connect
                                        </h2>
                                        <ul className="space-y-1">
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/googledesign/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white transition text-[1rem] book-font"
                                                    aria-label="Instagram (opens in a new tab or window)"
                                                >
                                                    Instagram
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/googledesign"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white transition text-[1rem] book-font"
                                                    aria-label="YouTube (opens in a new tab or window)"
                                                >
                                                    YouTube
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://x.com/GoogleDesign"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white transition text-[1rem] book-font"
                                                    aria-label="X (opens in a new tab or window)"
                                                >
                                                    X
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
