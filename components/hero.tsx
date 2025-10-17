"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "motion/react";
import type { Variants } from "motion";
import QuoteForm from "./QuoteForm";

export default function Hero() {
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
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.header
      className="container flex flex-col items-center gap-6 py-16 text-center lg:gap-12 lg:py-32"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex max-md:flex-col justify-center items-center gap-6 text-start">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-3 text-center md:text-start">
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold">
            Precision <br /> Interlocking & <br /> Landscaping, <br />
            <span className="text-green-600">Built to Last</span>
          </motion.h1>
          <motion.p variants={item} className="text-gray-400 text-xl">
            New projects and repairs with premium materials and expert
            craftsmanship across GTA.
          </motion.p>
          <motion.div variants={item} className="w-full md:w-auto">
            <a href="tel:+16477097219" aria-label="Call (647) 709-7219">
              <Button variant={"secondary"} size={"lg"}>
                Call Now
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={item}
          className="w-full md:w-1/2 flex flex-col gap-4 p-4 border border-gray-200 rounded-xl"
        >
          <QuoteForm />
        </motion.div>
      </div>
      <motion.div variants={item} className="w-full h-auto">
        <Image
          alt="Hero Image"
          src={"/hero.jpg"}
          width={4000}
          height={2600}
          className="rounded-2xl border-4 border-gray-300 object-cover w-full h-auto brightness-95"
        />
      </motion.div>
    </motion.header>
  );
}
