import AboutMe from './components/aboutMe'
import Experience from './components/experience'
import Projects from './components/projects'
import Skills from './components/skills'

export default function Home() {
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <main className='flex flex-col mt-16 gap-12'>
        {/* About me */}
        <AboutMe />
        {/* Experience */}
        <hr className="border border-solid border-accent rounded-md"></hr>
        <Experience />
        {/* Projects */}
        <Projects />
        {/* Skills */}
        <Skills />
      </main>
    </div>
  )
}
