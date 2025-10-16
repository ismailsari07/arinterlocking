"use client";
import {
  CircleCheckBigIcon,
  HomeIcon,
  ShoppingBagIcon,
  StoreIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Service() {
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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={item}
        className="bg-[#e5e4ff] flex flex-col items-center gap-5 lg:text-center py-20"
      >
        <span
          className={`px-3 py-1 rounded-2xl bg-slate-100 text-blue-800 text-sm flex items-center gap-2`}
        >
          🏡 Professional Outdoor Space Solutions
        </span>
        <p className="text-5xl text-gray-800 font-bold">Our Services</p>
        <p className="text-lg text-gray-500 max-md:text-center">
          From elegant interlocking driveways to custom landscaping designs, we create
          <br className="max-md:hidden" /> beautiful and functional outdoor spaces that last.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className="flex flex-col gap-5 lg:text-center py-28 max-md:px-2"
      >
        <p className="text-4xl text-gray-800 font-bold">
          Professional Landscaping & Hardscaping
        </p>
        <p className="text-gray-500 mb-12">
          Expert design and installation services for your outdoor living spaces
        </p>

        <div className="w-full flex flex-col md:flex-row gap-5 justify-center">
          {/* Service 1 */}
          <motion.div
            variants={item}
            className="w-1/4 p-4 md:p-8 border-2 border-gray-300 rounded-xl shadow-xl"
          >
            <div className="w-fit p-4 bg-stone-100 rounded-xl">
              <StoreIcon className="size-6 text-stone-800" />
            </div>
            <h3 className="text-2xl font-semibold text-start">
              Interlocking Services
            </h3>
            <p className="text-gray-500 mb-6 text-start">
              Premium interlocking stone installation for driveways and walkways
            </p>

            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-sm text-green-500 size-6" />
                <div className="text-gray-700">Custom driveway design</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Walkway installation</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Patio construction</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Premium materials</div>
              </div>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={item}
            className="w-1/4 p-4 md:p-8 border-2 border-gray-300 rounded-xl shadow-xl"
          >
            <div className="w-fit p-4 bg-green-100 rounded-xl">
              <ShoppingBagIcon className="size-6 text-green-800" />
            </div>
            <h3 className="text-2xl font-semibold text-start">
              Landscaping
            </h3>
            <p className="text-gray-500 mb-6">
              Complete landscape design and maintenance services
            </p>

            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-sm text-green-500 size-6" />
                <div className="text-gray-700">Garden design</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Plant selection</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Lawn care</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Maintenance plans</div>
              </div>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            variants={item}
            className="w-1/4 p-4 md:p-8 border-2 border-gray-300 rounded-xl shadow-xl"
          >
            <div className="w-fit p-4 bg-blue-100 rounded-xl">
              <HomeIcon className="size-6 text-blue-800" />
            </div>
            <h3 className="text-2xl font-semibold text-start">
              Hardscaping Features
            </h3>
            <p className="text-gray-500 mb-6 text-start">
              Custom stone features and outdoor living spaces
            </p>

            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-sm text-green-500 size-6" />
                <div className="text-gray-700">Retaining walls</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Outdoor kitchens</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Fire pits</div>
              </div>

              <div className="flex items-start gap-2 text-start">
                <CircleCheckBigIcon className="text-green-500 size-6" />
                <div className="text-gray-700">Stone steps</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
