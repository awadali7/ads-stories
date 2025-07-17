"use client";

import React, { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire this up to your backend or email service
        console.log("Submit email:", email);
    };

    return (
        <main className="bg-[#12110c] text-[#f7f7f7]  flex items-center justify-center">
            <section className="w-full max-w-4xl px-4 py-20 text-center">
                <h1 className="mt-8 sm:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 ">
                    Let&lsquo;s talk about your business
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl book-font w-[80%] mx-auto text-center">
                    We&lsquo;re here to help you grow your business. Contact us
                    today to learn more about our services and how we can help
                    you achieve your goals.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 m-auto flex justify-center rounded-full overflow-hidden"
                >
                    <div className="flex w-full bg-[#f7f7f7] ">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 px-6 py-4 bg-transparent book-font placeholder-gray-400 text-white focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-6 py-4 bg-black medium-font text-white font-medium hover:bg-gray-700 transition"
                        >
                            Contact us
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}
