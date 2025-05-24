import DesignCard from "../DesignCard";

export type DesignCardProps = {
  title: string;
  description: string;
  image: string;
  bgColor: string;
};

export const DESIGN_ACTIVITIES = [
  {
    title: "Mentoring",
    description: "Giving back to the community",
    image: "/images/design/mentor.png",
    bgColor: "bg-[#7B6EF6]",
  },
  {
    title: "3D & Motion",
    description: "Molding and flowing",
    image: "/images/design/motion.png",
    bgColor: "bg-[#FF9F6A]",
  },
  {
    title: "Sketching",
    description: "Scribbling imperfections",
    image: "/images/design/sketch.png",
    bgColor: "bg-[#8B7FE8]",
  },
];

export default function Design() {
  return (
    <section className="min-h-screen bg-white py-20 flex items-center">
      <div className=" mx-auto widescreenConstraint">
        <div className="text-left space-y-4 mb-16">
          <h2 className="text-4xl sm:text-7xl font-medium text-[#0E0F16]">
            design is just more
            <br className="hidden sm:block" /> design realm
          </h2>
          {/* <p className="text-gray text-lg sm:text-xl">
            Just awesome stuff away from figma
          </p> */}
        </div>

        {/* <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          I always find some time to explore things and go away from figma to do
          crazy stuff, and it has always been great fun.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto place-items-center">
          {DESIGN_ACTIVITIES.map((activity, index) => (
            <DesignCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
