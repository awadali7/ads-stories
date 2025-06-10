"use client";
import React from "react";
import Spotlight from "./_components/Spotlight";
import AboutUs from "./_components/AboutUs";
import Services from "./_components/Services";
import TrustedClientsPage from "./_components/Client";
import Contact from "./_components/Contact";

export default function HomePage() {
    return (
        <>
            <Spotlight />
            <AboutUs />
            <Services />
            <TrustedClientsPage />
            <Contact />
        </>
    );
}
