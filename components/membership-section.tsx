"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "BASIC",
    subtitle: "Perfect for beginners looking to get started.",
    price: "$29",
    period: "/mo",
    featured: false,
    delay: 0,
    features: [
      "Access to gym floor",
      "Locker room access",
      "Free Wi-Fi",
      "1 Free PT Session",
    ],
  },
  {
    name: "PRO",
    subtitle: "Our most popular plan for dedicated athletes.",
    price: "$59",
    period: "/mo",
    featured: true,
    delay: 0.1,
    features: [
      "24/7 Gym Access",
      "All Group Classes",
      "Sauna & Recovery Room",
      "Guest Pass (1/month)",
      "Nutrition Consultation",
    ],
  },
  {
    name: "ELITE",
    subtitle: "The ultimate package for maximum results.",
    price: "$99",
    period: "/mo",
    featured: false,
    delay: 0.2,
    features: [
      "Everything in Pro",
      "Unlimited Guest Passes",
      "4 PT Sessions / Month",
      "Private Locker",
      "Free Supplements",
    ],
  },
];

export function MembershipSection() {
  return (
    <section id="membership" className="relative bg-cream py-24 dark:bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 bg-gold" />
            <span className="font-oswald text-sm uppercase tracking-[0.2em] text-gold">
              Membership Plans
            </span>
            <div className="h-[2px] w-8 bg-gold" />
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            CHOOSE YOUR WEAPON
          </h2>
          <p className="font-inter text-gray-600 dark:text-gray-400">
            No hidden fees. No complicated contracts. Just straightforward pricing for
            serious results.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: plan.delay }}
              className={plan.featured ? "md:-translate-y-4" : ""}
            >
              <Card
                className={`relative flex h-full flex-col bg-cream-dark ${
                  plan.featured
                    ? "border-2 border-gold shadow-[0_0_30px_rgba(212,160,23,0.15)]"
                    : "border border-gray-200 dark:border-dark-border"
                }`}
              >
                {plan.featured ? (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-gold px-4 py-1 font-oswald text-sm font-bold tracking-wider text-black">
                    MOST POPULAR
                  </div>
                ) : null}

                <CardContent className="flex h-full flex-col">
                  <div className="mb-8">
                    <h3 className="mb-2 font-oswald text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="mb-6 h-10 font-inter text-sm text-gray-500 dark:text-gray-400">
                      {plan.subtitle}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className="font-oswald text-5xl font-bold text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="mb-1 font-inter text-gray-500 dark:text-gray-400">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`h-5 w-5 shrink-0 ${
                            plan.featured ? "text-gold" : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                        <span className="font-inter text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`h-12 w-full font-oswald font-semibold tracking-wide ${
                      plan.featured
                        ? "bg-gold text-black hover:bg-gold-hover"
                        : "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                    }`}
                  >
                    SELECT PLAN
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
