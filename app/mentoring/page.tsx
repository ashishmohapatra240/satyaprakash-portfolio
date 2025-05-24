import Image from "next/image";

const Mentoring = () => {
    return (
        <main className="pt-2 pb-0 flex flex-col">
            <div className="h-dvh flex flex-col justify-end pb-24">
                {/* Intro Section */}
                <section className="w-full widescreenConstraint mb-10">
                    <div className="flex flex-col items-start">
                        <h2 className="text-lg text-slate-800 mb-2 font-normal">Helping people by</h2>
                        <h1
                            className="font-normal text-slate-800 leading-tight mb-4 text-left"
                            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
                        >
                            Mentoring
                        </h1>
                    </div>
                </section>

                {/* Teaching Description Section */}
                <section className="w-full widescreenConstraint">
                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-32">
                        <div className="md:max-w-sm">
                            <p className="text-lg md:text-2xl text-slate-800 font-normal leading-relaxed">
                                I love to spend time teaching stuff, that i know, and guiding students, who want to make a career in design
                            </p>
                        </div>
                        <div className="md:max-w-sm">
                            <p className="text-lg md:text-2xl text-slate-800 font-normal leading-relaxed">
                                I also help them with my network, by connecting them to certain individuals who can help them.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Image and Quote Section 1 */}
            <section className="w-full widescreenConstraint py-12">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        <div className="w-full md:w-1/2 h-full transform transition-all duration-500 hover:scale-105">
                            <Image
                                src="/images/about/about-1.jpeg"
                                alt="Mentoring session"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover w-full h-[400px] shadow-lg transition-transform duration-500 hover:shadow-xl"
                                priority
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex items-center transform transition-all duration-500 hover:translate-x-2">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                Being a self-taught designer, I relate with people struggling and being clueless in this design career.
                            </p>
                        </div>
                    </div>

                    {/* Image and Quote Section 2 */}
                    <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                        <div className="w-full md:w-1/2 h-full transform transition-all duration-500 hover:scale-105">
                            <Image
                                src="/images/about/about-2.jpg"
                                alt="Design teaching"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover w-full h-[400px] shadow-lg transition-transform duration-500 hover:shadow-xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex items-center transform transition-all duration-500 hover:-translate-x-2">
                            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                                Helping them with proper resources, and guiding them is what makes me happy. I also teach things, about design.
                            </p>
                        </div>
                    </div>

                    {/* Group Image */}
                    <div className="transform transition-all duration-500 hover:scale-102">
                        <Image
                            src="/images/about/about-3.jpg"
                            alt="Group photo"
                            width={1200}
                            height={250}
                            className="w-full rounded-2xl object-cover shadow-lg transition-all duration-500 hover:shadow-xl"
                        />
                    </div>

                    {/* Grid of Two Images */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="transform transition-all duration-500 hover:scale-105">
                            <Image
                                src="/images/about/about-4.jpg"
                                alt="Workshop help"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover w-full h-[400px] shadow-lg transition-all duration-500 hover:shadow-xl"
                            />
                        </div>
                        <div className="transform transition-all duration-500 hover:scale-105">
                            <Image
                                src="/images/about/about-5.jpg"
                                alt="Design session"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover w-full h-[400px] shadow-lg transition-all duration-500 hover:shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className="text-center widescreenConstraint py-8">
                <p className="text-lg text-slate-700 mb-4">
                    If you think, I can help you in any way, book a session. I'm happy to connect and help you as much as I can.
                </p>
                <span>{/* Replace this with <BookSessionButton /> */} [Book Session Button Here]</span>
            </section>
        </main>
    );
};

export default Mentoring;




