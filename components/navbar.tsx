"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="container flex justify-between items-center py-3 md:py-5">
      <Link href={"/"} className="text-xl">
        AR Interlocking
      </Link>
      <div className="hidden md:flex justify-center items-center gap-3">
        <Link href={"about"}>About</Link>
        <Link href={"contact"}>Contact</Link>
        <Link href={"service"}>Service</Link>
        <Link href={"gallery"}>Gallery</Link>
      </div>

      <div className="hidden md:flex justify-center items-center gap-3">
        <Link href="/contact">
          <Button variant={"secondary"} size={"lg"}>
            Get a Free Quote
          </Button>
        </Link>
      </div>

      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">Menu</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-center font-bold text-xl">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <Link href={"/service"} className="grid gap-3">
                <Button variant={"ghost"} onClick={() => setOpen(false)}>
                  Services
                </Button>
              </Link>
              <Link href={"/about"} className="grid gap-3">
                <Button variant={"ghost"} onClick={() => setOpen(false)}>
                  About
                </Button>
              </Link>
              <Link href={"/contact"} className="grid gap-3">
                <Button variant={"ghost"} onClick={() => setOpen(false)}>
                  Contact
                </Button>
              </Link>
              <Link href={"/gallery"} className="grid gap-3">
                <Button variant={"ghost"} onClick={() => setOpen(false)}>
                  Gallery
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
