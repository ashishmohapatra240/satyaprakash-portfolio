import Image from "next/image";
import Nextprojects from "@/app/components/NextProjects";
export default function PizzaHutProject() {
  return (
    <main className="bg-white">
      <section className="py-12 max-w-7xl px-5 lg:px-20 md:px-8">
        <div className="mx-auto">
          {/* Project Category */}
          <div className="text-rose-700 text-base font-bold tracking-wider mt-12 sm:mt-24">
            PIZZA HUT
          </div>

          {/* Project Title */}
          <h1 className="text-[#222222] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mt-4">
            Building a royalty system for a global pizza brand
          </h1>

          {/* Hero Image */}
          <div className="mt-8 sm:mt-12 mb-16 sm:mb-24">
            <video
              src="/images/new-projects/pizza-hut/1.mp4"
              loop={true}
              autoPlay={true}
              controls={false}
              width={1000}
              height={475}
              className="w-full rounded-lg"
            />
          </div>

          {/* Project Info */}
          <div className="py-12 sm:py-20 flex flex-col sm:flex-row gap-8 sm:gap-24">
            <div className="text-slate-800 text-xl sm:text-2xl lg:text-3xl" style={{ lineHeight: '1.6' }}>
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
          <Image
            src="/images/new-projects/pizza-hut/2.png"
            alt="Pizza Hut Rewards Exploration"
            width={1000}
            height={600}
            className="w-full h-auto rounded-lg"
          />
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
                    Understanding the Problem
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      After diving deep into the issue, I identified two major
                      pain points:
                    </p>
                    <div className="space-y-5">
                      <div className="flex gap-3">
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
                      <p className="text-slate-800 text-lg sm:text-xl leading-7">
                        The company aimed for users to adopt the feature, but
                        its visibility and clarity could be improved.
                      </p>
                      <p className="text-slate-800 text-lg sm:text-xl leading-7">
                        I did a{" "}
                        <span className="font-bold">
                          analysis of different Platforms
                        </span>{" "}
                        to understand why some of them are not working, while
                        some of them are working fine. After that, we explored
                        some visual style, as the team had paused the Work for
                        some management reason.
                      </p>
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
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      I began by analyzing the existing visual language of the
                      website&apos;s reward system. It felt uninspiring and
                      lacked the impact needed to grab users&apos; attention. To
                      address this, I explored multiple visual directions while
                      staying within the established design language.
                    </p>
                    <div className="space-y-4">
                      <p className="text-slate-800 text-xl font-normal font-sans leading-7">
                        Initial Concepts:
                      </p>
                      <div className="space-y-2">
                        <p>
                          <span className="text-slate-800 text-xl font-bold font-sans">
                            Dark Theme Layout
                          </span>
                          <span className="text-slate-800 text-xl font-normal font-sans">
                            {" "}
                            – I experimented with a dark theme to create
                            contrast and make the rewards section stand out.
                          </span>
                        </p>
                        <p>
                          <span className="text-slate-800 text-xl font-bold font-sans">
                            Bold Typography
                          </span>
                          <span className="text-slate-800 text-xl font-normal font-sans">
                            {" "}
                            – While scrolling through Instagram, I came across a
                            bold, striking typeface. It felt like the perfect
                            way to emphasize key reward information and create
                            strong visual contrast.
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-800 text-xl font-normal font-sans leading-7">
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
                      src="/images/new-projects/pizza-hut/3.png"
                      alt="Pizza Hut Wireframes"
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
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
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
                  <div className="w-full lg:w-1/3">
                    <video
                      src="/images/new-projects/pizza-hut/4.mp4"
                      loop={true}
                      autoPlay={true}
                      width={1200}
                      height={600}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Full Width Image */}
            <Image
              src="/images/new-projects/pizza-hut/5.png"
              alt="Pizza Hut UI Design"
              width={1000}
              height={600}
              className="w-full h-auto rounded-lg"
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
                  <div className="space-y-6 lg:w-full">
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
                </div>
              </div>
            </section>
            <div className="grid grid-cols-1 gap-8">
              {/* First row - 2 videos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <video
                  src="/images/new-projects/pizza-hut/6-1.mp4"
                  loop={true}
                  autoPlay={true}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
                <video
                  src="/images/new-projects/pizza-hut/6-2.mp4"
                  loop={true}
                  autoPlay={true}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Second row - 3 images */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Image
                  src="/images/new-projects/pizza-hut/7-1.png"
                  alt="Pizza Hut Design"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
                <Image
                  src="/images/new-projects/pizza-hut/7-2.png"
                  alt="Pizza Hut Design"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
                <Image
                  src="/images/new-projects/pizza-hut/7-3.png"
                  alt="Pizza Hut Design"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Third row - 1 video */}
              <video
                src="/images/new-projects/pizza-hut/8.mp4"
                loop={true}
                autoPlay={true}
                controls={false}
                width={1200}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

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
                  <div className="space-y-6 lg:max-w-full lg:w-2/3">
                    <div className="space-y-2">
                      <span className="text-slate-800 text-3xl font-normal font-sans leading-10">
                        I got the this from the pizza hut team, that the
                        redesigned loyalty system
                      </span>
                      <span className="text-slate-800 text-3xl font-bold font-sans leading-10">
                        {" "}
                        significantly increased use of loyalty system by 20%
                      </span>
                      <span className="text-slate-800 text-3xl font-normal font-sans leading-10">
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

      {/* Next new-projects */}
      <Nextprojects />
    </main>
  );
}
