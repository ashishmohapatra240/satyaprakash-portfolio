import Image from "next/image";

const Mentoring = () => {
  return (
    <main className="flex flex-col justify-between max-w-7xl mx-auto px-4 lg:px-0">
      {/* Intro Section */}
      <section className="w-full min-h-screen flex items-center">
        <div
          className="flex flex-col items-start justify-center gap-0"
          style={{ paddingTop: "20vh" }}
        >
          <h2 className="text-lg text-slate-800 mb-2 font-normal">
            Helping people by
          </h2>
          <h1
            className="font-normal text-slate-800 leading-tight mb-4 text-left"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            Mentoring
          </h1>
        </div>
      </section>

      {/* Existing Teaching Description */}
      <section className="w-full  pb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 w-full">
          <div className="max-w-sm text-slate-800 text-xl md:text-2xl font-normal">
            I love to spend time teaching stuff, that I know, and guiding
            students, who want to make a career in design
          </div>
          <div className="max-w-sm text-slate-800 text-xl md:text-2xl font-normal">
            I also help them with my network, by connecting them to certain
            individuals who can help them.
          </div>
        </div>
      </section>

      {/* Image and Quote Section 1 */}
      <section className="w-full  py-10 space-y-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/2">
            <Image
              src="/images/about/about-1.jpeg"
              alt="Mentoring session"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <p className="md:w-1/2 text-lg text-slate-700">
            Being a self-taught designer, I relate with people struggling and
            being clueless in this design career.
          </p>
        </div>

        {/* Image and Quote Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
          <div className="md:w-1/2">
            <Image
              src="/images/about/about-2.jpg"
              alt="Design teaching"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <p className="md:w-1/2 text-lg text-slate-700">
            Helping them with proper resources, and guiding them is what makes
            me happy. I also teach things, about design.
          </p>
        </div>

        {/* Group Image */}
        <div>
          <Image
            src="/images/about/about-3.jpg"
            alt="Group photo"
            width={1200}
            height={600}
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Grid of Two Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src="/images/about/about-4.jpg"
            alt="Workshop help"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full"
          />
          <Image
            src="/images/about/about-5.jpg"
            alt="Design session"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full"
          />
        </div>
      </section>

      {/* Footer Section */}
      <section className="text-center  py-10 space-y-4">
        <p className="text-lg text-slate-700">
          If you think, I can help you in any way, book a session. I’m happy to
          connect and help you as much as I can.
        </p>
        <span>
          {/* Replace this with <BookSessionButton /> */} [Book Session Button
          Here]
        </span>
      </section>
    </main>
  );
};

export default Mentoring;
