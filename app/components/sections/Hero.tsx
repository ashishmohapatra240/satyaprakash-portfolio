"use client";
import Image from "next/image";

export default function Hero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex flex-col relative px-4 sm:px-8 md:px-16 lg:px-36">
      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-20 md:pt-0">
        {/* Left content */}
        <div className="space-y-4 md:space-y-6 w-full md:w-1/2 text-center md:text-left">
          <div className="space-y-3 md:space-y-4">
            <p className="text-base sm:text-lg">Hey I&apos;m Satya</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-tight text-[#20233D] mx-auto md:mx-0 max-w-[90%] md:max-w-none">
              building
              <br />
              products &<br />
              design systems
            </h1>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="rounded-3xl relative flex items-center justify-center">
            <Image
              src="/images/hero.png"
              alt="Mobile preview"
              width={300}
              height={600}
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto"
              priority
            />
          </div>

          <p className="text-[#9099A5] text-base sm:text-lg text-center mt-4 md:mt-6">
            Getting lost in realm of design is what i ❤️
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="h-24 relative">
        {/* Bottom Left Scroll Button */}
        <div className="absolute bottom-8 left-0">
          <div className="flex items-center space-x-2 text-sm">
            <button 
              onClick={scrollToNextSection}
              className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <span className="transform group-hover:translate-y-1 transition-transform">
                ↓
              </span>
            </button>
            <span className="text-gray-500">Scroll down</span>
          </div>
        </div>

        {/* Bottom Right Text */}
        <div className="absolute bottom-11 right-0 text-sm text-gray-500">
          Designing since 2019
        </div>
      </div>
    </section>
  );
}
