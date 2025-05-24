import Image from "next/image";

const Mentoring = () => {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 min-h-screen flex flex-col">
                <div className="pt-20 md:pt-32 mb-8">
                    <h2 className="text-base sm:text-lg text-[#1E293B] font-normal">Helping people by</h2>
                    <h1 className="text-[clamp(3rem,12vw,8rem)] font-normal text-[#1E293B] leading-[0.95]">
                        Mentoring
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between mt-auto mb-20 md:mb-40 space-y-8 md:space-y-0">
                    <div className="max-w-full md:max-w-[460px] text-[#1E293B] text-lg sm:text-xl leading-relaxed">
                        I love to spend time teaching stuff, that i know, and guiding students, who want to make a career in design
                    </div>
                    <div className="max-w-full md:max-w-[460px] text-[#1E293B] text-lg sm:text-xl leading-relaxed">
                        I also help them with my network, by connecting them to certain individuals who can help them.
                    </div>
                </div>
            </div>

            {/* Image and Quote Sections */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-32 space-y-16 md:space-y-32">
                {/* Image and Quote Section 1 */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/about/about-1.jpeg"
                            alt="Mentoring session"
                            width={600}
                            height={400}
                            className="rounded-2xl object-cover w-full aspect-[4/3]"
                        />
                    </div>
                    <p className="w-full md:w-1/2 text-lg sm:text-xl text-[#1E293B] leading-relaxed">
                        Being a self-taught designer, I relate with people struggling and being clueless in this design career.
                    </p>
                </div>

                {/* Image and Quote Section 2 */}
                <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/about/about-2.jpg"
                            alt="Design teaching"
                            width={600}
                            height={400}
                            className="rounded-2xl object-cover w-full aspect-[4/3]"
                        />
                    </div>
                    <p className="w-full md:w-1/2 text-lg sm:text-xl text-[#1E293B] leading-relaxed">
                        Helping them with proper resources, and guiding them is what makes me happy. I also teach things, about design.
                    </p>
                </div>

                {/* Full Width Image */}
                <div>
                    <Image
                        src="/images/about/about-3.jpg"
                        alt="Group photo"
                        width={1440}
                        height={720}
                        className="w-full rounded-2xl object-cover aspect-[3/2] sm:aspect-[2/1]"
                    />
                </div>

                {/* Two Column Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <Image
                        src="/images/about/about-4.jpg"
                        alt="Workshop help"
                        width={600}
                        height={400}
                        className="rounded-2xl object-cover w-full aspect-[4/3]"
                    />
                    <Image
                        src="/images/about/about-5.jpg"
                        alt="Design session"
                        width={600}
                        height={400}
                        className="rounded-2xl object-cover w-full aspect-[4/3]"
                    />
                </div>
            </div>

            {/* Footer Section */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-32 text-center">
                <p className="text-lg sm:text-xl text-[#1E293B] leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
                    If you think, I can help you in any way, book a session. I'm happy to connect and help you as much as I can.
                </p>
                <button className="bg-[#0000FF] text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg hover:bg-blue-700 transition-colors">
                    Book a Session
                </button>
            </div>
        </main>
    );
};

export default Mentoring;
