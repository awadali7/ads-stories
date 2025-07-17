import React from "react";

const locations = [
    {
        name: "Location One",
        address: [
            "1234 Market Street,",
            "Suite 500,",
            "San Francisco, CA 94103",
        ],
        url: "https://maps.app.goo.gl/3YUVc1eCVDqTBBgD6?g_st=iw",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019688799!2d-122.4194151846817!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b0e6b1b%3A0x4a0b8b0b8b0b8b0b!2s1234%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus",
    },
    {
        name: "Location Two",
        address: [
            "5678 Mission Street,",
            "Suite 200,",
            "San Francisco, CA 94110",
        ],
        url: "https://maps.app.goo.gl/aknGMjJTjgcsUKsr6?g_st=iw",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019688799!2d-122.4194151846817!3d37.7597037797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2e2e2e2e2e%3A0x4a0b8b0b8b0b8b0b!2s5678%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094110%2C%20USA!5e0!3m2!1sen!2sus!4v1680000000001!5m2!1sen!2sus",
    },
    {
        name: "Location Three",
        address: [
            "9101 Van Ness Avenue,",
            "Suite 300,",
            "San Francisco, CA 94109",
        ],
        url: "https://g.co/kgs/MaUoM5y",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019688799!2d-122.4194151846817!3d37.7899297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3e3e3e3e3e%3A0x4a0b8b0b8b0b8b0b!2s9101%20Van%20Ness%20Ave%2C%20San%20Francisco%2C%20CA%2094109%2C%20USA!5e0!3m2!1sen!2sus!4v1680000000002!5m2!1sen!2sus",
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
