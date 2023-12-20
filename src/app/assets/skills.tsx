import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNpm,
  SiHtml5,
  SiCss3,
  SiDocker,
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
  TypeScript: 'TypeScript',
  JavaScript: 'JavaScript',
  NodeJs: 'NodeJs',
  npm: 'npm',
  HTML: 'HTML',
  CSS: 'CSS',
  Docker: 'Docker',
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
  'TypeScript': <SiTypescript />,
  'JavaScript': <SiJavascript />,
  'NodeJs': <SiNodedotjs />,
  'npm': <SiNpm />,
  'HTML': <SiHtml5 />,
  'CSS': <SiCss3 />,
  'Docker': <SiDocker />,
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
