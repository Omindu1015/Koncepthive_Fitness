"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Membership", href: "#membership" },
  { name: "Trainers", href: "#trainers" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-200 bg-cream/90 py-2 shadow-sm backdrop-blur-md dark:border-dark-border dark:bg-dark/90 dark:shadow-none"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-2">
          <div>
            <Image src="/Logo.png" alt="Logo" width={65} height={65} />
          </div>
          <span className="font-oswald text-sm uppercase tracking-wider text-brown-dark dark:text-cream">
            Koncepthive Fitness
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wider text-gray-700 transition-colors hover:text-gold dark:text-gray-300 dark:hover:text-gold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-gray-300 pl-4 dark:border-dark-border">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDark}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild className="font-oswald tracking-wide">
              <a href="#membership">JOIN NOW</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDark}
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-900 dark:text-white"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <AnimatePresence>
                <motion.ul
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  className="mt-12 flex flex-col gap-4"
                >
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <SheetClose asChild>
                        <a
                          href={link.href}
                          className="block text-lg font-oswald text-gray-900 transition-colors hover:text-gold dark:text-white"
                        >
                          {link.name}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                  <li className="pt-4">
                    <SheetClose asChild>
                      <Button asChild className="w-full font-oswald tracking-wide">
                        <a href="#membership">JOIN NOW</a>
                      </Button>
                    </SheetClose>
                  </li>
                </motion.ul>
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
