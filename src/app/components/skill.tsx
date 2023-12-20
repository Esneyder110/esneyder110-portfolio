import { IconType } from "react-icons";
import { SkillIcon } from "../assets/skills";

interface SkillInterface {
  name: string;
}

export default function Skill({ name }: SkillInterface) {
  return (
    <li className="
      flex flex-col gap-5 
      border-2
      p-2
    border-dark
    dark:border-light
      rounded-lg
    ">
      <div className="flex items-center gap-2">
        <i className="text-2xl">{SkillIcon[name]}</i>
        <p className="text-lg">{name}</p>
      </div>
    </li>
  )
}
