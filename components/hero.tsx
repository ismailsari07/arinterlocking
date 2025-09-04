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

export default function Hero() {
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
    <header className="w-full flex flex-col items-center gap-6 py-16 text-center lg:gap-12 lg:py-32">
      <div className="flex max-md:flex-col justify-center items-center gap-6 text-start">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-3">
          <h1 className="text-7xl font-bold">
            Precision <br /> Interlocking & <br /> Landscaping, <br />
            <span className="text-green-600">Built to Last</span>
          </h1>
          <p className="text-gray-400 text-xl">
            New projects and repairs with premium materials and expert
            craftsmanship across GTA.
          </p>
          <Button variant={"secondary"} size={"lg"}>
            Call Now
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 p-4 border border-gray-200 rounded-xl">
          <div className="mb-2">
            <h3 className="text-2xl font-semibold text-start">
              Get your Free Quote
            </h3>
            <p className="text-sm text-muted-foreground text-start">
              Tell us about your project and we'll provide a detailed estimate
            </p>
          </div>
          {/* Full Name */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" placeholder="Name" />
          </div>

          {/* Email */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>

          {/* Phone */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input type="tel" id="phone" placeholder="Phone Number" />
          </div>

          {/* Services section begins */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="services">Services</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between"
                >
                  {value
                    ? services.find((service) => service.value === value)?.label
                    : "Select service..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Command>
                  <CommandInput
                    placeholder="Search service..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No service found.</CommandEmpty>
                    <CommandGroup>
                      {services.map((service) => (
                        <CommandItem
                          key={service.value}
                          value={service.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue,
                            );
                            setOpen(false);
                          }}
                        >
                          {service.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === service.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          {/* Services section ends */}

          {/* About Section */}
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="about">About Your Project</Label>
            <Textarea id="about" placeholder="Tell us about your project..." />
            <p className="text-muted-foreground text-sm">
              Your message will be copied to the support team.
            </p>
          </div>

          <Button variant={"default"} className="mt-2">
            Submit
          </Button>
        </div>
      </div>
      <div className="w-full h-auto">
        <Image
          alt="Hero Image"
          src={"/hero.jpg"}
          width={4000}
          height={2600}
          className="rounded-2xl border-4 border-gray-300 object-cover w-full h-auto brightness-95"
        />
      </div>
    </header>
  );
}
