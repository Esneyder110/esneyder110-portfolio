import { FaBriefcase } from "react-icons/fa6";
import Job from "./job";

export default function Experience() {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <FaBriefcase className="text-2xl text-accent animate-bounce" />
      </header>
      <Job
        role="Backend Developer"
        company="Digital Node"
        yearStart="2022"
        monthStart="Nov"
      />
    </section>
  )
}
