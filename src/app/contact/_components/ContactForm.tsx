"use client";
import React from "react";

const ContactForm = () => (
    <form
        action="https://formspree.io/f/mkgzgkwn"
        method="POST"
        className="bg-[#f7f7f7] rounded-2xl p-8 shadow-md flex flex-col gap-6"
    >
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-5 py-4 rounded-lg border border-gray-200 bg-white book-font text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#12110c]"
        />
        <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            className="px-5 py-4 rounded-lg border border-gray-200 bg-white book-font text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#12110c]"
        />
        <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="px-5 py-4 rounded-lg border border-gray-200 bg-white book-font text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#12110c] resize-none"
        />
        <button
            type="submit"
            className="px-8 py-4 rounded-full bg-[#12110c] text-white font-semibold text-lg shadow hover:bg-[#232323] transition"
        >
            Send Message
        </button>
    </form>
);

export default ContactForm;
