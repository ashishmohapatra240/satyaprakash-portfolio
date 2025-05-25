"use client";
import clsx from "clsx";
import { useRive } from "@rive-app/react-canvas";

export default function Hero() {
  const { RiveComponent } = useRive({
    src: "/HeroAnimation.riv",
    autoplay: true,
  });

  const { RiveComponent: RiveComponent2 } = useRive({
    src: "/Top.riv",
    autoplay: true,
    // stateMachines: "Default",
  });

  return (
    <section className={clsx("min-h-screen flex flex-col relative", "max-w-7xl px-5 lg:px-8 md:px-8")}>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-20 md:pt-0">
        {/* Left content */}
        <div className="space-y-4 md:space-y-6 w-full text-center md:text-left ">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2">
              <p className="text-base sm:text-lg">Hey I&apos;m Satya</p>
              <div className="w-8 h-8">
                <RiveComponent2 />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-tight text-dark mx-auto md:mx-0 max-w-[90%] md:max-w-none font-sans">
              building products &<br />
              design systems
            </h1>
          </div>
        </div>

        {/* Right Section - Empty div to maintain layout */}
        {/* <div className="w-full md:w-1/3"></div> */}

        {/* Original Right Section (Commented out)
        <div className="w-full md:w-1/3 flex flex-col items-center">
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

          <p className="text-gray text-base sm:text-lg text-center mt-4 md:mt-6">
            Getting lost in realm of design is what i ❤️
          </p>
        </div>
        */}
      </div>

      <div className="relative mt-20">
        <div className="absolute bottom-0 md:right-0 items-center justify-center text-sm text-gray-500 -z-10">
          <div className="w-56 h-56 md:w-96 md:h-96">
            <RiveComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
