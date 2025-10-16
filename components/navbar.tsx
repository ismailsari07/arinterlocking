import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
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
    </nav>
  );
}
