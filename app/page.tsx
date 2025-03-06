import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Design from "./components/sections/Design";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Design />
      <Testimonials />
      <Footer />
    </main>
  );
}
