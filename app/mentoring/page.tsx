import Image from "next/image";
import { Calendar } from "react-feather";
import KachingButton from "../components/KachingButton";

const Mentoring = () => {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-12 min-h-screen flex flex-col">
                <div className="pt-20 md:pt-32 mb-8">
                    <h2 className="text-base sm:text-lg text-[#1E293B] font-normal">Helping people by</h2>
                    <h1 className="text-[clamp(3rem,12vw,8rem)] font-normal text-[#1E293B] leading-[0.95]">
                        Mentoring
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between mt-auto mb-20 md:mb-40 space-y-8 md:space-y-0">
                    <div className="max-w-full md:max-w-[460px] text-slate-800 text-xl sm:text-2xl lg:text-3xl" style={{ lineHeight: '1.6' }}>
                        I love to spend time teaching stuff, that i know, and guiding students, who want to make a career in design
                    </div>
                    <div className="max-w-full md:max-w-[460px] text-slate-800 text-xl sm:text-2xl lg:text-3xl" style={{ lineHeight: '1.6' }}>
                        I also help them with my network, by connecting them to certain individuals who can help them.
                    </div>
                </div>
            </div>

            {/* Image and Quote Sections */}
            <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-32">
                <section className="space-y-8">
                    {/* Image and Quote Section 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl opacity-0 blur-xl"></div>
                            <div className="relative">
                                <Image
                                    src="/images/design/mentoring/1.png"
                                    alt="Mentoring session"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="flex items-start">
                            <p className="text-slate-800 text-xl sm:text-2xl lg:text-3xl tracking-wide cursor-default" style={{ lineHeight: '1.6' }}>
                                Being a self-taught designer, I relate with people struggling and being clueless in this design career.
                            </p>
                        </div>
                    </div>

                    {/* Image and Quote Section 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="flex items-start">
                            <p className="text-slate-800 text-xl sm:text-2xl lg:text-3xl tracking-wide cursor-default" style={{ lineHeight: '1.6' }}>
                                Helping them with proper resources, and guiding them is what makes me happy. I also teach things, about design.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl opacity-0 blur-xl"></div>
                            <div className="relative">
                                <Image
                                    src="/images/design/mentoring/2.png"
                                    alt="Design teaching"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover shadow-lg"
                                    style={{ width: '600px', height: '400px' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Full Width Image */}
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-3xl opacity-0 blur-xl"></div>
                        <div className="relative">
                            <Image
                                src="/images/design/mentoring/3.png"
                                alt="Group photo"
                                width={1440}
                                height={720}
                                className="w-full rounded-2xl object-cover aspect-[3/2] sm:aspect-[2/1] shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Two Column Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl opacity-0 blur-xl"></div>
                            <div className="relative">
                                <Image
                                    src="/images/design/mentoring/4.png"
                                    alt="Workshop help"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover w-full aspect-[4/3] shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl opacity-0 blur-xl"></div>
                            <div className="relative">
                                <Image
                                    src="/images/design/mentoring/5.png"
                                    alt="Design session"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover w-full aspect-[4/3] shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer Section */}
            <section className="pt-30 pb-40 md:pt-48 md:pb-64 text-center">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                    <p className="max-w-[640px] mx-auto text-slate-800 text-xl sm:text-2xl lg:text-3xl tracking-wide cursor-default mb-8 md:mb-12" style={{ lineHeight: '1.6' }}>
                        If you think, I can help you in any way, book a session. I&apos;m happy to connect and help you as much as I can.
                    </p>
                    <div className="flex justify-center">
                        <KachingButton>
                            <Calendar size={20} className="mr-2" />
                            Book a session
                        </KachingButton>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Mentoring;