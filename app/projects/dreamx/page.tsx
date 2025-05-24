import Image from "next/image";

export default function DreamXProject() {
    return (
        <main className="bg-white blogConstraint">
            <section className="py-12">
                <div className="mx-auto widescreenConstraint">
                    {/* Project Category */}
                    <div className="text-rose-700 text-base font-bold tracking-wider mt-12 sm:mt-24">
                        DREAMX
                    </div>

                    {/* Project Title */}
                    <h1 className="text-[#222222] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mt-4">
                        Building a revolutionary AI-powered dream interpretation platform
                    </h1>

                    {/* Hero Image */}
                    <div className="mt-8 sm:mt-12 mb-16 sm:mb-24">
                        <video
                            src="/images/new-projects/dreamx/1.mp4"
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
                        <div className="text-slate-800 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
                            DreamX is an innovative platform that uses advanced AI to interpret dreams and provide meaningful insights.
                            The challenge was to create an intuitive and engaging interface that makes dream interpretation accessible
                            while maintaining a sense of wonder and personal connection.
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
                                <p className="text-gray-400 text-xl">2 Months</p>
                            </div>
                        </div>
                    </div>

                    <Image
                        src="/images/new-projects/dreamx/2.png"
                        alt="DreamX Platform Overview"
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
                                        Understanding the Challenge
                                    </h2>
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
                                                        Building trust in AI-powered dream interpretation while maintaining the personal nature of dreams
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="flex-1 space-y-1">
                                                    <h3 className="text-slate-800 text-lg sm:text-xl font-bold leading-7">
                                                        Complex Information
                                                    </h3>
                                                    <p className="text-slate-800 text-lg sm:text-xl leading-7">
                                                        Presenting detailed dream interpretations in an easily digestible format
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-slate-800 text-lg sm:text-xl leading-7">
                                                The goal was to create a platform that feels both magical and trustworthy, while being easy to use.
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
                                        Creating the Dream Experience
                                    </h2>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-12">
                                    <div className="space-y-6 lg:max-w-full lg:w-2/3">
                                        <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                                            I explored various visual directions to create an immersive dream interpretation experience:
                                        </p>
                                        <div className="space-y-4">
                                            <p className="text-slate-800 text-xl font-normal font-sans leading-7">
                                                Key Design Elements:
                                            </p>
                                            <div className="space-y-2">
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
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-96 h-auto">
                                        <Image
                                            src="/images/new-projects/dreamx/3.png"
                                            alt="DreamX Interface Design"
                                            width={412}
                                            height={362}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Implementation Section */}
                        <section>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="text-rose-700 text-base font-bold tracking-wider">
                                        Implementation
                                    </div>
                                    <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                                        Bringing Dreams to Life
                                    </h2>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-12">
                                    <div className="space-y-6 lg:max-w-full lg:w-2/3">
                                        <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                                            The final implementation focused on creating a seamless user experience:
                                        </p>
                                        <p className="text-slate-800 text-lg sm:text-xl leading-relaxed">
                                            • Simple dream input process
                                            <br />
                                            • Clear interpretation presentation
                                            <br />
                                            • Interactive elements for deeper exploration
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-1/3">
                                        <video
                                            src="/images/new-projects/dreamx/4.mp4"
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
                            src="/images/new-projects/dreamx/5.png"
                            alt="DreamX Final Design"
                            width={1000}
                            height={600}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
} 