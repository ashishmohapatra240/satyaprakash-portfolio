import DesignCard from "../DesignCard";

export type DesignCardProps = {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  link: string;
};

export const DESIGN_ACTIVITIES = [
  {
    title: "Mentoring",
    description: "Giving back to the community",
    image: "/images/design/mentor.png",
    bgColor: "bg-[#7B6EF6]",
    link: "/mentoring"
  },
  {
    title: "3D & Motion",
    description: "Molding and flowing",
    image: "/images/design/motion.png",
    bgColor: "bg-[#FF9F6A]",
    link: "/3d-motion-more"
  },
  {
    title: "Sketching",
    description: "Scribbling imperfections",
    image: "/images/design/sketch.png",
    bgColor: "bg-[#8B7FE8]",
    link: "/scribbling"
  },
];

export default function Design() {
  return (
    <section className="min-h-screen py-20 items-center">
      <div className="max-w-7xl px-3 lg:px-20 md:px-6">
        <div className="text-left space-y-4 mb-16">
          <h2 className="text-4xl sm:text-7xl font-medium text-dark">
            design is just more
            <br className="hidden sm:block" /> than pixels
          </h2>
          {/* <p className="text-gray text-lg sm:text-xl">
            Just awesome stuff away from figma
          </p> */}
        </div>

        {/* <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          I always find some time to explore things and go away from figma to do
          crazy stuff, and it has always been great fun.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto place-items-center">
          {DESIGN_ACTIVITIES.map((activity, index) => (
            <DesignCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
