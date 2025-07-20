"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
];

const HeaderMinimal = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <header className="sticky top-0 z-50 bg-[#12110c]/80 backdrop-blur-md shadow-lg w-full px-4 sm:px-8 flex items-center justify-between border-b border-[#232323]">
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                    <Image
                        src="/assets/images/white-logo.svg"
                        alt="Ads Stories Logo"
                        width={80}
                        height={28}
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>
            {/* Center: Nav Links (Desktop) */}
            <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative px-2 py-1 transition
                                ${
                                    isActive
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 after:content-[''] after:block after:h-0.5 after:w-full after:mt-1 after:rounded-full after:bg-gradient-to-r after:from-pink-400 after:via-purple-400 after:to-blue-500"
                                        : "text-white hover:text-pink-400"
                                }
                            `}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
            {/* Right: Contact Us Button (Desktop) */}
            <div className="hidden md:flex flex-shrink-0 items-center">
                <Link href="/contact">
                    <button className="bg-white text-[#12110c] font-semibold px-5 py-2 rounded-full shadow-sm hover:bg-gray-200 transition text-base">
                        Contact Us
                    </button>
                </Link>
            </div>
            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-white text-2xl p-2 ml-auto"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
            >
                <FiMenu />
            </button>
            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-[#12110c]/95 backdrop-blur flex flex-col min-h-screen justify-center items-center gap-8">
                    <button
                        className="absolute top-4 right-4 text-white text-3xl p-2"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <FiX />
                    </button>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-2xl px-2 py-1 font-medium transition
                                    ${
                                        isActive
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 after:content-[''] after:block after:h-0.5 after:w-full after:mt-1 after:rounded-full after:bg-gradient-to-r after:from-pink-400 after:via-purple-400 after:to-blue-500"
                                            : "text-white hover:text-pink-400"
                                    }
                                `}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>
                        <button className="mt-4 bg-white text-[#12110c] font-semibold px-8 py-3 rounded-full shadow-sm hover:bg-gray-200 transition text-lg">
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}
        </header>
    );
};

export default HeaderMinimal;
