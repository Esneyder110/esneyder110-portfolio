import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

interface ProjectInterface {
  imagePreview: string;
  title: string;
  description: string;
  technologies?: string[]
  srcCode: string;
  srcLive?: string;
}

export default function Project({
  imagePreview,
  title,
  description,
  technologies,
  srcCode,
  srcLive
}: ProjectInterface) {
  const imgSize = '250';
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <Image
        className="
        w-full
        sm:w-auto
        rounded-lg 
        transition-transform
        hover:scale-105
        "
        src={imagePreview}
        width={imgSize}
        height={imgSize}
        alt={`Preview of ${title} project`}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex gap-3">
          <Link
            target="_blank"
            className="
            group 
            transition-transform
            hover:scale-105 
            font-bold 
            flex 
            items-center 
            gap-2
            px-4
            py-2
            rounded-lg
            border-2
            border-accent
            bg-accent
            dark:bg-inherit
            dark:border-light
            hover:dark:border-accent
            text-light
            "
            href={srcCode}>Code
            <FaLink
              className="
              group-hover:translate-x-1
              group-hover:rotate-90
              transition-transform
              duration-150
              text-light
              dark:text-accent
              "
            />
          </Link>
          {
            srcLive && <Link
              target="_blank"
              className="
              group 
              transition-transform
              hover:scale-105 
              font-bold
              flex 
              items-center
              gap-2
              px-4
              py-2
              rounded-lg
              border-2
              border-accent
              bg-accent
              dark:bg-inherit
              dark:border-light
              text-light
              hover:dark:border-accent
              "
              href={srcLive}>Live Demo
              <FaLink
                className="
              group-hover:translate-x-1
              group-hover:rotate-90
              transition-transform
              duration-150
              text-light
              dark:text-accent
              "
              />
            </Link>
          }
        </div>
      </div>
    </div>
  )
}
