import Image from "next/image";

export default function PizzaHutProject() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-36 pt-12">
        <div className="max-w-5xl mx-auto">
          {/* Project Category */}
          <div className="relative justify-start text-rose-700 text-base font-bold font-['Product_Sans'] tracking-wider mt-24">
            PIZZA HUT
          </div>

          {/* Project Title */}
          <div className="relative justify-start text-slate-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-['Product_Sans'] leading-[79.20px]">
            Building a royalty system for a global pizza brand
          </div>

          {/* Hero Image with Floating Elements */}
          <div className="relative mb-24">
            <Image
              src="/images/projects/pizza-hut/hero.png"
              alt="Pizza Hut Rewards App"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
            {/* Add floating pizza icons here if needed */}
          </div>

          {/* Project Info */}
          <div className="py-20 flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-24">
            <div className="w-full relative justify-start text-slate-800 text-3xl font-normal font-['Product_Sans'] leading-10">
              Pizza Hut introduced a rewards program to increase user engagement
              and drive repeat orders. However, the system failed to encourage
              customers to redeem their points effectively. My team and I took
              on the challenge of redesigning the loyalty experience to make it
              more accessible, understandable, and visually appealing
            </div>
            <div className="grow shrink basis-0 flex flex-col justify-start items-start gap-8">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="relative justify-start text-rose-600 text-xl font-medium font-['Product_Sans_Medium'] leading-7">
                  My Role
                </div>
                <div className="relative text-justify justify-start text-gray-400 text-xl font-normal font-['Product_Sans']">
                  UI UX Designer
                </div>
              </div>
              <div className="h-14 flex flex-col justify-start items-start gap-2">
                <div className="w-64 relative justify-start text-rose-600 text-xl font-medium font-['Product_Sans_Medium'] leading-7">
                  Timeline
                </div>
                <div className="relative text-justify justify-start text-gray-400 text-xl font-normal font-['Product_Sans']">
                  1 Month
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="mb-24">
            <Image
              src="/images/projects/pizza-hut/app-screens.png"
              alt="Pizza Hut App Screens"
              width={1200}
              height={600}
              className="w-full"
            />
          </div>

          {/* Analysis Section */}
          <div className="py-20 inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch h-24 flex flex-col justify-start items-start gap-2">
              <div className="relative justify-start text-rose-700 text-base font-bold font-['Product_Sans'] tracking-wider">
                Analysis
              </div>
              <div className="relative justify-start text-slate-800 text-5xl font-medium font-['Product_Sans_Medium'] leading-[67.20px]">
                Understanding the Problem
              </div>
            </div>
            <div className="self-stretch h-80 flex flex-col justify-start items-start gap-6">
              <div className="w-[740px] relative justify-start text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                After diving deep into the issue, I identified two major pain
                points:
              </div>
              <div className="self-stretch h-48 flex flex-col justify-start items-start gap-5">
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                  <div className="w-8 h-8 p-0.5 bg-rose-700/10 rounded-md flex justify-center items-center gap-[5px]"></div>
                  <div className="w-[800px] inline-flex flex-col justify-start items-start">
                    <div className="inline-flex justify-center items-center gap-2">
                      <div className="w-[740px] relative justify-start text-slate-800 text-xl font-bold font-['Product_Sans'] leading-7">
                        Lack of Visibility
                      </div>
                    </div>
                    <div className="relative justify-start text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                      The rewards system was pushed to a corner, making it
                      difficult for users to discover and engage with it
                    </div>
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                  <div className="w-8 h-8 p-0.5 bg-rose-700/10 rounded-md flex justify-center items-center gap-[5px]"></div>
                  <div className="w-[800px] inline-flex flex-col justify-start items-start">
                    <div className="inline-flex justify-center items-center gap-2">
                      <div className="w-[740px] relative justify-start text-slate-800 text-xl font-bold font-['Product_Sans'] leading-7">
                        Complexity in Representation
                      </div>
                    </div>
                    <div className="relative justify-start text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                      The way the rewards were presented made it confusing for
                      users to understand how to earn and redeem points
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[740px] relative justify-start text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                The company aimed for users to adopt the feature, but its
                visibility and clarity could be improved
              </div>
            </div>
          </div>

          {/* Exploration Section */}
          <div className="mb-24">
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-rose-700 text-base font-bold font-['Product_Sans'] tracking-wider">
                  Exploration
                </div>
                <div className="text-slate-800 text-5xl font-medium font-['Product_Sans_Medium'] leading-[67.20px]">
                  Establishing language for Rewards
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-start items-start gap-12">
                <div className="flex flex-col justify-start items-start gap-6 max-w-[740px]">
                  <p className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                    I began by analyzing the existing visual language of the
                    website&apos;s reward system. It felt uninspiring and lacked
                    the impact needed to grab users&apos; attention. To address
                    this, I explored multiple visual directions while staying
                    within the established design language.
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
                          – I experimented with a dark theme to create contrast
                          and make the rewards section stand out.
                        </span>
                      </p>
                      <p>
                        <span className="text-slate-800 text-xl font-bold font-['Product_Sans']">
                          Bold Typography
                        </span>
                        <span className="text-slate-800 text-xl font-normal font-['Product_Sans']">
                          {" "}
                          – While scrolling through Instagram, I came across a
                          bold, striking typeface. It felt like the perfect way
                          to emphasize key reward information and create strong
                          visual contrast.
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                    However, due to certain design constraints, I couldn&apos;t
                    deviate too far from the existing system. Despite my
                    efforts, the feedback remained neutral, leaving me to
                    rethink my approach and find a way to make the rewards
                    system more engaging within the given limitations. Then we
                    finalised the visual language!
                  </p>
                </div>

                <div className="w-full h-[400px] relative">
                  <Image
                    src="/images/projects/pizza-hut/exploration.png"
                    alt="Pizza Hut Rewards Exploration"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Flow Refining Section */}
          <div className="mb-24">
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-rose-700 text-base font-bold font-['Product_Sans'] tracking-wider">
                  Flow refining and Wireframing
                </div>
                <div className="text-slate-800 text-5xl font-medium font-['Product_Sans_Medium'] leading-[67.20px]">
                  Refining its skeletal structure
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-start items-start gap-12">
                <div className="w-full md:w-96 h-[362px] relative">
                  <Image
                    src="/images/projects/pizza-hut/skeleton.png"
                    alt="Pizza Hut Wireframes"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex flex-col justify-start items-start gap-6 max-w-[740px]">
                  <p className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                    Instead of being discouraged, I focused on refining the flow
                    and usability.
                  </p>
                  <p className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                    Drafted multiple wireframes.
                    <br />
                    Tested them internally with the team.
                    <br />
                    Iterated based on feedback until we found an approach that
                    was intuitive and motivating for users.
                  </p>
                  <p className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                    Our final iteration simplified the redemption process,
                    ensuring users could easily understand their points and the
                    benefits associated with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/projects/pizza-hut/wireframe.png"
            alt="Pizza Hut Wireframes"
            width={1200}
            height={600}
            className="w-full h-full object-cover rounded-lg mt-24 mb-24"
          />

          {/* UI Design Section */}
          <div className="mb-24">
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-rose-700 text-base font-bold font-['Product_Sans'] tracking-wider">
                  UI Design & Exploration
                </div>
                <div className="text-slate-800 text-5xl font-medium font-['Product_Sans_Medium'] leading-[67.20px]">
                  Finally, cooking the ingredients
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-start items-start gap-12">
                <div className="flex flex-col justify-start items-start gap-6 max-w-[740px]">
                  <p className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                    With a clear direction set, UI execution was smooth and
                    efficient. Since we had already explored multiple visual
                    styles, the final design came together. The team was very
                    excited to see the new flow and designs. They gave me a lot
                    of Kudos for the work.
                  </p>
                  <p className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                    Later, when creating the handoff file, we encountered
                    friction due to a lack of communication between our team and
                    the Pizza Hut developers. But together we solved that issue
                    and Delivered them the handoff file.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/images/projects/pizza-hut/ui-designs.png"
            alt="Pizza Hut UI Design"
            width={1200}
            height={600}
            className="w-full h-full object-cover rounded-lg mt-24 mb-24"
          />

          {/* Impact & Takeaways Section */}
          <div className="mb-24">
            <div className="flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="text-rose-700 text-base font-bold font-['Product_Sans'] tracking-wider">
                  Impact & Takeaways
                </div>
                <div className="text-slate-800 text-5xl font-medium font-['Product_Sans_Medium'] leading-[67.20px]">
                  So, What did we achieve ?
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-start items-start gap-12">
                <div className="flex flex-col justify-start items-start gap-6">
                  <div className="w-[740px] relative justify-start">
                    <span className="text-slate-800 text-3xl font-normal font-['Product_Sans'] leading-10">
                      The redesigned loyalty system
                    </span>
                    <span className="text-slate-800 text-3xl font-bold font-['Product_Sans'] leading-10">
                      {" "}
                      significantly increased use of loyalty system by 20%
                    </span>
                    <span className="text-slate-800 text-3xl font-normal font-['Product_Sans'] leading-10">
                      , making it easier for customers to track and redeem their
                      rewards. This project reinforced the importance of
                      visibility, simplicity, and visual contrast in UI/UX
                      design.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Projects */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-36">
          <h2 className="text-2xl font-medium text-[#20233D] mb-8">
            Check out more projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a href="/projects/meta-design" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/projects/meta-design.png"
                  alt="Meta Design System"
                  width={300}
                  height={200}
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                  Meta design system →
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
