"use client";

import { usePathname } from "next/navigation";
import { ALL_PROJECTS } from "../data";

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
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="relative aspect-square rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: project.bgColor || "#222222" }}
                >
                  {project.logoChar && (
                    <>
                      <div className="text-white text-[120px] font-bold">
                        {project.logoChar}
                      </div>
                      <div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-12 h-1"
                        style={{
                          backgroundColor: project.accentColor || "#FFCC00",
                        }}
                      ></div>
                    </>
                  )}
                </div>
                <h3 className="font-medium group-hover:text-blue-600 transition-colors">
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
