import Image from "next/image";

const Scribbling = () => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 lg:px-0">
      {/* Hero Section */}
      <div className="flex flex-col">
        <div className="pt-20 md:pt-32 mb-8">
          <h2 className="text-base sm:text-lg text-[#1E293B] font-normal">
            Finding stillness in every stroke
          </h2>
          <h1 className="text-[clamp(3rem,12vw,8rem)] font-normal text-[#1E293B] leading-[0.95]">
            Scribbling
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-auto mb-20 md:mb-40 space-y-8 md:space-y-0">
          <div
            className="max-w-full md:max-w-[460px] text-slate-800 text-xl sm:text-2xl lg:text-3xl"
            style={{ lineHeight: "1.6" }}
          >
            Scribbling brings me a sense of peace. Drawing and sketching have
            been a part of my life since childhood, and they’re something I’ve
            always enjoyed.
          </div>
          <div
            className="max-w-full md:max-w-[460px] text-slate-800 text-xl sm:text-2xl lg:text-3xl"
            style={{ lineHeight: "1.6" }}
          >
            I may not be a pro yet, but I’m sketching my way to greatness—one
            doodle at a time!
          </div>
        </div>
      </div>

      {/* Image and Quote Sections */}
      <div className="py-16 md:py-32">
        <section className="space-y-8">
          {/* Image and Quote Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl opacity-0 blur-xl"></div>
              <div className="relative">
                <Image
                  src="/images/design/scribbling/1.png"
                  alt="Mentoring session"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="flex items-start">
              <p
                className="text-slate-800 text-xl sm:text-2xl lg:text-3xl tracking-wide cursor-default"
                style={{ lineHeight: "1.6" }}
              >
                Being a self-taught designer, I relate with people struggling
                and being clueless in this design career.
              </p>
            </div>
          </div>

          {/* Image and Quote Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="flex items-start">
              <p
                className="text-slate-800 text-xl sm:text-2xl lg:text-3xl tracking-wide cursor-default"
                style={{ lineHeight: "1.6" }}
              >
                Helping them with proper resources, and guiding them is what
                makes me happy. I also teach things, about design.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl opacity-0 blur-xl"></div>
              <div className="relative">
                <Image
                  src="/images/design/scribbling/2.png"
                  alt="Design teaching"
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover shadow-lg"
                  style={{ width: "600px", height: "400px" }}
                />
              </div>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-3xl opacity-0 blur-xl"></div>
            <div className="relative">
              <Image
                src="/images/design/scribbling/5.png"
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
                  src="/images/design/scribbling/4.png"
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
                  src="/images/design/scribbling/3.png"
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

      {/* Footer Section
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
            </section> */}
    </main>
  );
};

export default Scribbling;
