import React from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const ContactDetails = () => (
    <div className="w-full md:w-1/3 flex flex-col gap-8 bg-[#f7f7f7] rounded-2xl p-8 shadow-sm border border-gray-100">
        <div className="flex items-start gap-4">
            <span className="mt-1 text-2xl text-[#12110c]">
                <FiMapPin />
            </span>
            <div>
                <h2 className="text-lg font-bold text-[#12110c] mb-1">
                    Address
                </h2>
                <p className="text-base book-font text-gray-700">
                    Amcw26/591,26/592,26/593, Ground Floor
                    <br />
                    Konginichudukadu, Jn, Thiruvambady, Thirumala,
                    <br />
                    Alappuzha, Kerala 688011
                </p>
            </div>
        </div>
        <div className="flex items-start gap-4">
            <span className="mt-1 text-2xl text-[#12110c]">
                <FiMail />
            </span>
            <div>
                <h2 className="text-lg font-bold text-[#12110c] mb-1">Email</h2>
                <a
                    href="mailto:adstories.in@gmail.com"
                    className="text-base book-font text-[#12110c] hover:underline"
                >
                    adstories.in@gmail.com
                </a>
            </div>
        </div>
        <div className="flex items-start gap-4">
            <span className="mt-1 text-2xl text-[#12110c]">
                <FiPhone />
            </span>
            <div>
                <h2 className="text-lg font-bold text-[#12110c] mb-1">Phone</h2>
                <a
                    href="tel:+918714327665"
                    className="text-base book-font text-[#12110c] hover:underline"
                >
                    +91 8714327665
                </a>
            </div>
        </div>
    </div>
);

export default ContactDetails;
