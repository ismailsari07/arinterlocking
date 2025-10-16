import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-28 py-8 px-10 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-18">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold max-md:text-center">
            Ar Interlocking & Landscaping
          </div>
          <div className="text-gray-400 max-md:text-center">
            We build durable, beautiful outdoor spaces that enhance your home’s{" "}
            <br className="max-md:hidden" />
            value, comfort, and lasting appeal.
          </div>
          <div className="flex gap-3 justify-center md:justify-start items-center">
            <Button variant={"ghost"} size={"icon"}>
              <TwitterIcon />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <InstagramIcon />
            </Button>
            <Button variant={"ghost"} size={"icon"}>
              <FacebookIcon />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-md:text-center">
          <div className="text-lg font-semibold">Services</div>
          {/* TODO: fix link*/}
          <Link href={"/services/residential-moving"} className="text-gray-400">
            Landscaping
          </Link>
          {/* TODO: fix link*/}
          <Link href={"/services/commercial-moving"} className="text-gray-400">
            Specialty Services
          </Link>
          {/* TODO: fix link*/}
          <Link href={"/services/storage-service"} className="text-gray-400">
            Hardscaping
          </Link>
        </div>
        <div className="flex flex-col gap-3 max-md:text-center">
          <div className="text-lg font-semibold">Company</div>
          <Link href={"/about"} className="text-gray-400">
            About
          </Link>
          <Link href={"/contact"} className="text-gray-400">
            Contact
          </Link>
          <Link href={"/services"} className="text-gray-400">
            Services
          </Link>
        </div>
        <div className="flex flex-col gap-3 max-md:text-center">
          <div className="text-lg font-semibold">Company</div>
          {/* TODO: fix contact information*/}
          <div className="text-gray-400">
            <a href="tel:+18668626060">866 862 6060</a>
          </div>
          <div className="text-gray-400">
            <a href="tel:+16476002353">647 600 2353</a>
          </div>
          <div className="text-gray-400">
            <a href="mailto:info@metromovingstorage.ca">
              info@metromovingstorage.ca
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-700" />
      <h3 className="text-center text-gray-400 mt-8">
        © Ar Interlocking And Landscaping. All rights reserved.
      </h3>
    </footer>
  );
}
