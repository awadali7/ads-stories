"use client";
import React from "react";
import ContactForm from "./_components/ContactForm";
import ContactDetails from "./_components/ContactDetails";
import HeaderMinimal from "@/components/ui/HeaderMinimal";

const ContactPage = () => {
    return (
        <>
            <HeaderMinimal />
            <section className="bg-[#12110c] py-12 sm:py-16 md:py-20">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        Contact Us
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl book-font text-gray-300 mb-8">
                        We’d love to hear from you! Fill out the form below or
                        reach out directly using the details provided.
                    </p>
                </div>
            </section>
            <section className="bg-white py-12 sm:py-16 md:py-20 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-12 items-start">
                    {/* Contact Form */}
                    <div className="w-full md:w-2/3">
                        <ContactForm />
                    </div>
                    {/* Contact Details */}
                    <ContactDetails />
                </div>
            </section>
        </>
    );
};

export default ContactPage;
