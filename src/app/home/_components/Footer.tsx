import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#12110c] text-gray-200 transition-shadow shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)] pt-20">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-16">
                    {/* About Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white">
                            Ads Stories Marketing
                        </h2>
                        <p className="text-sm book-font leading-relaxed">
                            Ads Stories we craft data-driven marketing
                            strategies that elevate your brand. From SEO and PPC
                            to social media and content creation, our team
                            delivers measurable results you can trust.
                        </p>
                        <div className="flex space-x-5 mt-4">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="hover:text-white transition-colors"
                            >
                                <FaFacebookF size={22} />
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="hover:text-white transition-colors"
                            >
                                <FaTwitter size={22} />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="hover:text-white transition-colors"
                            >
                                <FaLinkedinIn size={22} />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="hover:text-white transition-colors"
                            >
                                <FaInstagram size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white">
                            Our Services
                        </h2>
                        <ul className="space-y-3 text-sm book-font">
                            <li>
                                <a
                                    href="#seo"
                                    className="hover:text-white hover:underline transition-all"
                                >
                                    SEO Optimization
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#ppc"
                                    className="hover:text-white hover:underline transition-all"
                                >
                                    PPC Advertising
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#social"
                                    className="hover:text-white hover:underline transition-all"
                                >
                                    Social Media Management
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#content"
                                    className="hover:text-white hover:underline transition-all"
                                >
                                    Content Strategy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#email"
                                    className="hover:text-white hover:underline transition-all"
                                >
                                    Email Marketing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl medium-font text-white">
                            Quick Links
                        </h2>
                        <ul className="space-y-3 text-sm book-font">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-white hover:underline transition-all"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="hover:text-white hover:underline transition-all"
                                >
                                    Portfolio
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-white hover:underline transition-all"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section (Newsletter removed) */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white">
                            Contact Us
                        </h2>
                        <div className="flex items-start space-x-3">
                            <FaMapMarkerAlt className="mt-1 text-[#f7f7f7]" />
                            <p className="text-sm book-font leading-relaxed">
                                Amcw26/591,26/592,26/593, Ground Floor,
                                <br />
                                Konginichudukadu, Jn, Thiruvambady, Thirumala,
                                <br />
                                Alappuzha, Kerala 688011
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaEnvelope className="text-[#f7f7f7]" />
                            <a
                                href="mailto:adstories.in@gmail.com"
                                className="text-sm book-font hover:text-white hover:underline transition-all"
                            >
                                adstories.in@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FaPhone className="text-[#f7f7f7]" />
                            <a
                                href="tel:+918714327665"
                                className="text-sm book-font hover:text-white hover:underline transition-all"
                            >
                                +91 8714327665
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-16"></div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center py-6">
                    <p className="text-sm book-font text-gray-400">
                        © {new Date().getFullYear()} Ads Stories . All rights
                        reserved.
                    </p>
                    <div className="flex space-x-8 mt-4 sm:mt-0">
                        <a
                            href="#privacy"
                            className="text-sm book-font hover:text-white hover:underline transition-all"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#terms"
                            className="text-sm book-font hover:text-white hover:underline transition-all"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#sitemap"
                            className="text-sm book-font hover:text-white hover:underline transition-all"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
