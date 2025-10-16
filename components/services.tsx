import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { services } from "@/data/services";

export default function Services() {
  return (
    
        <section id="services" className="bg-gray-50">
        <div className="container flex flex-col justify-center items-center gap-6 text-center py-8 md:py-16">
      <h2 className="text-5xl font-semibold mb-3">
        Transform Your <span className="text-green-700">Outdoor Space</span>
      </h2>
      <p className="lg:w-1/2 text-lg text-muted-foreground">
        From stunning driveways to complete landscape transformations, we
        deliver premium results that enhance your property's value and beauty.
      </p>

      <div className="flex flex-col md:flex-row gap-3 justify-between">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full h-auto flex flex-col gap-2 p-2 justify-between items-start text-start border border-gray-300 rounded-2xl"
          >
            <div className="w-full mb-3">
              <Image
                src={service.imageUrl}
                alt={"Services"}
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p>{service.description}</p>
            <div className="flex flex-col items-start gap-1 mt-2">
              {service.items.map((item, index) => (
                <div key={index} className="flex gap-1 items-center">
                  <CheckIcon className="text-green-500" />{" "}
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-gray-500">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
