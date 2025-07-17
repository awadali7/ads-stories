"use client";
import React from "react";
import Spotlight from "./_components/Spotlight";
import AboutUs from "./_components/AboutUs";
import Services from "./_components/Services";
import TrustedClientsPage from "./_components/Client";
import Header from "@/components/ui/Header";

export default function HomePage() {
    return (
        <>
            <Header />
            <Spotlight />
            <AboutUs />
            <Services />
            <TrustedClientsPage />
        </>
    );
}
