import { FaCode } from "react-icons/fa6";
import Skill from "./skill";
import { EsneyderSkill } from "../assets/skills";

export default function Skills() {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold ">Skills</h2>
        <FaCode className="text-2xl text-accent animate-bounce" />
      </header>
      <ul className="flex flex-wrap gap-3">
        {
          Object.values(EsneyderSkill).map(skillName => (
            <Skill key={skillName} name={skillName} ></Skill>
          ))
        }
      </ul>
    </section>
  )
}
