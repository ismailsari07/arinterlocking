import { AwardIcon, CheckCircle2, ClockIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50">
      <div className="container flex flex-col justify-center items-center gap-6 text-center py-16">
        <h2 className="text-5xl font-semibold mb-3">Featured Projects</h2>
        <p className="lg:w-1/2 text-lg text-muted-foreground">
          See our recent work and the quality craftsmanship that sets us apart.
        </p>

        <div className="flex max-md:flex-col items-center gap-3 md:gap-10 mb-3">
          <div className="flex items-center gap-1">
            <AwardIcon size={20} className="text-green-600" />
            <span className="font-semibold">Premium Materials</span>
          </div>

          <div className="flex items-center gap-1">
            <ClockIcon size={20} className="text-green-600" />
            <span className="font-semibold">Timely Delivery</span>
          </div>

          <div className="flex items-center gap-1">
            <CheckCircle2 size={20} className="text-green-600" />
            <span className="font-semibold">Guaranteed Work</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Image
            src={"/gallery5.jpeg"}
            alt="Gallery Image"
            width={300}
            height={200}
            className="rounded-xl shadow-lg border-2 border-gray-300"
          />
          <Image
            src={"/gallery10.jpeg"}
            alt="Gallery Image"
            width={300}
            height={200}
            className="rounded-xl shadow-lg border-2 border-gray-300"
          />
          <Image
            src={"/gallery13.jpeg"}
            alt="Gallery Image"
            width={300}
            height={200}
            className="rounded-xl shadow-lg border-2 border-gray-300"
          />
          <Image
            src={"/gallery20.jpeg"}
            alt="Gallery Image"
            width={300}
            height={200}
            className="rounded-xl shadow-lg border-2 border-gray-300"
          />
          <Image
            src={"/gallery21.jpeg"}
            alt="Gallery Image"
            width={300}
            height={200}
            className="rounded-xl shadow-lg border-2 border-gray-300"
          />
          <Image
            src={"/gallery18.jpeg"}
            alt="Gallery Image"
            width={300}
            height={200}
            className="rounded-xl shadow-lg border-2 border-gray-300"
          />
        </div>

        <Button variant={"secondary"} size={"lg"} className="mt-8">
          <Link href="/gallery">View Full Gallery</Link>
        </Button>
      </div>
    </section>
  );
}

