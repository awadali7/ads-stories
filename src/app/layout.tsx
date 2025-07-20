import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./home/_components/Footer";
import { IoLogoWhatsapp } from "react-icons/io5";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ads Stories | Best Digital Marketing & Social Media Ads Agency",
    description:
        "Ignite your brand growth with Ads Stories. We offer top-tier digital marketing, social media ads, SEO, PPC, and content strategies to boost your business online.",
    keywords: [
        "digital marketing",
        "ads agency",
        "social media ads",
        "SEO",
        "PPC",
        "content marketing",
        "best digital marketing agency",
        "ads stories",
        "online marketing",
        "brand growth",
    ],
    openGraph: {
        title: "Ads Stories | Best Digital Marketing & Social Media Ads Agency",
        description:
            "Ignite your brand growth with Ads Stories. We offer top-tier digital marketing, social media ads, SEO, PPC, and content strategies to boost your business online.",
        url: "https://www.adstoresmarketers.com/",
        siteName: "Ads Stories",
        images: [
            {
                url: "/assets/images/what-we-are.webp",
                width: 1200,
                height: 630,
                alt: "Ads Stories - Digital Marketing Agency",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ads Stories | Best Digital Marketing & Social Media Ads Agency",
        description:
            "Ignite your brand growth with Ads Stories. We offer top-tier digital marketing, social media ads, SEO, PPC, and content strategies to boost your business online.",
        images: ["/assets/images/what-we-are.webp"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
            >
                <a
                    href="https://wa.me/918714327665?text=Hi%21%20I%20just%20visited%20your%20website%20and%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20Can%20you%20tell%20me%20more%3F"
                    className="btn-whatsapp-pulse"
                >
                    <IoLogoWhatsapp />
                </a>

                {/* <CustomCursor /> */}
                {/* <Header /> */}
                {children}
                <Footer />
            </body>
        </html>
    );
}
