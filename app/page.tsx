import Hero02 from "./components/sections/Hero02";
import GlowSection from "./components/sections/GlowSection";
import Work from "./components/sections/Work02";
import Gallery from "./components/sections/Gallery";
import HomeAbout from "./components/sections/HomeAbout";
import Design from "./components/sections/Design";
import ParallaxSection from "./components/ParallaxSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-5 md:px-8 lg:px-20">
      <ParallaxSection speed={0.06}>
        <Hero02 />
      </ParallaxSection>
      {/* <GlowSection /> */}
      {/* <div style={{ height: "50vh" }} /> */}
      <div style={{ height: "40vh" }} />
      <Work />
      <Gallery />
      <HomeAbout />
      {/* <ParallaxSection speed={0.14}>
        <Design />
      </ParallaxSection> */}
      {/* <Testimonials /> */}
    </main>
  );
}
