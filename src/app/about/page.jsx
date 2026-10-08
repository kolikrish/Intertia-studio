"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Home/Footer";
import FooterMobile from "@/components/Home/FooterMobile";
import UseTablet from "@/components/Responsive/UseTablet";
import AboutHero from "@/components/About/AboutHero";
import Manifesto from "@/components/About/Manifesto";
import ClientsGrid from "@/components/About/ClientsGrid";

export default function AboutPage() {
  const isTablet = UseTablet();
  return (
    <div className="text-black min-h-screen selection:bg-black selection:text-white">
      <NavBar />
      <main>
        <AboutHero />
        <Manifesto />
        <ClientsGrid />
      </main>
      {isTablet ? <FooterMobile /> : <Footer />}
    </div>
  );
}

