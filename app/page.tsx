import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Design from "./components/sections/Design";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-0">
      <Hero />
      <About />
      <Design />
      {/* <Testimonials /> */}
    </main>
  );
}
