export type Project = {
  href: string;
  title: string;
  logo?: string;
  path: string;
};

export const ALL_PROJECTS: Project[] = [
  {
    href: "/projects/spring-design",
    title: "Spring design system",
    path: "/images/new-projects/thumbnails/SD.png",
  },
  {
    href: "/projects/pizza-hut",
    title: "Pizza Hut",
    path: "/images/new-projects/thumbnails/PH.png",
  },
  {
    href: "/projects/team-x",
    title: "Team X",
    path: "/images/new-projects/thumbnails/TeamX.png",
  },
  {
    href: "/projects/dreamx",
    title: "DreamX",
    path: "/images/new-projects/thumbnails/DreamX.png",
  },
];
