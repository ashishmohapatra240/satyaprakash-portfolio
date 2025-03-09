import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Design from "./components/sections/Design";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Design />
      <Testimonials />
    </main>
  );
}
