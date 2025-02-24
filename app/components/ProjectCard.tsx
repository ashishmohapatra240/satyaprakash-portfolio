import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div
      className={`rounded-2xl px-4 sm:px-6 py-2 aspect-square flex flex-col items-start justify-start transition-transform hover:scale-105`}
    >
      <div className="flex-1 flex items-center justify-center w-full py-2 md:py-4">
        {image && (
          <Image
            src={image}
            alt={title}
            width={440}
            height={440}
            className="w-full h-auto object-contain"
          />
        )}
      </div>
      <div className={`text-white mt-2 text-left w-full`}>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-1 sm:mb-2 text-[#20233D] line-clamp-2">{title}</h3>
        <p className={`text-sm sm:text-base lg:text-lg opacity-80 text-[#8F919E] line-clamp-2`}>{description}</p>
      </div>
    </div>
  );
}
