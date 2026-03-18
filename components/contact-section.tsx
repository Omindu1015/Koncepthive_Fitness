"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = FormData;

type Status = "idle" | "submitting" | "success";

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialErrors: FormErrors = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [status, setStatus] = useState<Status>("idle");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = (field: keyof FormData) => {
    setErrors((prev) => {
      const next = { ...prev };
      if (!formData[field].trim()) {
        next[field] = "This field is required";
      } else if (field === "email" && !validateEmail(formData.email)) {
        next.email = "Please enter a valid email address";
      } else {
        next[field] = "";
      }
      return next;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {
      name: !formData.name.trim() ? "Name is required" : "",
      email: !formData.email.trim()
        ? "Email is required"
        : !validateEmail(formData.email)
          ? "Valid email required"
          : "",
      subject: !formData.subject.trim() ? "Subject is required" : "",
      message: !formData.message.trim() ? "Message is required" : "",
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData(initialFormData);
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  const baseInputClass =
    "w-full border-0 border-b-2 bg-transparent px-0 py-2 font-inter font-medium text-gray-900 transition-colors focus:outline-none focus:ring-0 dark:text-white";

  return (
    <section id="contact" className="relative bg-cream py-24 dark:bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            GET IN TOUCH
          </h2>
          <p className="text-lg font-inter text-gray-600 dark:text-gray-400">
            We create personalized training plans and high-intensity programs that help
            you build strength, improve health, and stay consistent.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="flex flex-col gap-0 border border-gray-100 bg-white p-2 shadow-xl dark:border-dark-border dark:bg-dark-card md:p-4 lg:flex-row">
            <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-gold-hover to-gold p-8 text-white md:p-12 lg:w-2/5">
              <div className="relative z-10">
                <h3 className="mb-4 font-inter text-2xl font-semibold">Contact Information</h3>
                <p className="mb-12 font-inter leading-relaxed text-white/90">
                  Reach out to book a consultation, ask about memberships, or get help
                  choosing the right training plan.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 shrink-0 text-white" />
                    <div className="space-y-1 font-inter text-sm">
                      <p>+94 77 546 7890</p>
                      <p>+94 77 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 shrink-0 text-white" />
                    <p className="font-inter text-sm">omindu@koncepthivefitness.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 shrink-0 text-white" />
                    <p className="font-inter text-sm">Kesbewa, Colombo</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/20 blur-sm" />
            </div>

            <div className="relative flex-1 p-8 md:p-12">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-r-2xl bg-white p-8 text-center dark:bg-dark-card"
                >
                  <CheckCircle className="mb-6 h-20 w-20 text-gold" />
                  <h3 className="mb-2 font-oswald text-3xl font-bold text-gray-900 dark:text-white">
                    MESSAGE SENT
                  </h3>
                  <p className="font-inter text-gray-600 dark:text-gray-400">
                    We&apos;ve received your inquiry. A coach will be in touch within 24
                    hours.
                  </p>
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="mb-1 block font-inter text-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                      onBlur={() => handleBlur("name")}
                      placeholder="Omindu Perera"
                      className={`${baseInputClass} ${
                        errors.name
                          ? "border-red-500"
                          : "border-gray-200 dark:border-dark-border focus:border-gold dark:focus:border-gold"
                      }`}
                    />
                    {errors.name ? (
                      <p className="absolute -bottom-5 mt-1 font-inter text-xs text-red-500">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="mb-1 block font-inter text-xs font-medium text-gray-500 dark:text-gray-400"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                      onBlur={() => handleBlur("email")}
                      placeholder="omindu@gmail.com"
                      className={`${baseInputClass} ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-200 dark:border-dark-border focus:border-gold dark:focus:border-gold"
                      }`}
                    />
                    {errors.email ? (
                      <p className="absolute -bottom-5 mt-1 font-inter text-xs text-red-500">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="mb-1 block font-inter text-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    Your Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, subject: event.target.value }))
                    }
                    onBlur={() => handleBlur("subject")}
                    placeholder="I want to get started"
                    className={`${baseInputClass} ${
                      errors.subject
                        ? "border-red-500"
                        : "border-gray-200 dark:border-dark-border focus:border-gold dark:focus:border-gold"
                    }`}
                  />
                  {errors.subject ? (
                    <p className="absolute -bottom-5 mt-1 font-inter text-xs text-red-500">
                      {errors.subject}
                    </p>
                  ) : null}
                </div>

                <div className="relative">
                  <label htmlFor="message" className="mb-1 block font-inter text-xs font-medium text-gold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, message: event.target.value }))
                    }
                    onBlur={() => handleBlur("message")}
                    placeholder="Write your message"
                    className={`${baseInputClass} resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-gold focus:border-gold dark:focus:border-gold"
                    }`}
                  />
                  {errors.message ? (
                    <p className="absolute -bottom-5 mt-1 font-inter text-xs text-red-500">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="h-auto min-w-36 px-8 py-3 font-inter font-medium text-white disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
