"use client";

import { useEffect, useState } from "react";

import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { MembershipSection } from "@/components/membership-section";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { TrainersSection } from "@/components/trainers-section";



export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
  }, [isDark]);

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
      <section
        id="contact"
        className="flex min-h-[60vh] items-center justify-center px-6"
      >
        <h2 className="text-4xl text-brown-dark dark:text-cream md:text-5xl">Contact</h2>
      </section>
    </main>
  );
}
