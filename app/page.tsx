import HeroNew from "./components/sections/HeroNew";
import DesignWork from "./components/sections/DesignWork";
import UIGallery from "./components/sections/UIGallery";
import TestimonialsNew from "./components/sections/TestimonialsNew";
import Scribbles from "./components/sections/Scribbles";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto bg-white">
      <div className="flex flex-col gap-[140px] pt-[50px] pb-[140px]">
        <HeroNew />
        <DesignWork />
        <UIGallery />
        <TestimonialsNew />
        <Scribbles />
      </div>
    </main>
  );
}
