"use client";

import { usePathname } from "next/navigation";
import { ALL_PROJECTS } from "../data";
import Image from "next/image";
export default function NextProjects() {
  const pathname = usePathname();
  const displayProjects = ALL_PROJECTS.filter(
    (project) => project.href !== pathname
  );

  return (
    <section className="bg-gray-50 py-20 mx-auto max-w-7xl px-3 lg:px-20 md:px-6">
      <div className="mx-auto ">
        <h2 className="text-2xl font-medium text-dark mb-8">
          Check out more projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <a key={index} href={project.href} className="group">
              <div className="bg-white rounded-xl hover:scale-105 transition-all duration-300 px-2">
                <Image
                  src={project.path}
                  alt={project.title}
                  width={400}
                  height={400}
                />
                <h3 className="font-medium group-hover:text-blue-600 transition-colors mt-4 text-xl">
                  {project.title} →
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
