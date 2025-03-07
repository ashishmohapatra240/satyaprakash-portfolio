import Image from "next/image";

export default function About() {
  return (
    <main className="pt-16 pb-0">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="lg:w-3/5">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-slate-800 leading-tight mb-6">
                Design, sports <br className="hidden sm:block" />
                and motorcycle
              </h1>
              <p className="text-xl text-slate-800">
                Cherishing every small milestones...
              </p>
            </div>

            {/* Image Grid */}
            <div className="lg:w-2/5 relative">
              <div className="grid grid-cols-6 gap-4">
                {/* Top Image */}
                <div className="col-span-4 col-start-2">
                  <div className="relative w-64 h-96 rounded-xl overflow-hidden">
                    <Image
                      src="/images/about-profile.png"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-2xl sm:text-3xl md:text-5xl text-slate-800 font-normal leading-relaxed">
              Design isn&apos;t just what I do—it&apos;s what I keep falling
              for, again and again. Solving problems, pushing boundaries, and
              discovering new perspectives is what keeps the spark alive.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-20 mt-48">
            <div className="md:w-3/5">
              <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                Hey, I&apos;m Satyaprakash Ray! But you can call me Satya.
                I&apos;m a design enthusiast with 4+ years of experience shaping
                products, tackling diverse challenges, and crafting design
                systems. From refining user experiences to building scalable
                solutions, I thrive on turning ideas into something meaningful.
              </p>
            </div>
            <div className="md:w-2/5">
              <div className="relative w-full h-56 aspect-video md:aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/with-dog.png"
                  alt="With pet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
            <div className="bg-gray-300 rounded-xl aspect-video md:aspect-square h-56 w-full"></div>
            <div className="bg-gray-300 rounded-xl aspect-video md:aspect-square h-56 w-full"></div>
            <div className="bg-gray-300 rounded-xl aspect-video md:aspect-square h-56 w-full"></div>
          </div>

          <div className="mb-20">
            <p className="text-lg md:text-xl text-slate-800 leading-relaxed mb-12 w-2/3">
              I&apos;ve been lucky to work across multiple industries—Fintech,
              Edtech, Productivity, Cryptocurrency, and beyond. But there&apos;s
              still so much more I want to explore and solve. I believe in
              learning, collaborating, failing fast, and iterating until I win.
            </p>

            <p className="text-lg md:text-xl text-slate-800 leading-relaxed w-2/3">
              Design fuels my weekdays, but my weekends belong to the thrill of
              riding and the joy of playing. Whether it&apos;s hitting the road
              or getting lost in a game, that&apos;s where I find my balance.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="bg-gray-100 py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-neutral-900 font-normal leading-tight">
              If any of this sounds even a little interesting, just drop a
              hello!
              <br className="hidden md:block" />
              I&apos;d love to connect, brainstorm wild ideas, and see where
              creativity takes us.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
