import React from "react";
import ServiceCard from "../home/_components/ServiceCard";
import Header from "@/components/ui/Header";

const ServicesPage = () => {
    return (
        <>
            <Header />
            <section className="bg-[#12110c] py-12 sm:py-14 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        What We Do
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl book-font text-gray-300 mx-auto max-w-2xl">
                        Discover our full suite of digital marketing solutions
                        designed to help your brand grow, engage, and succeed in
                        today’s competitive landscape. Explore our services
                        below.
                    </p>
                </div>
            </section>
            <section className="bg-[#f7f7f7]">
                <ServiceCard />
            </section>
            {/* Call to Action Section */}
            <section className="bg-white py-12 sm:py-16 md:py-20 border-t border-gray-100">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#12110c]">
                        Ready to Grow Your Brand?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl book-font text-gray-700 mb-8">
                        Let’s talk about how our team can help you achieve your
                        marketing goals. Reach out for a free consultation or to
                        learn more about our services.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 rounded-full bg-[#12110c] text-white font-semibold text-lg shadow hover:bg-[#232323] transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
