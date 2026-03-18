"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Trainer = {
  name: string;
  role: string;
  image: string;
  delay: number;
};

const trainers: Trainer[] = [
  {
    name: "MARCUS STONE",
    role: "Head Strength Coach",
    image: "/Instructor2.png",
    delay: 0,
  },
  {
    name: "SARAH JENKINS",
    role: "HIIT & Mobility Specialist",
    image: "/Instructor3.png",
    delay: 0.1,
  },
  {
    name: "DAVID CHEN",
    role: "Boxing & MMA Instructor",
    image: "/Instructor1.png",
    delay: 0.2,
  },
];

const socials: { label: string; Icon: LucideIcon }[] = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
];

export function TrainersSection() {
  return (
    <section id="trainers" className="relative bg-cream-dark py-24 dark:bg-dark-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-gold" />
              <span className="font-oswald text-sm uppercase tracking-[0.2em] text-gold">
                Expert Coaches
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              MEET THE ELITE
            </h2>
          </div>
          <p className="max-w-md font-inter text-gray-600 dark:text-gray-400 md:text-right">
            Our trainers aren&apos;t just certified; they live and breathe fitness. They are
            here to push you past your perceived limits.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: trainer.delay }}
            >
              <Card className="group relative overflow-hidden border-0 bg-transparent">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-dark-card">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="mb-1 font-oswald text-2xl font-bold text-white">{trainer.name}</h3>
                  <p className="mb-4 font-inter text-sm font-medium text-gold">{trainer.role}</p>

                  <div className="flex gap-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                    {socials.map(({ label, Icon }) => (
                      <Button
                        key={`${trainer.name}-${label}`}
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-full bg-black/30 text-white hover:bg-gold hover:text-black"
                      >
                        <a href="#" aria-label={`${trainer.name} ${label}`}>
                          <Icon className="h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
