import Hero02 from "./components/sections/Hero02";
import Work from "./components/sections/Work02";
import Gallery from "./components/sections/Gallery";
import HomeAbout from "./components/sections/HomeAbout";
import ParallaxSection from "./components/ParallaxSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-5 md:px-8 lg:px-20 overflow-x-clip">
      <ParallaxSection speed={0.06}>
        <Hero02 />
      </ParallaxSection>
      {/* <GlowSection /> */}
      {/* <div style={{ height: "50vh" }} /> */}
      <div className="hidden md:block" style={{ height: "40vh" }} />
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
