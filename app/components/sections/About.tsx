import ProjectCard from "../ProjectCard";
import Marquee from "./Marquee";

const PROJECTS = [
  {
    title: "Simplifying Hut Rewards",
    description: "Creating loyal and happy customers",
    image: "/images/projects/hut-rewards.png",
  },
  {
    title: "Meta design system",
    description: "Design system for Meta products",
    image: "/images/projects/meta-design.png",
  },
  {
    title: "Crafting ad making process",
    description: "Streamlining the ad creation workflow",
    image: "/images/projects/ad-making.png",
  },
  {
    title: "Farming ecosystem",
    description: "Crafting digital green revolution",
    image: "/images/projects/farming.png",
  },
  {
    title: "Note Up",
    description: "Creating loyal and happy customers",
    image: "/images/projects/note-up.png",
  },
  {
    title: "Helix design system",
    description: "Design system that scales with your product",
    image: "/images/projects/helix.png",
  },
];

export default function About() {
  return (
    <section className="relative min-h-screen w-full">
      {/* Dark section */}
      <div className="h-screen bg-[#0E0F16] relative flex flex-col justify-center items-center text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-36 space-y-32">
          {/* First text block */}
          <h2 className="text-white text-xl sm:text-2xl lg:text-4xl max-w-2xl mx-auto">
            I love challenges may it be
            <br className="hidden sm:block" />
            a sport or Design
          </h2>

          {/* Second text block */}
          <p className="text-white/80 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto">
            It&apos;s the adrenaline that keeps me up. May it be
            <br className="hidden sm:block" />
            riding my bike, cherishing basketball or Creating
            <br className="hidden sm:block" />
            solution which helps thousands of people
          </p>
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0E0F16] to-transparent" />
      </div>
      <Marquee />

      {/* White section */}
      <div className="min-h-[70vh] bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-36 py-10 sm:py-20">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-[#0E0F16] mt-8 sm:mt-16">
              Crafting experience
              <br className="hidden sm:block" />
              Creating Impact
            </h2>
            <p className="text-[#9099A5]">that matters...</p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-16 sm:mt-32 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6">
              {PROJECTS.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 lg:mt-32">
              {PROJECTS.slice(3).map((project, index) => (
                <ProjectCard key={index + 3} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
