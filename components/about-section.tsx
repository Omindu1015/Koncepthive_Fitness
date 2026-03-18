"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

const stats = [
  { value: "3+", label: "Years Experience", delay: 0.4 },
  { value: "5000+", label: "Active Members", delay: 0.5 },
  { value: "50+", label: "Weekly Classes", delay: 0.6 },
  { value: "20+", label: "Expert Trainers", delay: 0.7 },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 dark:bg-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 z-0 hidden translate-x-4 translate-y-4 border-2 border-gold md:block" />
          <Image
            src="/image5.jpg"
            alt="Personal trainer coaching a client"
            width={720}
            height={960}
            className="relative z-10 h-[420px] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0 md:h-[600px]"
          />
          <div className="absolute -bottom-8 -right-4 z-20 hidden bg-gold p-6 text-black shadow-xl md:block lg:-right-8">
            <div className="mb-2 inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              <span className="font-inter text-xs font-semibold uppercase tracking-wider">Premium</span>
            </div>
            <p className="mb-1 font-oswald text-4xl font-bold">24/7</p>
            <p className="font-inter text-sm font-semibold uppercase tracking-wider">Access</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-gold" />
            <span className="font-oswald text-sm uppercase tracking-[0.2em] text-gold">About The Center</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
            WE DON&apos;T JUST BUILD MUSCLE. <br />
            <span className="text-gray-400 dark:text-gray-500">WE BUILD CHARACTER.</span>
          </h2>

          <div className="mb-10 space-y-4 font-inter text-gray-600 dark:text-gray-400">
            <p>
              Founded in 2023, Fitness Sports Center was built on a simple principle:
              provide a space where hard work is respected and excuses are left at the
              door. We are more than just a gym; we are a community of dedicated
              individuals striving for greatness.
            </p>
            <p>
              Whether you&apos;re a seasoned athlete or just starting your fitness journey, our
              state-of-the-art facility and expert coaching staff are here to help you
              shatter your limits and forge your strongest self.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                className="border-l-2 border-gold pl-4"
              >
                <p className="mb-1 font-oswald text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="font-inter text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Button
              asChild
              variant="ghost"
              className="group h-auto border-b-2 border-gold p-0 font-oswald text-lg tracking-wider text-gray-900 hover:text-gold dark:text-white"
            >
              <a href="#trainers" className="inline-flex items-center gap-2 pb-1">
                MEET OUR TRAINERS
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
