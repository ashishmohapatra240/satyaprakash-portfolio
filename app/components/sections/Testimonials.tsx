import Image from "next/image";
import Marquee from "react-fast-marquee";

const TESTIMONIALS = [
  {
    text: "From concept to execution, everything was flawless. Our brand has never looked better!",
    author: "Jerome Bell",
    role: "Design Manager, Proximity",
    avatar: "/images/testimonials/jerome.png",
  },
  {
    text: "Brilliant creativity and attention to detail. Every project exceeded our expectations!",
    author: "Jacob Jones",
    role: "Lead Designer, Studio",
    avatar: "/images/testimonials/jacob.png",
  },
  {
    text: "A pleasure to work with! Exceptional design skills and a great understanding of our vision.",
    author: "Eleanor Pena",
    role: "Art Director, Artwave",
    avatar: "/images/testimonials/eleanor.png",
  },
  {
    text: "Professional, reliable, and incredibly talented. The results truly brought our vision to life!",
    author: "Courtney Henry",
    role: "Creative Director, Designco",
    avatar: "/images/testimonials/courtney.png",
  },
];

function TestimonialCard({
  text,
  author,
  role,
  avatar,
}: {
  text: string;
  author: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="w-96 h-44 p-1 bg-white rounded-xl shadow-[4px_4px_24px_0px_rgba(111,111,111,0.05)] border border-gray-200 inline-flex flex-col justify-center items-start mx-4">
      <div className="self-stretch h-28 p-8 bg-white rounded-xl shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] shadow-[inset_0px_1px_24px_0px_rgba(0,0,0,0.05)] flex flex-col justify-center items-start gap-4">
        <div className="relative justify-center text-slate-800 text-base font-normal font-['Product_Sans'] leading-normal tracking-wide">
          {text}
        </div>
      </div>
      <div className="self-stretch px-2 py-3 rounded-lg inline-flex justify-center items-center gap-2">
        <Image
          className="w-10 h-10 relative rounded-full"
          src={avatar}
          alt={author}
          width={40}
          height={40}
        />
        <div className="grow shrink basis-0 inline-flex flex-col justify-center items-start">
          <div className="relative justify-end text-slate-800 text-base font-bold font-['Space_Grotesk'] leading-normal tracking-wide">
            {author}
          </div>
          <div className="relative justify-end text-slate-800/50 text-xs font-normal font-['Product_Sans'] leading-none tracking-wide">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto mb-16 widescreenConstraint">
        <div className="text-center space-y-4">
          <h2 className="text-xl sm:text-5xl font-medium text-[#0E0F16]">
            People make the
            <br className="hidden sm:block" />
            journey more enjoyable
          </h2>
          <p className="text-gray text-lg sm:text-xl">
            Believe me, I didn&apos;t bribe them
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {/* First row - moving right */}
        <Marquee gradient={false} speed={40}>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} {...testimonial} />
          ))}
        </Marquee>

        {/* Second row - moving left */}
        <Marquee gradient={false} speed={40} direction="right">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
