import type { ServiceBlock } from "@/types/service";

export const services: ServiceBlock[] = [
  {
    id: "hardscaping",
    imageUrl: "/hardscaping.jpg",
    title: "Hardscaping",
    description: "Premium stone and interlocking solutions for lasting beauty",
    items: [
      { title: "Driveways", description: "Durable and beautiful entrances" },
      { title: "Patios", description: "Perfect outdoor entertaining" },
      { title: "Walkways", description: "Safe and attractive pathways" },
      { title: "Retaining Walls", description: "Strong functional support" },
    ],
  },
  {
    id: "specialty-services",
    imageUrl: "/stone-planters.jpg",
    title: "Specialty Services",
    description: "Professional restoration and protective treatments",
    items: [
      { title: "Sealing", description: "Long-lasting protection" },
      { title: "Epoxy Floors", description: "Premium garage" },
      { title: "Stone Planters", description: "Elegant landscape features" },
      { title: "Natural Stones", description: "Timeless aesthetic appeal" },
    ],
  },
  {
    id: "landscaping",
    imageUrl: "/landscaping.jpg",
    title: "Landscaping",
    description: "Complete outdoor transformations with expert planting",
    items: [
      { title: "Sods", description: "Instant green lawn solution" },
      { title: "Planting", description: "Professional landscape design" },
      { title: "Topsoil", description: "Premium growing foundation" },
      { title: "Mulch", description: "Beautiful protective coverage" },
    ],
  },
];
