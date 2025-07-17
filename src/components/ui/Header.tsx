// components/Header.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
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
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
];

function useOutsideClick(
    ref: React.RefObject<HTMLElement | null>,
    callback: () => void
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
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
    const [isOpen, setIsOpen] = useState(false);
    const [locationState, setLocationState] = useState<
        "default" | "about" | "trusted"
    >("default");
    const pathname = usePathname();
    const wrapperRef = useRef<HTMLElement | null>(null);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    useOutsideClick(wrapperRef, () => setIsOpen(false));

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Scroll-spy for header background
    useEffect(() => {
        const headerEl = document.getElementById("site-header");
        const aboutEl = document.getElementById("about-us");
        const trustedEl = document.getElementById("trusted-section");
        if (!headerEl) return;

        const handleScroll = () => {
            const offset = headerEl.offsetHeight;
            if (trustedEl && trustedEl.getBoundingClientRect().top <= offset) {
                setLocationState("trusted");
            } else if (
                aboutEl &&
                aboutEl.getBoundingClientRect().top <= offset
            ) {
                setLocationState("about");
            } else {
                setLocationState("default");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log(locationState, "locationState ====>");

    const baseClasses =
        "sticky top-0 z-50 transition-colors duration-300 ease-in-out";
    const stateClasses =
        locationState === "trusted"
            ? "bg-[#12110c] text-white"
            : locationState === "about"
            ? "bg-gray-100 text-gray-800"
            : "bg-[#12110c] text-white";

    return (
        <header id="site-header" className={`${baseClasses} ${stateClasses}`}>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center h-16 sm:h-20 md:h-24">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image
                            src="/ads-logo.png"
                            alt="Ads Stories Logo"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden sm:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                    {links.slice(0, 3).map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`cursor-pointer transition text-lg ${
                                    isActive
                                        ? "font-semibold border-b-2 border-pink-500 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                                        : "font-medium hover:text-gray-400"
                                }
                `}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Contact button + Hamburger */}
                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden sm:inline-block">
                        <button className="relative inline-flex bg-black h-10 overflow-hidden rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute inset-0 animate-spin bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 opacity-30" />
                            <span className="relative inline-flex items-center justify-center px-5 py-2 bg-black text-white rounded-full font-medium transition">
                                Contact Us
                            </span>
                        </button>
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="sm:hidden focus:outline-none p-2"
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={wrapperRef}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileVariants}
                        className="sm:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-medium text-gray-800"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
