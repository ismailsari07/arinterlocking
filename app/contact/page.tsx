"use client";
import { LocationEditIcon, MailboxIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import QuoteForm from "@/components/QuoteForm";

export default function Page() {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      // bazen ease'in string tipi eski sürümlerde şikayet eder:
      // istersen alttaki satırı cubic-bezier'e çevir:
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      // veya geçici: ease: "easeOut" as any
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gray-50"
    >
      <div className="bg-[#e5e4ff] flex flex-col items-center gap-5 lg:text-center py-20">
        <motion.p
          variants={item}
          className="text-5xl text-gray-800 font-bold max-md:text-center"
        >
          Transform Your Outdoor Space <br className="max-md:hidden" />
          <span className="text-blue-900">Contact Us Today</span>
        </motion.p>
        <motion.p
          variants={item}
          className="md:w-1/2 text-lg text-gray-500 max-md:text-center"
        >
          Ready to enhance your property with professional landscaping and hardscaping?
          Contact our expert team for a free consultation and quote.
        </motion.p>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center py-28">
        {/* Contact Information */}
        <div className="md:w-1/5 flex flex-col items-center gap-3">
          <motion.div
            variants={item}
            className="flex gap-2 items-center text-green-300"
          >
            <PhoneIcon className="size-6" />
            <a href="tel:+16477097219">(647) 709-7219</a>
          </motion.div>

          <motion.div variants={item} className="flex gap-2 items-center">
            <MailboxIcon className="size-6" />
            <a href="mailto:info@arinterlocking.ca">
              info@arinterlocking.ca
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-2 items-center">
            <LocationEditIcon className="size-6" />{" "}
            <a href="#">Greater Toronto Area, Ontario</a>
          </motion.div>
        </div>

        <motion.hr variants={item} className="w-4/5 md:w-2/5 border-gray-300" />

        {/* Header Quote Form */}
        <motion.div
          variants={item}
          className="w-[95%] md:w-2/5 flex flex-col justify-between items-stretch gap-4 p-6 bg-gray-100 shadows-2xl shadow-slate-200 border-2 border-gray-200 rounded-2xl text-[#141327]"
        >
          <h3 className="text-2xl font-bold mb-6">Request Your Free Estimate</h3>

          <QuoteForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
