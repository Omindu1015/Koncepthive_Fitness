import { Instagram, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Membership", href: "#membership" },
];

const serviceLinks = [
  { label: "Strength Training", href: "#services" },
  { label: "Cardio Zone", href: "#services" },
  { label: "Boxing", href: "#services" },
  { label: "CrossFit", href: "#services" },
];

const supportLinks = [
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Tutorials", href: "#" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "YouTube", href: "#", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-card pt-20 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-16 lg:flex-row">
          <div className="lg:w-1/3">
            <div className="mb-8 flex gap-4">
              {socials.map(({ label, href, Icon }) => (
                <Button
                  key={label}
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-gray-600 text-white hover:border-white hover:text-gold"
                >
                  <a href={href} aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            <div className="space-y-4 font-inter text-sm text-gray-400">
              <p className="leading-relaxed">
                169, High Level Road, Kesbewa, Colombo. <br />
                Open 6am - 11pm, 7 days a week.
                
              </p>
              <p>
                <a href="mailto:omindu@koncepthivefitness.com" className="transition-colors hover:text-white">
                  omindu@koncepthivefitness.com
                </a>
              </p>
              <p>
                <a href="tel:+94775467890" className="transition-colors hover:text-white">
                  +94 77 546 7890
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:w-2/3 grid-cols-2 md:grid-cols-3">
            <div>
              <h4 className="mb-6 font-oswald text-sm uppercase tracking-widest text-white">Navigate</h4>
              <ul className="space-y-4 font-inter text-sm text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-oswald text-sm uppercase tracking-widest text-white">Services</h4>
              <ul className="space-y-4 font-inter text-sm text-gray-400">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-oswald text-sm uppercase tracking-widest text-white">Support</h4>
              <ul className="space-y-4 font-inter text-sm text-gray-400">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border pb-12 pt-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-md font-inter text-sm leading-relaxed text-gray-400">
              From personal training to advanced fitness programs, our expert team is
              here to elevate your health and connect you with your strongest self.
            </p>

            <div className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center md:w-auto md:justify-end md:gap-10">
              <div className="flex gap-6 font-oswald text-xs uppercase tracking-widest text-gray-400">
                <a href="#" className="transition-colors hover:text-white">
                  Terms & Conditions
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </a>
              </div>
              <Button asChild variant="ghost" className="rounded-full border border-white px-8 py-2.5 font-inter text-sm font-medium text-white hover:bg-white hover:text-black">
                <a href="#membership">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none flex w-full translate-y-[22%] select-none justify-center overflow-hidden leading-none">
        <h2 className="whitespace-nowrap font-oswald text-[15vw] uppercase leading-[0.75] tracking-tighter text-white/5">
          KONSEPTHIVE
        </h2>
      </div>
    </footer>
  );
}
