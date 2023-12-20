import { FaWandMagicSparkles } from "react-icons/fa6";
import Project from "./project";
import { projects } from "../assets/projects";

export default function Projects() {
  return (
    <section className="flex flex-col gap-8">
      <header className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold ">Projects</h2>
        <FaWandMagicSparkles className="text-2xl text-accent animate-bounce" />
      </header>
      {
        projects.map(project => {
          return (
            <Project
              key={project.title}
              imagePreview={project.imagePreview || '/photo.jpeg'}
              title={project.title}
              description={project.description}
              srcCode={project.srcCode}
              srcLive={project.srcLive}
            />
          )
        })
      }
    </section>
  )
}