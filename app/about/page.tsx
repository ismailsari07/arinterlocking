"use client";
import { Button } from "@/components/ui/button";
import {
  CircleCheckBigIcon,
  Clock2Icon,
  EarthIcon,
  LocationEditIcon,
  PersonStandingIcon,
  ShieldIcon,
} from "lucide-react";
import { motion } from "motion/react";
import type { Variants } from "motion";
import Link from "next/link";

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
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#e5e4ff] flex flex-col items-center gap-5 lg:text-center py-20"
      >
        <motion.span
          variants={item}
          className={`px-3 py-1 rounded-2xl bg-slate-100 text-blue-800 text-sm flex items-center gap-2`}
        >
          � Professional Landscaping & Hardscaping
        </motion.span>
        <motion.p
          variants={item}
          className="text-5xl text-gray-800 font-bold max-md:text-center"
        >
          Transform Your Outdoor Space with <br />
          <span className="text-blue-900">Expert Craftsmanship</span>
        </motion.p>
        <motion.p
          variants={item}
          className="md:w-1/2 text-lg text-gray-500 max-md:text-center"
        >
          We are Greater Toronto Area's premier landscaping and hardscaping
          specialists, delivering exceptional outdoor living spaces through
          expert design and installation of interlocking stone, patios,
          driveways, and custom stonework.
        </motion.p>
        <motion.div
          variants={item}
          className="flex justify-center items-center gap-3"
        >
          <Link href={"/contact"}>
            <Button variant={"secondary"}>Get Your Quote Today</Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row justify-center items-center gap-5 py-28 px-4 md:px-40"
      >
        <div className="md:w-2/5">
          <motion.h3
            variants={item}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Our Story
          </motion.h3>
          <motion.p variants={item} className="text-gray-700">
            With years of experience in the Greater Toronto Area, AR
            Interlocking began with a clear vision: to create stunning, durable
            outdoor spaces that enhance both the beauty and value of our
            clients' properties. What started as a specialized interlocking
            service has grown into a comprehensive landscaping and hardscaping
            company.
          </motion.p>{" "}
          <br />
          <motion.p variants={item} className="text-gray-700">
            We understood that homeowners needed more than just basic
            landscaping—they needed a partner who could bring their outdoor
            dreams to life with precision and artistry. Today, we've
            successfully completed thousands of projects, from elegant driveways
            and patios to custom stone features and complete outdoor living
            spaces.
          </motion.p>{" "}
          <br />
          <motion.p variants={item} className="text-gray-700">
            Our expertise covers all aspects of hardscaping and landscaping,
            including interlocking stone installation, natural stone work,
            retaining walls, and custom outdoor features. We pride ourselves on
            using premium materials and delivering exceptional craftsmanship.
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="md:w-2xl bg-[#e5e4ff] flex flex-wrap justify-center gap-5 rounded-2xl p-5"
        >
          <motion.div className="w-72 h-60 p-3 bg-white flex flex-col gap-3 justify-center rounded-2xl items-center text-center">
            <div className="p-5 bg-blue-100 rounded-full">
              <LocationEditIcon className="size-12 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold">Design Excellence</h4>
            <p className="text-gray-700">Custom outdoor space design</p>
          </motion.div>

          <motion.div
            variants={item}
            className="w-72 h-60 p-3 bg-white flex flex-col gap-3 justify-center rounded-2xl items-center text-center"
          >
            <div className="p-5 bg-green-100 rounded-full">
              <ShieldIcon className="size-12 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold">Quality Guaranteed</h4>
            <p className="text-gray-700">Premium materials & workmanship</p>
          </motion.div>

          <motion.div
            variants={item}
            className="w-72 h-60 p-3 bg-white flex flex-col gap-3 justify-center rounded-2xl items-center text-center"
          >
            <div className="p-5 bg-slate-100 rounded-full">
              <PersonStandingIcon className="size-12 text-slate-600" />
            </div>
            <h4 className="text-xl font-semibold">Expert Team</h4>
            <p className="text-gray-700">Skilled hardscaping craftsmen</p>
          </motion.div>

          <motion.div
            variants={item}
            className="w-72 h-60 p-3 bg-white flex flex-col gap-3 justify-center rounded-2xl items-center text-center"
          >
            <div className="p-5 bg-yellow-100 rounded-full">
              <Clock2Icon className="size-12 text-yellow-600" />
            </div>
            <h4 className="text-xl font-semibold">Timely Completion</h4>
            <p className="text-gray-700">Projects finished on schedule</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="py-28 px-2 md:px-40 bg-gray-50">
        <div className="flex flex-col items-center text-center gap-5">
          <h3 className="text-4xl text-gray-800 font-bold">
            Our Comprehensive Services
          </h3>
          <p className="text-lg text-gray-600 md:w-1/2">
            From driveways to complete outdoor living spaces, we offer
            full-service landscaping and hardscaping solutions. Our attention to
            detail and commitment to quality ensures lasting beauty for your
            property.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center mt-20">
          {/* Hardscaping Services Card */}
          <div className="shadow-2xl md:w-1/2 rounded-2xl">
            <div className="bg-red-100 flex justify-center items-center gap-5 p-5 rounded-t-2xl">
              <div className="p-5 rounded-full bg-red-700">
                <EarthIcon className="size-8 md:size-12 text-white" />
              </div>
              <div>
                <h4 className="text-2xl text-gray-800 font-bold">
                  Hardscaping Services
                </h4>
                <p className="text-lg text-gray-500">
                  Professional interlocking and stonework solutions
                </p>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-start gap-4 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div>
                  <div className="font-semibold">Interlocking Stone</div>
                  <div className="text-gray-700">
                    Custom driveways, walkways, and patios with premium pavers
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div>
                  <div className="font-semibold">Retaining Walls</div>
                  <div className="text-gray-700">
                    Engineered walls for both function and beauty
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div>
                  <div className="font-semibold">Custom Features</div>
                  <div className="text-gray-700">
                    Fire pits, outdoor kitchens, and stone steps
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div>
                  <div className="font-semibold">Surface Preparation</div>
                  <div className="text-gray-700">
                    Professional grading and base installation
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-2xl md:w-1/2 rounded-2xl">
            <div className="bg-blue-100 flex justify-center items-center gap-5 p-5 rounded-t-2xl">
              <div className="p-5 rounded-full bg-blue-700">
                <EarthIcon className="size-8 md:size-12 text-white" />
              </div>
              <div>
                <h4 className="text-2xl text-gray-800 font-bold">
                  Landscaping Services
                </h4>
                <p className="text-lg text-gray-500">
                  Complete outdoor transformation solutions
                </p>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-start gap-4 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div>
                  <div className="font-semibold">Garden Design</div>
                  <div className="text-gray-700">
                    Custom landscape design and planning
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div>
                  <div className="font-semibold">Planting Services</div>
                  <div className="text-gray-700">
                    Trees, shrubs, and perennial gardens
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div>
                  <div className="font-semibold">Lawn Care</div>
                  <div className="text-gray-700">
                    Sodding, seeding, and lawn maintenance
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div>
                  <div className="font-semibold">Outdoor Lighting</div>
                  <div className="text-gray-700">
                    Landscape lighting design and installation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
