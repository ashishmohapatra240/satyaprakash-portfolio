import Image from "next/image";

const DESIGN_ACTIVITIES = [
  {
    title: "Mentoring",
    image: "/images/design/mentoring.png",
    bgColor: "bg-[#7B6EF6]",
  },
  {
    title: "3D & Motion",
    image: "/images/design/3d-motion.png",
    bgColor: "bg-[#FF9F6A]",
  },
  {
    title: "Sketching",
    image: "/images/design/sketching.png",
    bgColor: "bg-[#8B7FE8]",
  },
];

export default function Design() {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-36 widescreenConstraint">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl sm:text-5xl font-medium text-[#0E0F16]">
            Exploring and living
            <br className="hidden sm:block" />
            design realm
          </h2>
          <p className="text-[#9099A5] text-lg sm:text-xl">
            Just awesome stuff away from figma
          </p>
        </div>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          I always find some time to explore things and go away from figma to do
          crazy stuff, and it have always been great fun.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {DESIGN_ACTIVITIES.map((activity, index) => (
            <div
              key={index}
              className={`${activity.bgColor} rounded-2xl p-6 text-white relative overflow-hidden min-h-[300px] flex flex-col justify-between`}
            >
              <div className="absolute h-full w-full top-0 left-0">
                <Image
                  src={activity.image}
                  fill
                  className="object-cover"
                  alt={activity.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
