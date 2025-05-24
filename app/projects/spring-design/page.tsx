import Image from "next/image";
import NextProjects from "@/app/components/NextProjects";

export default function SpringDesignProject() {
  return (
    <main className="bg-white">
      <section className="py-12">
        <div className="mx-auto">
          {/* Project Category */}
          <div className="text-indigo-600 text-base font-bold tracking-wider mt-24">
            SPRING DESIGN SYSTEM
          </div>

          {/* Project Title */}
          <h1 className="text-slate-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mt-4">
            Building a Design System for better adaptability
          </h1>

          {/* Hero Image */}
          <div className="mt-8 sm:mt-12 mb-24">
            <video
              src="/images/new-projects/ds/1.mp4"
              width={1200}
              height={675}
              className="w-full rounded-lg"
              loop={true}
              autoPlay={true}
              controls={false}
            />
          </div>

          {/* Project Info */}
          <div className="py-12 sm:py-20 flex flex-col sm:flex-row gap-6 sm:gap-24">
            <div className="text-slate-800 text-lg sm:text-xl lg:text-2xl xl:text-3xl" style={{ lineHeight: '1.6' }}>
              Creating a design system that was both simple and effective seemed
              like an ambitious task, but it even one use knew had the potential
              to change the way we worked. The goal was clear: to build a system
              so consistent that it might could serve as a starting point for
              any new project, no matter the scope or requirements.
            </div>
            <div className="flex flex-col gap-6 sm:gap-8 sm:min-w-[200px] lg:min-w-[250px]">
              <div className="space-y-2">
                <h2 className="text-indigo-600 text-xl font-medium leading-7">
                  My Role
                </h2>
                <p className="text-gray-400 text-xl">Design System Lead</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-indigo-600 text-xl font-medium leading-7">
                  Timeline
                </h2>
                <p className="text-gray-400 text-xl">6 Months</p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16 sm:space-y-24">
            {/* Challenges Section */}
            <section>
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <div className="text-indigo-600 text-base font-bold tracking-wider">
                    Challenges
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Challenges That Slowed Us Down
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      But, as we began to dig deeper into the challenge, we
                      quickly realized that we were facing a set of significant
                      obstacles.
                    </p>
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      The first was{" "}
                      <span className="font-bold">
                        switching between different types and color systems—{" "}
                      </span>
                      an effort that was both tedious and time-consuming every
                      time we started a new project. Then there was the
                      challenge of creating a reusable{" "}
                      <span className="font-bold">architecture of tokens</span>.
                      We needed something that would be easy to understand and
                      work with, something that wouldn&apos;t become
                      overwhelming as projects grew in complexity. Finally, the
                      components themselves were often inconsistent. What worked
                      for one project might not fit the needs of another,
                      leading to confusion and unnecessary back-and-forth.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <Image
              src="/images/new-projects/ds/2.png"
              alt="Design System Challenges"
              width={1200}
              height={600}
              className="w-full rounded-lg"
            />
            {/* Approach Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-indigo-600 text-base font-bold tracking-wider">
                    Approach
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Simplicity Over Complexity
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      We knew we had to rethink the way we approached design
                      systems. Rather than starting with an overcomplicated
                      solution, we decided to build something simple yet robust.
                      We aimed for a token architecture that was reusable,
                      efficient, and intuitive for everyone involved. We spent
                      time understanding the basic needs of each project,
                      tailoring the system to make sure it was adaptable for any
                      scenario.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Research & Ideation Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex flex-col justify-start items-start gap-4 sm:gap-6">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                      <div className="self-stretch relative justify-start text-indigo-600 text-base font-bold font-sans tracking-wider">
                        Research & Ideation
                      </div>
                      <div className="relative justify-start text-slate-800 text-5xl font-medium font-sans leading-[67.20px]">
                        Learning from the Best
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-12">
                      <div className="flex flex-col justify-start items-start gap-6">
                        <div className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                          The next step was to brainstorm the architecture
                          itself. <br />
                          <br />
                          We researched and analyzed several existing design
                          systems, learning from their successes and mistakes.
                          Ultimately, we made a conscious decision to keep
                          things as simple as possible. <br />
                          <br />
                          Our aim was to create a system anyone could
                          understand, even someone who had no prior experience
                          with design systems. We didn&apos;t want it to feel
                          like an intimidating, high-maintenance structure. We
                          wanted ease of use to be at the heart of everything.
                        </div>
                        <div className="w-full lg:w-full lg:w-2/3 text-slate-800 text-lg sm:text-xl leading-relaxed">
                          So, we got started into it
                        </div>
                      </div>
                      <Image
                        className="w-full lg:w-96 h-auto"
                        src="/images/new-projects/ds/3.png"
                        alt="Design System Research & Ideation"
                        width={412}
                        height={314}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Image
              src="/images/new-projects/ds/4.png"
              alt="Design System Research & Ideation"
              width={1200}
              height={600}
              className="w-full rounded-lg"
            />
            {/* Results Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-indigo-500 text-base font-bold tracking-wider">
                    Flow refining and Brainstorming
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Building the System – An Iterative Approach
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-12">
                  <Image
                    src="/images/projects/spring-ds/building.png"
                    alt="Flow Refining Dashboard"
                    width={412}
                    height={362}
                    className="w-full lg:w-96 h-auto"
                  />
                  <div className="flex flex-col justify-start items-start gap-6">
                    <div className="w-full lg:w-full lg:w-2/3">
                      <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                        As we began building, we took an iterative approach.
                        Instead of trying to get everything perfect from the
                        start, we focused on testing the components we created
                        along the way. This allowed us to gather feedback early
                        and improve the system before it became too complex.
                        <br />
                        <br />
                        In the beginning, our enthusiasm led us to create a wide
                        range of components. But as the list grew, we started
                        realizing that we were getting sidetracked from our
                        original goal—keeping the system lean and user-friendly.
                        The temptation to overcomplicate things was strong, but
                        we reminded ourselves that simplicity was the key.
                        <br />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-full lg:w-2/3 text-slate-800 text-xl font-normal font-sans leading-7">
                  After a few rounds of testing with different teams, we finally
                  began to see the results of our work. We had built something
                  that allowed the team to seamlessly switch between themes,
                  brands, and other key elements with ease. The basic components
                  we&apos;d covered were solid, and we had a system that was
                  flexible and easy to adopt.
                  <br />
                  <br />
                  Finally we got a tangible product which is being used by teams
                </div>
              </div>
            </section>

            {/* Impact Section */}
            <section className="bg-white">
              <div className="mx-auto py-8 sm:py-12">
                <div className="w-full">
                  <div className="flex flex-col gap-12 sm:gap-20">
                    <div className="flex flex-col gap-4 sm:gap-6">
                      <div className="self-stretch flex flex-col justify-start items-start gap-6">
                        <div className="self-stretch relative justify-start text-indigo-500 text-base font-bold font-sans tracking-wider">
                          Impact
                        </div>
                        <div className="relative justify-start text-slate-800 text-5xl font-medium font-sans leading-[67.20px]">
                          Faster, Smarter, and More Efficient
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <div className="w-full lg:w-full lg:w-2/3">
                          <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                            The impact was clear.{" "}
                          </span>
                          <span className="text-slate-800 text-xl font-bold font-sans leading-7">
                            What used to take weeks of work was now done in a
                            fraction of the time
                          </span>
                          <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                            . The efficiency boost was noticeable across the
                            board, and the team felt empowered by the new
                            system. What had been a source of frustration and
                            delay before became a tool that streamlined our
                            process and gave us more time to focus on the bigger
                            picture.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Next Projects Section */}
      <NextProjects />
    </main>
  );
}
