import { IconType } from "react-icons";
import { FaGithub, FaRegFilePdf, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function Socials({ iconsSize = 30 }: { iconsSize?: number }) {
  return (
    <div className="flex items-center justify-center sm:justify-normal gap-4">
      <a
        href={'/Esneyder Monsalve Summary.pdf'}
        download
        className="
        flex 
        border-2 
        items-center 
        text-accent 
        border-accent
        py-2
        px-4
        rounded-md
        gap-2 
        hover:text-inherit
        hover:border-transparent
        hover:bg-accent
        hover:text-light
        
        ">
        <FaRegFilePdf fontSize={iconsSize} />
        Summary
      </a>
      <Link
        href={'https://github.com/Esneyder110'}
        className="text-dark hover:text-accent dark:text-light"
      >
        <FaGithub fontSize={iconsSize} />
      </Link>
      <Link
        className="text-dark hover:text-accent dark:text-light"
        href={'https://www.linkedin.com/in/esneyder110/'}
      >
        <FaLinkedin fontSize={iconsSize} />
      </Link>
    </div>
  )
}
