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
          <p>
            Landscaping
            </p>
          {/* TODO: fix link*/}
          <p>
          Interlocking
</p>
          {/* TODO: fix link*/}
          <p>
            Hardscaping
            </p>
        </div>
        <div className="flex flex-col gap-3 max-md:text-center">
          <div className="text-lg font-semibold">Company</div>
          <Link href={"/about"} className="text-gray-400">
            About
          </Link>
          <Link href={"/contact"} className="text-gray-400">
            Contact
          </Link>
          <Link href={"/service"} className="text-gray-400">
            Services
          </Link>
        </div>
        <div className="flex flex-col gap-3 max-md:text-center">
          <div className="text-lg font-semibold">Company</div>
          {/* TODO: fix contact information*/}
          <div className="text-gray-400">
            <a href="tel:+16477097219" aria-label="Call (647) 709-7219">(647) 709-7219</a>
          </div>
          <div className="text-gray-400">
            <a href="mailto:info@arinterlocklandscape.ca">
              info@arinterlocklandscape.ca
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
