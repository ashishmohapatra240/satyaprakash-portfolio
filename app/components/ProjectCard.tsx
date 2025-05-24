import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

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

  const handleClick = (e: React.MouseEvent) => {
    if (isSecureProject) {
      const element = e.currentTarget;
      element.classList.add('shake-animation');
      setTimeout(() => {
        element.classList.remove('shake-animation');
      }, 600);
    }
  };

  const CardContent = () => (
    <div
      className="group bg-white rounded-lg p-6 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
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
      <h3
        className={clsx(
          "text-lg font-medium text-dark mb-2 transition-colors font-sans",
          isSecureProject
            ? "group-hover:text-red-700"
            : "group-hover:text-primary"
        )}
      >
        {title}
      </h3>
      <p className="text-gray">{description}</p>
    </div>
  );

  return isSecureProject ? (
    <CardContent />
  ) : (
    <Link href={href}>
      <CardContent />
    </Link>
  );
}
