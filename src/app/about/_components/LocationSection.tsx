import React from "react";

const locations = [
    {
        name: "Alappuzha",
        address: [
            "Amcw26/591,26/592,26/593, Ground Floor",
            "Konginichudukadu, Jn, Thiruvambady, Thirumala,",
            "Alappuzha, Kerala 688011",
        ],
        url: "https://maps.app.goo.gl/PxFr6DuWNghA4VFv6",
        embed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3986.5221950789796!2d76.33475837508308!3d9.484222190596467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjknMDMuMiJOIDc2wrAyMCcxNC40IkU!5e1!3m2!1sen!2sin!4v1752862474963!5m2!1sen!2sin",
    },
    {
        name: "Jaipur",
        address: ["G-12 capital high street , Jaipur"],
        url: "https://maps.app.goo.gl/Wmen4QHyYmnUD4te8",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6489577574735!2d75.85807799999999!3d26.799270699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9d6f000be8f%3A0x96781e9898265140!2sRTech%20Capital%20Highstreet%20Jaipur!5e1!3m2!1sen!2sin!4v1752862697387!5m2!1sen!2sin",
    },
    {
        name: "Maharashtra",
        address: ["Citi Mall"],
        url: "https://maps.app.goo.gl/1ykY5Ayu2dPPQCBS7",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.372894121446!2d72.83143869999999!3d19.138623499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63cd0ce884f%3A0x5a3f9df6a2063fc5!2sCiti%20Mall!5e1!3m2!1sen!2sin!4v1752862836063!5m2!1sen!2sin",
    },
];

const LocationSection = () => (
    <section className="bg-[#f7f7f7] py-12 sm:py-14 md:py-16 lg:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-[#12110c] text-center">
                Our Locations
            </h2>
            <div className="flex flex-col gap-12">
                {locations.map((loc, idx) => {
                    const isEven = idx % 2 === 1;
                    return (
                        <div
                            key={loc.url}
                            className={`flex flex-col md:flex-row items-center gap-8 ${
                                isEven ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Details */}
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="mb-2 text-2xl font-bold text-gray-800">
                                    {loc.name}
                                </div>
                                <address className="not-italic text-base sm:text-lg md:text-xl book-font text-gray-700 mb-4">
                                    {loc.address.map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </address>
                                <a
                                    href={loc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 rounded-full bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 transition text-lg mt-2"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                            {/* Minimal Map Preview */}
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className="w-full max-w-xs md:max-w-md lg:max-w-lg flex items-center justify-center">
                                    <iframe
                                        title={`Map preview for ${loc.name}`}
                                        src={loc.embed}
                                        width="100%"
                                        height="260"
                                        style={{
                                            border: 0,
                                            borderRadius: "0.75rem",
                                        }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default LocationSection;
