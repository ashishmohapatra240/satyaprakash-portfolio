import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Marquee from "./components/sections/Marquee";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Footer />
    </main>
  );
}
