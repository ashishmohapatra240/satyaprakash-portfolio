export type Project = {
  href: string;
  title: string;
  logo?: string;
  bgColor?: string;
  logoChar?: string;
  accentColor?: string;
};

export const ALL_PROJECTS = [
  {
    href: "/projects/spring-design",
    title: "Spring design system",
    bgColor: "#222222",
    logoChar: "S",
    accentColor: "#FFCC00",
  },
  {
    href: "/projects/pizza-hut",
    title: "Pizza Hut",
    bgColor: "#E31837",
    logoChar: "T",
    accentColor: "#FFFFFF",
  },
  {
    href: "/projects/team-x",
    title: "TEAM X",
    bgColor: "#1E40AF",
    logoChar: "R",
    accentColor: "#FFFFFF",
  },
];
