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
  const isSecureProject =
    description === "Marathon Digital Holdings" || description === "anonymous";

  return (
    <Link href={href}>
      <div className="group bg-white rounded-lg p-6 transition-all duration-300 cursor-pointer">
        <div className="relative w-full h-96 mb-4 overflow-hidden rounded-lg">
          {isSecureProject && (
            <div className="absolute top-4 left-4 z-10">
              <Image
                src="/icons/lock.png"
                alt="Secure Project"
                width={72}
                height={40}
                className="opacity-80 scale-75"
              />
            </div>
          )}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-medium text-dark mb-2 group-hover:text-primary transition-colors font-sans">
          {title}
        </h3>
        <p className="text-gray">{description}</p>
      </div>
    </Link>
  );
}
