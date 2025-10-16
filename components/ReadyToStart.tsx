import { CalendarIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ReadyToStart() {
  return (
    <section id="ready-to-start" className="bg-green-600">
      <div className="container flex flex-col justify-center items-center gap-6 text-center py-8 md:py-16 text-white">
        <h2 className="text-5xl font-semibold mb-3">
          Ready to Start Your Project?
        </h2>
        <p className="lg:w-2/3 text-center text-lg">
          Get your free, no-obligation quote today and see why homeowners across
          the GTA trust AR Interlocking.
        </p>
        <div className="flex justify-center items-center gap-4">
          <Link href="/contact">
            <Button variant={"secondary"} size={"lg"}>
              <CalendarIcon /> Get a Free Quote
            </Button>
          </Link>
          <a href="tel:+16477097219" aria-label="Call (647) 709-7219">
            <Button variant={"secondary"} size={"lg"}>
              <PhoneCallIcon /> Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
