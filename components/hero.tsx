"use client";
import Image from "next/image";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Textarea } from "./ui/textarea";
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
      // bazen ease'in string tipi eski sürümlerde şikayet eder:
      // istersen alttaki satırı cubic-bezier'e çevir:
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },

      // veya geçici: ease: "easeOut" as any
    },
  };

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const services = [
    { value: "driveway", label: "Driveway" },
    { value: "patio", label: "Patio" },
    { value: "walkway", label: "Walkway" },
    { value: "stone-planter-boxes", label: "Stone Planter Boxes" },
    { value: "steps", label: "Steps" },
    { value: "retaining-walls", label: "Retaining Walls" },
    { value: "flagstones", label: "Flagstones" },
    { value: "natural-stones", label: "Natural Stones" },
    { value: "sealing", label: "Sealing" },
    {
      value: "epoxy-garage-floor-basement",
      label: "Epoxy Garage Floor & Basement",
    },
    { value: "garage-repair", label: "Garage Repair" },
    { value: "sods", label: "Sods" },
    { value: "planting", label: "Planting" },
    { value: "topsoil", label: "Topsoil" },
    { value: "triple-mix", label: "Triple Mix" },
    { value: "mulch", label: "Mulch" },
  ];

  return (

    <motion.header 
      className="container w-full flex flex-col items-center gap-6 py-16 text-center lg:gap-12 lg:py-32"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex max-md:flex-col justify-center items-center gap-6 text-start">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-3">
          <motion.h1 variants={item} className="text-7xl font-bold">
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
        <motion.div variants={item} className="w-full md:w-1/2 flex flex-col gap-4 p-4 border border-gray-200 rounded-xl">
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
