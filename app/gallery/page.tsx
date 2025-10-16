'use client';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GalleryDialog from "@/components/GalleryDialog";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const handleImageClick = (imageId: number) => {
    setSelectedImage(imageId);
    setIsDialogOpen(true);
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
                    Interlocking and Landscaping
                </motion.span>
                <motion.p
                    variants={item}
                    className="text-5xl text-gray-800 font-bold max-md:text-center"
                >
                    Featured Projects
                </motion.p>
                <motion.p
                    variants={item}
                    className="md:w-1/2 text-lg text-gray-500 max-md:text-center"
                >
                    See our recent work and the quality craftsmanship that sets us apart.
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
                className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 py-28 px-4 md:px-40 mx-auto"
            >
                {[3, 4, 5, 8, 10, 1, 2, 7, 9, 11, 6, 13, 14, 15, 18, 17, 20, 21, 19, 12, 16].map((id) => (
                    <motion.div
                        key={id}
                        variants={item}
                        className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow"
                    >
                            <Image
                                key={id}
                                src={`/gallery${id}.jpeg`}
                                alt={`Gallery Image ${id}`}
                                width={300}
                                height={200}
                                className="w-full h-auto rounded-xl shadow-lg border-2 border-gray-300 cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => handleImageClick(id)}
                            />
                    </motion.div>
                ))}
            </motion.div>

            {selectedImage && (
                <GalleryDialog
                    imageId={selectedImage}
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                />
            )}
        </>
    )
}