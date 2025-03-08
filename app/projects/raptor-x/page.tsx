import Image from "next/image";
import NextProjects from "@/app/components/NextProjects";

export default function RaptorXProject() {
  const otherProjects = [
    {
      href: "/projects/meta-design",
      title: "Meta design system",
      bgColor: "#222222",
      logoChar: "M",
      accentColor: "#FFCC00",
    },
    {
      href: "/projects/pizza-hut",
      title: "Pizza Hut",
      bgColor: "#E31837",
      logoChar: "P",
      accentColor: "#FFFFFF",
    },
  ];

  return (
    <main className="bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-36 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Project Category */}
          <div className="text-blue-600 text-base font-bold tracking-wider mt-12 sm:mt-24">
            RAPTOR X
          </div>

          {/* Project Title */}
          <h1 className="text-slate-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight sm:leading-snug md:leading-normal mt-4">
            Designing the next-gen fraud detection system
          </h1>

          {/* Hero Image */}
          <div className="mt-8 sm:mt-12 mb-16 sm:mb-24">
            <Image
              src="/images/projects/raptor-x/hero.png"
              alt="RaptorX Dashboard"
              width={1200}
              height={675}
              className="w-full rounded-lg"
              priority
            />
          </div>

          {/* Project Info */}
          <div className="py-12 sm:py-20 flex flex-col sm:flex-row gap-8 sm:gap-24">
            <div className="text-slate-800 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
              TeamX was developing a AI product to detect fraudulent activities,
              helping businesses reduce losses and take preventive measures for
              the future. They were refining their core features while
              brainstorming ideas for features that users would love and find
              engaging. We took on the challenge of improving the user flows to
              enhance accessibility and make the product more delightful and
              user-friendly.
            </div>
            <div className="flex flex-col gap-8 sm:min-w-[250px]">
              <div className="space-y-2">
                <h2 className="text-blue-600 text-xl font-medium leading-7">
                  My Role
                </h2>
                <p className="text-gray-400 text-xl">Product Designer</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-blue-600 text-xl font-medium leading-7">
                  Timeline
                </h2>
                <p className="text-gray-400 text-xl">3 Months</p>
              </div>
            </div>
          </div>

          {/* Content Sections - Using consistent spacing and responsive classes */}
          <div className="space-y-24">
            {/* Understanding the Analyst's Role */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-blue-600 text-base font-bold tracking-wider">
                    Case study focused on
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Shifting Our Focus – Understanding the Analyst&apos;s Role
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="space-y-6 lg:max-w-[740px]">
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      Throughout the development process, we tackled various
                      aspects sprint after sprint, adhering to the agile
                      methodology to ensure rapid iterations and faster
                      shipping. However, for now, I want to focus on one core
                      feature that specifically catered to a particular user
                      type.
                    </p>
                    <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                      The system supported multiple user types—some predefined,
                      while others could be created by the admin. However, the
                      primary hands-on user, the one interacting with the
                      product the most, was the Analyst. Their role involved
                      meticulously analyzing each generated alert, determining
                      whether it was indeed fraudulent, and taking the necessary
                      actions accordingly.
                    </p>
                  </div>
                  <Image
                    src="/images/projects/raptor-x/select-role.png"
                    alt="Select Role"
                    width={384}
                    height={224}
                    className="w-full lg:w-96 h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Identifying Key Problems */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-blue-600 text-base font-bold tracking-wider">
                    Analysis
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Scratching the Surface & Digging Deeper – Identifying the
                    Problems
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                    Our focus turned to the core feature—alert details. The
                    system was generating a high volume of alerts, leaving
                    Analysts overwhelmed with critical questions. Without clear
                    answers, resolving alerts became a challenge.
                  </p>
                  <ul className="space-y-3 text-xl font-bold text-slate-800 font-['Product_Sans']">
                    <li>• Why was this alert triggered?</li>
                    <li>• Who is involved?</li>
                    <li>• What key factors should I examine?</li>
                    <li>• What actions should I take?</li>
                  </ul>
                </div>
                <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                  And many more. However, the existing panel was overloaded with
                  excessive information, creating cognitive overload for the
                  user.
                </p>
              </div>
            </section>

            {/* Solution Approach */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-blue-600 text-base font-bold tracking-wider">
                    Approach
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Cracking the Code – Our Approach to Solving It
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                    We iterated. LOL
                  </p>
                  <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                    This was an entirely new domain for us, an intriguing
                    problem where an immense amount of data needed to be
                    presented—yet it varied from case to case.
                  </p>
                  <ul className="space-y-3 text-xl text-slate-800 font-['Product_Sans']">
                    <li>• Analyzed the data and categorized it meaningfully</li>
                    <li>
                      • Identified the core issues Analysts faced with the
                      current panel
                    </li>
                    <li>
                      • Documented the key needs and pain points of the Analyst
                    </li>
                  </ul>
                </div>
                <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                  After all this groundwork, we began designing our first draft.
                </p>
              </div>
            </section>

            {/* Flow Refining and Brainstorming */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-indigo-500 text-base font-bold tracking-wider">
                    Flow refining and Brainstorming
                  </div>
                  <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                    Refining the Core – <br />
                    Structuring Flows for Clarity
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-start items-start gap-12">
                  <Image
                    src="/images/projects/raptor-x/flow-refining.png"
                    alt="Flow Refining Dashboard"
                    width={412}
                    height={362}
                    className="w-full lg:w-96 h-auto"
                  />
                  <div className="flex flex-col justify-start items-start gap-6">
                    <div className="w-full lg:w-[740px]">
                      <span className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                        We structured the screens into clearly distinguished
                        sections, ensuring that each part served a specific
                        purpose. Tabs were introduced, each dedicated to a
                        focused aspect of the investigation. For instance,
                        consider this scenario:
                        <br />
                        <br />
                      </span>
                      <span className="text-slate-800 text-xl font-bold font-['Product_Sans'] leading-7">
                        &quot; 3 users using same address to return orders with
                        similar reasons &quot;
                      </span>
                    </div>
                    <div className="w-full lg:w-[740px]">
                      <span className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                        To assess this situation, the Analyst needed to check:
                        <br />
                        Users and their past order history
                        <br />
                        The relationship between the users
                        <br />
                        Associated risk scores
                        <br />
                        Identifiable patterns
                        <br />
                        Potential financial loss
                        <br />
                        Appropriate actions to mitigate risk
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[740px] text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                  To streamline the process, we organized the information with
                  key sections, including:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch py-0.5 flex justify-center items-center gap-2">
                      <div className="flex-1 text-slate-800 text-xl font-bold font-['Product_Sans'] leading-7">
                        Overview
                      </div>
                    </div>
                    <div className="self-stretch text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                      Understanding what the alert is and basic details with
                      core users involved
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch py-0.5 flex justify-center items-center gap-2">
                      <div className="flex-1 text-slate-800 text-xl font-bold font-['Product_Sans'] leading-7">
                        Graph
                      </div>
                    </div>
                    <div className="self-stretch text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                      A visual way to understand the relation between different
                      entities and also all the entities involved
                    </div>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="self-stretch py-0.5 flex justify-center items-center gap-2">
                      <div className="flex-1 text-slate-800 text-xl font-bold font-['Product_Sans'] leading-7">
                        Behavioral Analysis
                      </div>
                    </div>
                    <div className="self-stretch text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                      A Visual way of showing how the account and user behavior
                      deviated from usual one.
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[740px] text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                  Additional tabs were incorporated to maintain consistency with
                  the existing UI while refining the overall user experience.
                </div>
              </div>
            </section>
            <Image
              src="/images/projects/raptor-x/solving.png"
              alt="Flow Refining Dashboard"
              width={1200}
              height={600}
              className="w-full bg-sky-50 rounded-xl overflow-hidden relative mt-12 mb-12"
            />

            {/* Early Validation Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                    And then… we shipped! 🚀 But there was one major problem—we
                    had no access to users to validate our solution. This left
                    us with a burning question--
                  </div>
                  <div className="text-slate-800 text-3xl font-normal font-['Product_Sans'] leading-10">
                    Did we actually solve the problem?
                  </div>
                </div>
                <div className="inline-flex flex-col lg:flex-row justify-start items-start gap-12">
                  <div className="w-full lg:w-96 h-auto lg:h-96 rounded-xl flex justify-end items-center overflow-hidden">
                    <Image
                      className="w-full h-auto relative rounded"
                      src="/images/projects/raptor-x/testing.png"
                      alt="Early Validation"
                      width={659}
                      height={475}
                    />
                  </div>
                  <div className="inline-flex flex-col justify-start items-start gap-6">
                    <div className="w-full lg:w-[740px]">
                      <div className="self-stretch relative justify-start text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                        Initially, we were rolling out iterations without
                        validation. I raised concerns with our manager—without
                        proper testing, we were essentially shooting in the
                        dark.
                      </div>
                      <div className="self-stretch relative justify-start text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                        Weeks passed without any feedback. Our focus gradually
                        shifted to other features. But then, an opportunity
                        arose—one of our team representatives was able to
                        observe real users in action, noting the problems they
                        encountered firsthand.
                      </div>
                      <div className="self-stretch relative justify-start text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                        This phase was tough—sleepless nights, endless
                        iterations, and constant refining of the feature. But
                        the feedback revealed a harsh truth: we hadn&apos;t
                        simplified things enough. Analysts were still facing the
                        same struggles.
                        <br />
                        <br />
                        The root cause?
                        <br /> The lack of clarity on what to do next.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[740px] relative justify-start">
                  <span className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                    The issue boiled down to the
                  </span>
                  <span className="text-slate-800 text-3xl font-normal font-['Product_Sans'] leading-10">
                    sequence of data consumption
                  </span>
                </div>
                <div className="w-full lg:w-[740px] relative justify-start text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                  To resolve this, we explored alternative layouts, tested them
                  internally, and ultimately landed on a version that reduced
                  upfront information. Instead of overwhelming the user, the
                  interface encouraged them to dive deeper into details only
                  when necessary.
                </div>
              </div>
            </section>

            {/* UI Design Section */}
            <section>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="self-stretch relative justify-start text-indigo-500 text-base font-bold font-['Product_Sans'] tracking-wider">
                    UI Design
                  </div>
                  <div className="relative justify-start text-slate-800 text-5xl font-medium font-['Product_Sans_Medium'] leading-[67.20px]">
                    Adding the Final Touch – <br />
                    Polishing with UI & Visuals
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-start items-start gap-12">
                  <div className="inline-flex flex-col justify-start items-start gap-6">
                    <div className="w-full lg:w-[740px]">
                      <span className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                        We leveraged hierarchy and visual elements to make the
                        interface more intuitive and engaging. A{" "}
                      </span>
                      <span className="text-slate-800 text-xl font-bold font-['Product_Sans'] leading-7">
                        slight brand refresh{" "}
                      </span>
                      <span className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                        further enhanced the product&apos;s appeal. <br />
                        <br />
                        The feedback? <br />
                        Positive. Fewer pain points. A clearer experience.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Image
              src="/images/projects/raptor-x/graph-analytics.png"
              alt="Polishing"
              width={1200}
              height={600}
              className="w-full bg-sky-50 rounded-xl overflow-hidden relative mt-12 mb-12"
            />
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="self-stretch relative justify-start text-indigo-500 text-base font-bold font-['Product_Sans'] tracking-wider">
                  Impact
                </div>
                <div className="relative justify-start text-slate-800 text-5xl font-medium font-['Product_Sans_Medium'] leading-[67.20px]">
                  The Results Are In – <br />
                  How We Made an Impact
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-start items-start gap-12">
                <div className="inline-flex flex-col justify-start items-start gap-6">
                  <div className="w-full lg:w-[740px]">
                    <span className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                      With these refinements, the product became more robust,
                      and its core features were now fully functional and
                      intuitive. The result? Analysts could{" "}
                    </span>
                    <span className="text-slate-800 text-xl font-bold font-['Product_Sans'] leading-7">
                      solve 80% more fraud scenarios than before! <br />
                    </span>
                    <span className="text-slate-800 text-xl font-normal font-['Product_Sans'] leading-7">
                      <br />
                      Meanwhile, our dev team continued to refine AI-generated
                      insights, making them even more accurate and valuable to
                      users.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Projects Section - Moved outside the container */}
      <NextProjects projects={otherProjects} />
    </main>
  );
}
