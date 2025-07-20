"use client";
import React from "react";
import Spotlight from "./home/_components/Spotlight";
import AboutUs from "./home/_components/AboutUs";
import Services from "./home/_components/Services";
import TrustedClientsPage from "./home/_components/Client";
import HeaderMinimal from "@/components/ui/HeaderMinimal";

export default function HomePage() {
    return (
        <>
            <HeaderMinimal />
            <Spotlight />
            <AboutUs />
            <Services />
            <TrustedClientsPage />
        </>
    );
}
