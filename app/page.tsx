import Gallery from "@/components/Gallery";
import Hero from "@/components/hero";
import ReadyToStart from "@/components/ReadyToStart";
import Services from "@/components/services";
import ServingArea from "@/components/ServingArea";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <ServingArea />
      <Services />
      <ReadyToStart />
    </main>
  );
}
