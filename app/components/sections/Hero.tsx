import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-10 mx-auto relative">
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-4">
          <p className="text-lg">Hey I&apos;m Satya</p>
          <h1 className="text-5xl md:text-7xl font-medium leading-tight text-[#20233D]">
            building
            <br />
            products &<br />
            design systems
          </h1>
        </div>

        {/* Circular Scroll Button */}
        <div className="flex items-center space-x-2 text-sm absolute bottom-0 left-0 px-36 py-8">
          <button className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
            <span className="transform group-hover:translate-y-1 transition-transform">
              ↓
            </span>
          </button>
          <span className="text-gray-500">Scroll down</span>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="mt-10 md:mt-0 relative">
        <div className=" rounded-3xl relative flex items-center justify-center">
          <Image
            src="/images/hero.png"
            alt="Mobile preview"
            width={300}
            height={600}
            priority
          />
        </div>

        {/* Text below image */}
        <p className="text-[#9099A5] text-lg text-center mt-6">
          Getting lost in realm of design is what i ❤️
        </p>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-10 right-10 text-sm text-gray-500 px-36 py-4">
        Designing since 2019
      </div>
    </section>
  );
}
