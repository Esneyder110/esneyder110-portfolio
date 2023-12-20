import Image from "next/image";
import { FaGithub, FaRegFilePdf, FaLinkedin } from "react-icons/fa6";
import Socials from "./socials";

export default function AboutMe() {
  const imgSize = 150;
  const iconsSize = 24;
  return (
    <section className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 sm:justify-center">
      <Image className="rounded-full "
        alt="Esneyder Monsalve Profile Photo"
        src={`/photo.jpeg`}
        width={imgSize}
        height={imgSize}
      />
      <div className="flex flex-col text-center sm:text-left gap-2">
        <h1 className="text-4xl font-bold">Esneyder Monsalve</h1>
        <p id="intro" className="dark:text-secondary">I&apos;m a passionate backend developer.</p>
        <Socials iconsSize={iconsSize} />
      </div>
    </section>
  )
}
