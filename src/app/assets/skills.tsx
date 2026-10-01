import type { JSX } from "react";
import {
  SiGo,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNpm,
  SiHtml5,
  SiCss,
  SiDocker,
  SiKubernetes,
  SiNestjs,
  SiGraphql,
  SiPostman,
  SiFigma,
  SiFirebase,
  SiLinux,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiPrisma
} from "react-icons/si";

interface SkillIconInterface {
  [key: string]: JSX.Element
}

export const EsneyderSkill = {
  Go: 'Go',
  TypeScript: 'TypeScript',
  JavaScript: 'JavaScript',
  NodeJs: 'NodeJs',
  npm: 'npm',
  HTML: 'HTML',
  CSS: 'CSS',
  Docker: 'Docker',
  Kubernetes: 'Kubernetes',
  Nestjs: 'Nestjs',
  REST: 'REST',
  GraphQL: 'GraphQL',
  git: 'git',
  Figma: 'Figma',
  Firebase: 'Firebase',
  Linux: 'Linux',
  'Next.js ': 'Next.js',
  Prisma: 'Prisma',
  Postgresql: 'Postgresql',
  React: 'ReactJS',
  Tailwind: 'TailwindCSS',
}

export const SkillIcon: SkillIconInterface = {
  'Go': <SiGo />,
  'TypeScript': <SiTypescript />,
  'JavaScript': <SiJavascript />,
  'NodeJs': <SiNodedotjs />,
  'npm': <SiNpm />,
  'HTML': <SiHtml5 />,
  'CSS': <SiCss />,
  'Docker': <SiDocker />,
  'Kubernetes': <SiKubernetes />,
  'Nestjs': <SiNestjs />,
  'REST': <SiPostman />,
  'GraphQL': <SiGraphql />,
  'git': <SiGit />,
  'Figma': <SiFigma />,
  'Firebase': <SiFirebase />,
  'Linux': <SiLinux />,
  'Next.js': <SiNextdotjs />,
  'Postgresql': <SiPostgresql />,
  'ReactJS': <SiReact />,
  'TailwindCSS': <SiTailwindcss />,
  'Prisma': <SiPrisma />
}
