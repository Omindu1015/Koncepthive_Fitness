"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Dumbbell,
  Flame,
  HeartPulse,
  Swords,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "STRENGTH TRAINING",
    description: "Premium free weights, racks, and machines to build raw power and muscle mass.",
    icon: Dumbbell,
  },
  {
    title: "CARDIO ZONE",
    description: "State-of-the-art treadmills, rowers, and bikes to boost your endurance.",
    icon: HeartPulse,
  },
  {
    title: "BOXING & MMA",
    description: "Heavy bags, speed bags, and a full-size ring for combat sports training.",
    icon: Swords,
  },
  {
    title: "YOGA & MOBILITY",
    description: "Dedicated studio space for recovery, flexibility, and mind-body connection.",
    icon: Activity,
  },
  {
    title: "CROSSFIT AREA",
    description: "Open functional fitness space with rigs, kettlebells, and plyo boxes.",
    icon: Flame,
  },
  {
    title: "PERSONAL TRAINING",
    description: "1-on-1 expert coaching tailored to your specific goals and abilities.",
    icon: Users,
  },
];

const accentImages = [
  { src: "/image2.jpg", alt: "Dumbbell rack", title: "FREE WEIGHTS" },
  { src: "/image3.jpg", alt: "Punching bag training area", title: "COMBAT ZONE" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-cream-dark py-24 dark:bg-dark-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 bg-gold" />
            <span className="font-oswald text-sm uppercase tracking-[0.2em] text-gold">
              Our Services
            </span>
            <div className="h-[2px] w-8 bg-gold" />
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            EVERYTHING YOU NEED TO SUCCEED
          </h2>
          <p className="font-inter text-gray-600 dark:text-gray-400">
            From heavy lifting to high-intensity intervals, we provide the equipment and
            environment for every style of training.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="group h-full cursor-pointer transition-colors hover:border-gold dark:hover:border-gold">
                  <CardContent>
                    <div className="mb-6 flex h-16 w-16 items-center justify-center bg-cream-dark text-gray-900 transition-colors group-hover:bg-gold group-hover:text-black dark:bg-dark dark:text-white">
                      <ServiceIcon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 font-oswald text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="font-inter text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {accentImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-64 overflow-hidden md:h-80"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-10 bg-black/40 transition-colors group-hover:bg-black/20" />
              <div className="absolute bottom-6 left-6 z-20">
                <h4 className="font-oswald text-2xl font-bold text-white">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild className="font-oswald tracking-wide">
            <a href="#membership" className="inline-flex items-center gap-2">
              VIEW MEMBERSHIP PLANS
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
