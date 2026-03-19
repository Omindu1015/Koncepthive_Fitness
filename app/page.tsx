"use client";

import { useEffect, useState } from "react";

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { MembershipSection } from "@/components/membership-section";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { TrainersSection } from "@/components/trainers-section";



export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const root = document.documentElement;
    root.classList.toggle("dark", shouldUseDark);

    const frame = window.requestAnimationFrame(() => {
      setIsDark(shouldUseDark);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleDark = () => {
    const root = document.documentElement;
    const next = !isDark;
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <main className="min-h-screen">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MembershipSection />
      <TrainersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
