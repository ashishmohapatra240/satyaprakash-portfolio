import Image from "next/image";
import NextProjects from "@/app/components/NextProjects";

export default function PizzaHutProject() {
  const otherProjects = [
    {
      href: "/projects/meta-design",
      title: "Meta design system",
      bgColor: "#222222",
      logoChar: "M",
      accentColor: "#FFCC00",
    },
    {
      href: "/projects/raptor-x",
      title: "Raptor X",
      bgColor: "#1E40AF",
      logoChar: "R",
      accentColor: "#FFFFFF",
    },
  ];

  return (
    <main className="bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-36 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Project Category */}
          <div className="text-rose-700 text-base font-bold tracking-wider mt-12 sm:mt-24">
            PIZZA HUT
          </div>

          {/* Project Title */}
          <h1 className="text-slate-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mt-4">
            Building a royalty system for a global pizza brand
          </h1>

          {/* Hero Image */}
          <div className="mt-8 sm:mt-12 mb-16 sm:mb-24">
            <Image
              src="/images/projects/pizza-hut/hero.png"
              alt="Pizza Hut Rewards App"
              width={1200}
              height={675}
              className="w-full rounded-lg"
              priority
            />
          </div>

          {/* Project Info */}
          <div className="py-12 sm:py-20 flex flex-col sm:flex-row gap-8 sm:gap-24">
            <div className="text-slate-800 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              Pizza Hut introduced a rewards program to increase user engagement
              and drive repeat orders. However, the system failed to encourage
              customers to redeem their points effectively. My team and I took
              on the challenge of redesigning the loyalty experience to make it
              more accessible, understandable, and visually appealing
            </div>
            <div className="flex flex-col gap-8 sm:min-w-[250px]">
              <div className="space-y-2">
                <h2 className="text-rose-600 text-xl font-medium leading-7">
                  My Role
                </h2>
                <p className="text-gray-400 text-xl">UI UX Designer</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-rose-600 text-xl font-medium leading-7">
                  Timeline
                </h2>
                <p className="text-gray-400 text-xl">1 Month</p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16 sm:space-y-24">
            {/* Analysis Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    Analysis
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Understanding the Problem
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="space-y-6 lg:max-w-[740px]">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      After diving deep into the issue, I identified two major
                      pain points:
                    </p>
                    <div className="space-y-5">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 p-0.5 bg-rose-700/10 rounded-md flex-shrink-0"></div>
                        <div className="flex-1 space-y-1">
                          <h3 className="text-slate-800 text-lg sm:text-xl font-bold leading-7">
                            Lack of Visibility
                          </h3>
                          <p className="text-slate-800 text-lg sm:text-xl leading-7">
                            The rewards system was pushed to a corner, making it
                            difficult for users to discover and engage with it
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 p-0.5 bg-rose-700/10 rounded-md flex-shrink-0"></div>
                        <div className="flex-1 space-y-1">
                          <h3 className="text-slate-800 text-lg sm:text-xl font-bold leading-7">
                            Complexity in Representation
                          </h3>
                          <p className="text-slate-800 text-lg sm:text-xl leading-7">
                            The way the rewards were presented made it confusing
                            for users to understand how to earn and redeem
                            points
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Exploration Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    Exploration
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Establishing language for Rewards
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-[740px]">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      I began by analyzing the existing visual language of the
                      website&apos;s reward system. It felt uninspiring and
                      lacked the impact needed to grab users&apos; attention. To
                      address this, I explored multiple visual directions while
                      staying within the established design language.
                    </p>
                    <div className="space-y-4">
                      <p className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                        Initial Concepts:
                      </p>
                      <div className="space-y-2">
                        <p>
                          <span className="text-slate-800 text-xl font-bold font-['Product_Sans']">
                            Dark Theme Layout
                          </span>
                          <span className="text-slate-800 text-xl font-normal font-['Product_Sans']">
                            {" "}
                            – I experimented with a dark theme to create
                            contrast and make the rewards section stand out.
                          </span>
                        </p>
                        <p>
                          <span className="text-slate-800 text-xl font-bold font-['Product_Sans']">
                            Bold Typography
                          </span>
                          <span className="text-slate-800 text-xl font-normal font-['Product_Sans']">
                            {" "}
                            – While scrolling through Instagram, I came across a
                            bold, striking typeface. It felt like the perfect
                            way to emphasize key reward information and create
                            strong visual contrast.
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                      However, due to certain design constraints, I
                      couldn&apos;t deviate too far from the existing system.
                      Despite my efforts, the feedback remained neutral, leaving
                      me to rethink my approach and find a way to make the
                      rewards system more engaging within the given limitations.
                      Then we finalised the visual language!
                    </p>
                  </div>
                  <div className="w-full lg:w-96 h-auto">
                    <Image
                      src="/images/projects/pizza-hut/exploration.png"
                      alt="Pizza Hut Rewards Exploration"
                      width={412}
                      height={362}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Flow Refining Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    Flow refining and Wireframing
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Refining its skeletal structure
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-[740px]">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      Instead of being discouraged, I focused on refining the
                      flow and usability.
                    </p>
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      Drafted multiple wireframes.
                      <br />
                      Tested them internally with the team.
                      <br />
                      Iterated based on feedback until we found an approach that
                      was intuitive and motivating for users.
                    </p>
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      Our final iteration simplified the redemption process,
                      ensuring users could easily understand their points and
                      the benefits associated with them.
                    </p>
                  </div>
                  <div className="w-full lg:w-96 h-auto">
                    <Image
                      src="/images/projects/pizza-hut/skeleton.png"
                      alt="Pizza Hut Wireframes"
                      width={412}
                      height={362}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>
            <Image
              src="/images/projects/pizza-hut/wireframe.png"
              alt="Pizza Hut Wireframes"
              width={1200}
              height={600}
              className="w-full h-full object-cover rounded-lg mt-24 mb-24"
            />

            {/* UI Design Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    UI Design & Exploration
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Finally, cooking the ingredients
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-[740px]">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      With a clear direction set, UI execution was smooth and
                      efficient. Since we had already explored multiple visual
                      styles, the final design came together. The team was very
                      excited to see the new flow and designs. They gave me a
                      lot of Kudos for the work.
                    </p>
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      Later, when creating the handoff file, we encountered
                      friction due to a lack of communication between our team
                      and the Pizza Hut developers. But together we solved that
                      issue and Delivered them the handoff file.
                    </p>
                  </div>
                  <div className="w-full lg:w-96 h-auto">
                    <Image
                      src="/images/projects/pizza-hut/ui-designs.png"
                      alt="Pizza Hut UI Design"
                      width={412}
                      height={362}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Impact & Takeaways Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    Impact & Takeaways
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    So, What did we achieve ?
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-[740px]">
                    <div className="space-y-2">
                      <span className="text-slate-800 text-3xl font-normal font-['Product_Sans'] leading-10">
                        The redesigned loyalty system
                      </span>
                      <span className="text-slate-800 text-3xl font-bold font-['Product_Sans'] leading-10">
                        {" "}
                        significantly increased use of loyalty system by 20%
                      </span>
                      <span className="text-slate-800 text-3xl font-normal font-['Product_Sans'] leading-10">
                        , making it easier for customers to track and redeem
                        their rewards. This project reinforced the importance of
                        visibility, simplicity, and visual contrast in UI/UX
                        design.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Next Projects */}
      <NextProjects projects={otherProjects} />
    </main>
  );
}
