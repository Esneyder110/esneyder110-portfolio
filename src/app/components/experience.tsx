import { FaBriefcase } from "react-icons/fa6";
import Job from "./job";
import { jobs } from "../assets/jobs";

export default function Experience () {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <FaBriefcase className="text-2xl text-accent animate-bounce" />
      </header>
      {
        jobs.map(job => {
          return (
            <Job
              key={job.role}
              role={job.role}
              company={job.company}
              yearStart={job.yearStart}
              monthStart={job.monthStart}
              yearEnd={job.yearEnd}
              monthEnd={job.monthEnd}
              descriptions={job.descriptions}
            />
          )
        })
      }
    </section>
  )
}
