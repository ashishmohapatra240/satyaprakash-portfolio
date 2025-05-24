import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Design from "./components/sections/Design";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />
      <About />
      <Design />
      {/* <Testimonials /> */}
    </main>
  );
}
