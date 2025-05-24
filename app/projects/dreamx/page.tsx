import Image from "next/image";

export default function DreamXProject() {
  return (
    <main className="bg-white">
      <section className="py-12">
        <div className="mx-auto">
          {/* Project Category */}
          <div className="text-rose-700 text-base font-bold tracking-wider mt-12 sm:mt-24">
            DREAMX
          </div>

          {/* Project Title */}
          <h1 className="text-[#222222] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mt-4">
            From Chaos to Consistency: A Scalable Design System
          </h1>

          {/* Hero Image */}
          <div className="mt-8 sm:mt-12 mb-16 sm:mb-24">
            {/* <video
                            src="/images/new-projects/dreamx/1.mp4"
                            loop={true}
                            autoPlay={true}
                            controls={false}
                            width={1000}
                            height={475}
                            className="w-full rounded-lg"
                        /> */}
            <Image
              src="/images/projects/dreamx/1.png"
              alt="DreamX Hero Image"
              width={1000}
              height={475}
              className="w-full rounded-lg"
            />
          </div>

          {/* Project Info */}
          <div className="py-12 sm:py-20 flex flex-col sm:flex-row gap-8 sm:gap-24">
            <div
              className="text-slate-800 text-xl sm:text-2xl lg:text-3xl"
              style={{ lineHeight: "1.6" }}
            >
              DreamX was building a payment app to help Dream11 users seamlessly
              use their winnings for everyday transactions. However, the
              existing design system was fragmented and lacked
              consistency—especially with Figma&apos;s new variable system. Our
              design team identified this as an opportunity to overhaul the
              system, streamline design processes, and create a scalable,
              cohesive design foundation.
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
                <p className="text-gray-400 text-xl">4 Months</p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16 sm:space-y-24">
            {/* Analysis Section */}
            <section className="mt-12 sm:mt-24">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    Analysis
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Understanding the Challenge
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      After diving deep into the issue, I identified two major
                      pain points:
                    </p>
                    <div className="space-y-5">
                      <div className="flex gap-3">
                        <div className="flex-1 space-y-1">
                          <h3 className="text-slate-800 text-lg sm:text-xl font-bold leading-7">
                            Overwhelming & Unstructured Component Variants
                          </h3>
                          <p className="text-slate-800 text-lg sm:text-xl leading-7">
                            The design system had excessive and disorganized
                            variants for individual components, leading to
                            performance issues and significantly slowing down
                            the design and iteration process.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-1 space-y-1">
                          <h3 className="text-slate-800 text-lg sm:text-xl font-bold leading-7">
                            Inefficient Workflow Due to Scattered Styles
                          </h3>
                          <p className="text-slate-800 text-lg sm:text-xl leading-7">
                            With no centralized themes and styles spread across
                            multiple variables, creating user flows was
                            time-consuming and lacked coherence, making it
                            difficult to move quickly and maintain consistency.
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-800 text-lg sm:text-xl leading-7">
                        Designers spent excessive time identifying the right
                        components, assembling screens, and then prototyping,
                        which slowed down the overall design workflow.
                      </p>

                      <p className="text-slate-800 text-lg sm:text-xl leading-7">
                        We analysed and defined the approach to be like below:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="text-slate-800 text-lg sm:text-xl leading-7">
                          • Foundations: Color & token system
                        </li>
                        <li className="text-slate-800 text-lg sm:text-xl leading-7">
                          • Identifying & listing components
                        </li>
                        <li className="text-slate-800 text-lg sm:text-xl leading-7">
                          • Building
                        </li>
                        <li className="text-slate-800 text-lg sm:text-xl leading-7">
                          • Testing
                        </li>
                        <li className="text-slate-800 text-lg sm:text-xl leading-7">
                          • Optimisation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Image
              src="/images/projects/dreamx/2.png"
              alt="DreamX Platform Overview"
              width={1000}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            {/* Exploration Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    Defining & brainstorming
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Structuring the Backbone of
                    <br />
                    Our Design System
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      After multiple brainstorming sessions, we structured the
                      token collections to not only support both light and dark
                      themes but also accommodate various states like error,
                      warning, success, and neutral—ensuring scalability and
                      clarity across the system.
                    </p>
                    <div className="space-y-4">
                      <p className="text-slate-800 text-xl font-normal font-sans leading-7">
                        We also brainstormed regarding the structure of a token
                        system, which better suits our needs.
                      </p>
                      {/* <div className="space-y-2">
                                                <p>
                                                    <span className="text-slate-800 text-xl font-bold font-sans">
                                                        Ethereal Design
                                                    </span>
                                                    <span className="text-slate-800 text-xl font-normal font-sans">
                                                        {" "}
                                                        – Created a dreamy, ethereal interface with subtle animations and gradients
                                                    </span>
                                                </p>
                                                <p>
                                                    <span className="text-slate-800 text-xl font-bold font-sans">
                                                        Intuitive Flow
                                                    </span>
                                                    <span className="text-slate-800 text-xl font-normal font-sans">
                                                        {" "}
                                                        – Designed a step-by-step process that guides users through dream interpretation
                                                    </span>
                                                </p>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    Building
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Brief about the process
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      After this we collected and listed the components and
                      created optimised versions of components, avoiding
                      unnecessary variants. Some components were so complicated
                      and were having so many children, we had to test it
                      thoroughly.
                    </p>
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      We completed the process of creating the components after
                      finishing the token system.
                    </p>
                  </div>
                  {/* <div className="w-full lg:w-1/3">
                                        <video
                                            src="/images/new-projects/dreamx/4.mp4"
                                            loop={true}
                                            autoPlay={true}
                                            width={1200}
                                            height={600}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div> */}
                </div>
              </div>
            </section>

            {/* Full Width Image */}

            <div className="grid grid-cols-1 gap-8">
              {/* First row - 2 images */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Image
                  src="/images/projects/dreamx/3.png"
                  alt="DreamX Process Image 1"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
                <Image
                  src="/images/projects/dreamx/4.png"
                  alt="DreamX Process Image 2"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    A repeating process
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Iterative Improvements Along the Flow
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      When we were building things and testing, we were creating
                      components which can change themes, when the collection
                      mode was changed. so sometime, the tokens were getting
                      overidden by parent frame tokens and mode. So testing them
                      hand to hand and fixing things in the component as well as
                      the token system was an iterative process.
                    </p>
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      I led the development and upkeep of the component and
                      token systems.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    The last step
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Doing the cleanup
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      Once the new system reached a stable state, we planned its
                      rollout in the next version of the application—migrating
                      flow by flow and systematically phasing out the old
                      components.
                    </p>
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      During this process, we discovered that some components
                      were robust enough to handle more use cases than initially
                      intended, while others fell short. This led us to
                      continuously refine and enhance components to ensure
                      comprehensive coverage across all scenarios.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Image
                  src="/images/projects/dreamx/6.png"
                  alt="DreamX Design 1"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
                <Image
                  src="/images/projects/dreamx/7.png"
                  alt="DreamX Design 2"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
                <Image
                  src="/images/projects/dreamx/8.png"
                  alt="DreamX Design 3"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <Image
                src="/images/projects/dreamx/9.png"
                alt="DreamX Final Design"
                width={1000}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-rose-700 text-base font-bold tracking-wider">
                    Impact & takeaways
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    So, What did we achieve ?
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      We built a robust design system that accelerated the
                      design process by 33%. The team became significantly more
                      efficient, enabling faster delivery of user flows and the
                      design of new screens. Throughout this journey, I gained
                      valuable experience in strategically planning component
                      and flow rollouts. The intensive use of Figma variables
                      also helped me develop a strong command over them,
                      deepening my expertise in design tooling.
                    </p>
                    {/* <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                                            During this process, we discovered that some components were robust enough to handle more use cases than initially intended, while others fell short. This led us to continuously refine and enhance components to ensure comprehensive coverage across all scenarios.
                                        </p> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="space-y-6 lg:max-w-full lg:w-2/3">
            <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
              After thorough research, I identified several key challenges:
            </p>
            <div className="space-y-5">
              <div className="flex gap-3">
                <div className="flex-1 space-y-1">
                  <h3 className="text-slate-800 text-lg sm:text-xl font-bold leading-7">
                    User Trust
                  </h3>
                  <p className="text-slate-800 text-lg sm:text-xl leading-7">
                    Building trust in AI-powered dream interpretation while
                    maintaining the personal nature of dreams
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 space-y-1">
                  <h3 className="text-slate-800 text-lg sm:text-xl font-bold leading-7">
                    Complex Information
                  </h3>
                  <p className="text-slate-800 text-lg sm:text-xl leading-7">
                    Presenting detailed dream interpretations in an easily
                    digestible format
                  </p>
                </div>
              </div>
              <p className="text-slate-800 text-lg sm:text-xl leading-7">
                The goal was to create a platform that feels both magical and
                trustworthy, while being easy to use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
