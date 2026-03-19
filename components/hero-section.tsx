"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/image6.jpg"
          alt="Man deadlifting heavy weights"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent opacity-100 dark:from-dark" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center sm:px-6 md:text-left lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 flex items-center justify-center gap-3 md:justify-start"
          >
            <div className="h-[2px] w-12 bg-gold" />
            <span className="font-oswald text-sm uppercase tracking-[0.2em] text-gold md:text-base">
              Forge Your Strongest Self
            </span>
          </motion.div>

          <h1 className="mb-6 text-5xl font-bold leading-[1.1] text-white md:text-7xl lg:text-8xl">
            NO EXCUSES. <br />
            <span className="text-stroke text-gold">JUST RESULTS.</span>
          </h1>

          <p className="mb-10 max-w-2xl font-inter text-lg text-gray-300 md:text-xl">
            Join the most dedicated fitness community. Premium equipment, expert coaching,
            and an environment designed to push your limits.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <Button asChild className="h-auto w-full px-8 py-4 font-oswald text-lg tracking-wide sm:w-auto">
              <a href="#membership" className="group">
                <span className="inline-flex items-center gap-2">
                  START YOUR JOURNEY
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-auto w-full border-2 border-white px-8 py-4 font-oswald text-lg tracking-wide text-white hover:bg-white hover:text-black sm:w-auto"
            >
              <a href="#services">EXPLORE PLANS</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
