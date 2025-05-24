import Image from "next/image";
import NextProjects from "@/app/components/NextProjects";

export default function teamXProject() {
  return (
    <main className="bg-white">
      <section className="py-12">
        <div className="mx-auto ">
          {/* Project Category */}
          <div className="text-blue-600 text-base font-bold tracking-wider mt-8 sm:mt-12 md:mt-24">
            TEAM X
          </div>

          {/* Project Title */}
          <h1 className="text-slate-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mt-4">
            Designing the next-gen fraud detection system
          </h1>

          {/* Hero Image */}
          <div className="mt-8 sm:mt-12 mb-12 sm:mb-24">
            <Image
              src="/images/new-projects/team-x/1.png"
              alt="teamX Dashboard"
              width={1200}
              height={675}
              className="w-full rounded-lg"
              priority
            />
          </div>

          {/* Project Info */}
          <div className="py-8 sm:py-12 md:py-20 flex flex-col sm:flex-row gap-8 sm:gap-24">
            <div className="text-slate-800 text-lg sm:text-xl lg:text-2xl xl:text-3xl" style={{ lineHeight: '1.6' }}>
              TeamX was building an AI-driven fraud detection system to help
              businesses minimize losses. Their core feature assigned risk
              scores to entities while generating alerts based on patterns. We
              explored how alerts were triggered, what actions users could take,
              and refined the rule-based system to enhance fraud detection and
              prevention.
            </div>
            <div className="flex flex-col gap-8 sm:min-w-[200px] lg:min-w-[250px]">
              <div className="space-y-2">
                <h2 className="text-blue-600 text-xl font-medium leading-7">
                  My Role
                </h2>
                <p className="text-gray-400 text-xl">Lead UI UX Designer</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-blue-600 text-xl font-medium leading-7">
                  Timeline
                </h2>
                <p className="text-gray-400 text-xl">4 Months</p>
              </div>
            </div>
          </div>

          <div className="space-y-12 sm:space-y-24">
            <section>
              <div className="space-y-2">
                <div className="text-blue-600 text-base font-bold tracking-wider">
                  Analysis
                </div>
                <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                  Context
                </h2>
              </div>
              <div className="inline-flex flex-col justify-start items-start mt-8 mb-4">
                <div className="w-full max-w-full lg:w-2/3 text-slate-800 text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed">
                  Fraud detection systems struggle with complex rule creation
                  and overwhelming alert data, making it hard for analysts to
                  act quickly.
                </div>
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-5xl font-bold font-sans leading-[67.20px]">
                  &quot;
                </div>
              </div>
            </section>
          </div>

          {/* Content Sections - Using consistent spacing and responsive classes */}
          <div className="space-y-24">
            {/* Understanding the Analyst's Role */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-blue-600 text-base font-bold tracking-wider">
                    Research
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Decoding the Analyst Experience: Insights from Research
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="inline-flex flex-col justify-start items-start gap-6">
                    <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                      Entering this domain was entirely new for me, and I
                      wasn&apos;t sure where to begin or how to approach the
                      problem. I had many questions:
                    </div>
                    <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                      How is an alert defined?
                      <br />
                      Should users spend more time on an alert for thorough
                      analysis, or is speed the priority?
                      <br />
                      What is the average time an analyst takes to resolve an
                      alert?
                      <br />
                      What other responsibilities do analysts have beyond
                      handling alerts?
                      <br />
                      What exactly are we solving and building?
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                        Who is the User?
                      </div>
                      <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                        Our users are analysts in the eCommerce and banking
                        sectors who are assigned fraud cases to investigate,
                        assess, and take action on the associated entities.
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                        We conducted Primary and Secondary Research
                      </div>
                      <div className="w-full lg:w-2/3 relative justify-start">
                        <span className="text-slate-800 text-xl font-bold font-sans leading-7">
                          Primary research :<br />
                        </span>
                        <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                          stake holder Interview
                          <br />
                        </span>
                        <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                          <br />
                        </span>
                        <span className="text-slate-800 text-xl font-bold font-sans leading-7">
                          Secondary research :<br />
                        </span>
                        <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                          Competitor analysis
                          <br />
                          Product reviews & Docs
                          <br />
                          Market Research & Industry standards
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-6">
                  <div className="inline-flex flex-col justify-center items-start gap-3">
                    <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                      Understanding the Market, Product & competitors
                    </div>
                    <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                      After analyzing the fraud detection industry landscape, I
                      examined various competing solutions to understand the
                      market dynamics. I studied their feature sets—identifying
                      strengths and shortcomings—while focusing on user pain
                      points that persist despite the abundance of available
                      products.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Image
              src="/images/new-projects/team-x/2.png"
              alt="Flow Refining Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
            <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
              After thorough research, we focused specifically on the alert
              resolution workflow within the product. We began by creating
              journey maps to understand this critical process in detail.
            </div>
            <Image
              src="/images/new-projects/team-x/3.png"
              alt="Flow Refining Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto px-40"
            />
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                  Findings
                </div>
                <div className="w-full lg:w-2/3 relative justify-start">
                  <span className="text-slate-800 text-xl font-bold font-sans leading-7">
                    Lack of Clarity
                  </span>
                  <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                    {" "}
                    – Alert information is presented in a cluttered manner,
                    making it difficult to extract key insights.
                    <br />
                  </span>
                  <span className="text-slate-800 text-xl font-bold font-sans leading-7">
                    Unstructured Data Segmentation
                  </span>
                  <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                    {" "}
                    – Critical data points are not well-organized, leading to
                    confusion in prioritizing alerts.
                    <br />
                  </span>
                  <span className="text-slate-800 text-xl font-bold font-sans leading-7">
                    Insufficient Guidance
                  </span>
                  <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                    {" "}
                    – Users struggle to interpret alerts due to the absence of
                    contextual explanations or actionable insights.
                    <br />
                  </span>
                  <span className="text-slate-800 text-xl font-bold font-sans leading-7">
                    Information Overload
                  </span>
                  <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                    {" "}
                    – Excessive, irrelevant data makes it hard for analysts to
                    focus on what truly matters.
                    <br />
                  </span>
                  <span className="text-slate-800 text-xl font-bold font-sans leading-7">
                    Ambiguity in Decision-Making
                  </span>
                  <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                    {" "}
                    – Unclear risk indicators and lack of recommendations hinder
                    quick and confident actions.
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                  Problem statement{" "}
                </div>
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                  Design a streamlined workflow for analysts that enhances their
                  ability to understand and resolve alerts with confidence. The
                  solution should provide clear guidance, actionable insights,
                  and intuitive navigation, enabling them to efficiently assess
                  alerts, take necessary actions, and seamlessly transition to
                  the next alert.
                </div>
              </div>
            </div>

            {/* Identifying Key Problems */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-blue-600 text-base font-bold tracking-wider">
                    User Flow & Wireframing
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Design Experiments: From Insights to Wireframes
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="inline-flex flex-col justify-start items-start gap-3">
                    <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                      Fixing the Flow
                    </div>
                    <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                      We mapped the user flow for the Alert Details page to
                      identify obstacles and streamline the design, making the
                      alert resolution process faster and more intuitive.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Image
              src="/images/new-projects/team-x/5.png"
              alt="Flow Refining Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto px-40"
            />
            <div className="inline-flex flex-col justify-start items-start gap-3">
              <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                Sketching Ideas & Design
              </div>
              <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                Through discussions and brainstorming with developers and
                stakeholders, we realized that minimizing data wasn&apos;t an
                option, as every detail was crucial. However, the development
                team was working on an algorithm that could consolidate multiple
                scores into a single compounded score, helping the system
                determine which information to prioritize and display.
              </div>
            </div>

            <Image
              src="/images/new-projects/team-x/6.png"
              alt="Flow Refining Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
            <div className="w-full lg:w-2/3 relative justify-start">
              <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                After exploring multiple layouts, I worked closely with the
                team, iterating daily and gathering continuous feedback. The key
                questions driving our design decisions were:
                <br />
                <br />
              </span>
              <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                Will analysts be able to find the data easily?
                <br />
                Will this help them resolve alerts faster?
                <br />
                What are the key insights analysts need to understand the data?
                <br />
              </span>
              <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                <br />
                During these weeks of iteration, we also had to account for data
                variability—each case differed in complexity and size.
                Collaborating with developers to test promising designs was
                crucial to ensure scalability and effectiveness.
              </span>
            </div>

            {/* Options Display - Vertical layout */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <Image
                  className="w-full h-auto rounded-lg"
                  src="/images/new-projects/team-x/7.png"
                  width={1200}
                  height={675}
                  alt="Option A"
                />
                <div className="text-slate-800 text-base sm:text-lg lg:text-xl leading-relaxed">
                  ✅ Everything is accessible on scroll <br />
                  ✅ Right panel is for actions
                  <br />❌ Lot of data without segregation
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Image
                  className="w-full h-auto rounded-lg"
                  src="/images/new-projects/team-x/8.png"
                  width={1200}
                  height={675}
                  alt="Option B"
                />
                <div className="text-slate-800 text-base sm:text-lg lg:text-xl leading-relaxed">
                  ✅ Everything Segregated under tabs and sub-tabs Different
                  groupings(based on relation) have different tabs <br />
                  ✅ Important datapoints on top
                  <br />
                  ✅ Organised Panels
                  <br />❌ Might get confused from the information architecture
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Image
                  className="w-full h-auto rounded-lg"
                  src="/images/new-projects/team-x/9.png"
                  width={1200}
                  height={675}
                  alt="Option C"
                />
                <div className="text-slate-800 text-base sm:text-lg lg:text-xl leading-relaxed">
                  ✅ One navigation tab having clear structure of information
                  <br />
                  ✅ Each tab has different motive and different data, avoiding
                  ambiguity
                  <br />❌ Each tab still has lot of data without prioritisation
                </div>
              </div>
            </div>

            {/* Solution Approach */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-blue-600 text-base font-bold tracking-wider">
                    Post-Design
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Analyzing the solution and implementing feedback
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="inline-flex flex-col justify-start items-start gap-3">
                    <div className="w-full lg:w-2/3 relative justify-start">
                      <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                        While testing internally, we found Option B more
                        intuitive. We developed it, tested it on our database,
                        and shipped it for our beta launch. The design improved
                        user efficiency by{" "}
                      </span>
                      <span className="text-slate-800 text-xl font-bold font-sans leading-7">
                        10%,
                      </span>
                      <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                        {" "}
                        but it still wasn&apos;t enough.
                      </span>
                    </div>
                    <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                      Beyond this, we received mixed feedback from both users
                      and team members—some aspects worked well, while others
                      needed improvement. To align everyone&apos;s understanding
                      and address concerns, we conducted whiteboarding sessions
                      to brainstorm solutions and refine our approach
                      collaboratively.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Image
              src="/images/new-projects/team-x/9.png"
              alt="Flow Refining Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
            <div className="self-stretch pt-12 inline-flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                  Given our timeline for the next release, we prioritized key
                  problems to address and focused our ideation efforts on
                  solving them effectively.
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                  Focused Idnetified problems
                </div>
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                  Users struggled with complex cases due to the overwhelming
                  amount of data to analyze.
                  <br />
                  Alert resolution was still time-consuming, impacting
                  efficiency.
                  <br />
                  The available actions were too generic, providing little
                  guidance for effective decision-making.
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                  Breakthrough in Tech, helping better Ideation
                </div>
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                  AI-driven insights for alerts are now more optimized,
                  providing users with valuable guidance.
                  <br />
                  The risk score is now determined using a complex algorithm
                  that identifies key patterns in alerts, helping prioritize and
                  display the most critical data efficiently.
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="w-full lg:w-2/3 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                  With major technological breakthroughs, new opportunities
                  emerged for more tech-driven solutions, enabling us to address
                  user feedback more effectively and refine our problem-solving
                  approach.
                </div>
              </div>
              <div className="self-stretch pt-6 flex flex-col justify-start items-start gap-8">
                <div className="self-stretch inline-flex justify-start items-start gap-20">
                  <div className="flex-1 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                    Problem
                  </div>
                  <div className="flex-1 relative justify-start text-slate-800 text-3xl font-normal font-sans leading-10">
                    Solution
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-20">
                  <div className="flex-1 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                    A lot of data and Tabs
                  </div>
                  <div className="flex-1 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                    Improved risk scoring to enhance alert prioritization.
                    <br />
                    Reduced and restructured tabs for a more intuitive data
                    organization.
                    <br />
                    Optimized data presentation for clearer and faster analysis.
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-20">
                  <div className="flex-1 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                    Always need to generate AI Insights
                  </div>
                  <div className="flex-1 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                    Backend optimizations allow us to surface generated insights
                    upfront.
                    <br />
                    For lengthy insights, key data points are highlighted and
                    linked to relevant patterns for better clarity and
                    usability.
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-20">
                  <div className="flex-1 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                    Generic Action panel
                  </div>
                  <div className="flex-1 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                    Introduced specific action suggestions based on AI-generated
                    insights.
                    <br />
                    Implemented a way for users to take corrective actions if an
                    alert was deemed inaccurate.
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-20">
                  <div className="flex-1 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                    Guidance
                  </div>
                  <div className="flex-1 relative justify-start text-slate-800 text-xl font-normal font-sans leading-7">
                    Integrated a chat interface for seamless document uploads
                    and collaboration.
                    <br />
                    Enabled analysts to discuss and resolve alerts together in
                    real time.
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-slate-800 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight">
              understanding these issues, we tried to solve them, by the below
              UI
            </h2>

            <Image
              src="/images/new-projects/team-x/11.png"
              alt="Issue fix 1"
              width={1200}
              height={600}
              className="w-full bg-sky-50 rounded-xl overflow-hidden relative mt-12 mb-12"
            />
            <Image
              src="/images/new-projects/team-x/12.png"
              alt="Issue fix 2"
              width={1200}
              height={600}
              className="w-full bg-sky-50 rounded-xl overflow-hidden relative mt-12 mb-12"
            />
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-blue-600 text-base font-bold tracking-wider">
                    Impact
                  </div>
                  <h2 className="text-slate-800 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight">
                    The Results Are In – How We Made an Impact
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="inline-flex flex-col justify-start items-start gap-3">
                    <div className="w-full lg:w-2/3 relative justify-start">
                      <span className="text-slate-800 text-xl font-normal font-sans leading-7">
                        With these refinements, the product became more robust,
                        and its core features were now more intuitive. The
                        result? We got the data form the product team that the
                        Analysts could{" "}
                        <span className="font-bold">
                          solve 60% more fraud scenarios than before in a day!
                        </span>{" "}
                        Meanwhile, our dev team continued to refine AI-generated
                        insights, making them even more accurate and valuable to
                        users.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Next Projects Section - Moved outside the container */}
      <NextProjects />
    </main>
  );
}
