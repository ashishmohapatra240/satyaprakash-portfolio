import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  href = "#",
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="group bg-white rounded-lg p-6 transition-all duration-300 cursor-pointer">
        <div className="relative w-full h-96 mb-4 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-medium text-dark mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray">{description}</p>
      </div>
    </Link>
  );
}
