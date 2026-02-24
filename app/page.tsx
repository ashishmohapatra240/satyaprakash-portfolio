import Hero from "./components/sections/Hero";
import GlowSection from "./components/sections/GlowSection";
import Work from "./components/sections/Work";
import Gallery from "./components/sections/Gallery";
import TextReveal from "./components/sections/TextReveal";
import Design from "./components/sections/Design";
import ParallaxSection from "./components/ParallaxSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-0">
      <ParallaxSection speed={0.06}>
        <Hero />
      </ParallaxSection>
      {/* <GlowSection /> */}
      {/* <div style={{ height: "50vh" }} /> */}
      <Work />
      <Gallery />
      <TextReveal />
      {/* <ParallaxSection speed={0.14}>
        <Design />
      </ParallaxSection> */}
      {/* <Testimonials /> */}
    </main>
  );
}
