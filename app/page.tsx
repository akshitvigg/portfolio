import { IconCloud } from "@/components/skillssphere";
import Image from "next/image";

const slugs = [
  "flask",
  "tailwindcss",
  "mysql",
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "mongodb",
  "linux",
  "python",
  "c",
  "cplusplus",
  "visualstudiocode",
  "figma",
  "postman",
  "jinja",
];

export default function Home() {
  return (
    <div>
      <div className="mt-16  items-center flex  ">
        <div className="pr-7 ml-[270px]  ">
          <Image
            className="  rounded-full"
            src={
              "https://i.pinimg.com/736x/aa/c8/02/aac8024b2258aad7262895c4b0bccd79.jpg"
            }
            alt="ds"
            width={100}
            height={300}
          />
        </div>
        <div className="">
          <p className="  font-bold text-4xl">Hi I'm Akshit</p>
          <p>Full Stack developer </p>
        </div>
      </div>
      <p className="pl-[270px] pt-10  text-xl font-bold ">About</p>
      <p className="pl-[270px]  w-[1050px] text-neutral-400">
        I’m Akshit, a self-taught programmer who loves diving into new things
        and figuring them out as I go. Right now, I’m learning Japanese and
        exploring cool areas like AI and blockchain. I’m all about building
        things with code, breaking them down, and making them better. I’ve
        always had an interest in art, even if I’m not great at it, but these
        days, I’m focused on creating stuff that actually works and solving
        problems with technology.
      </p>
      <p className=" text-xl font-bold mt-10 flex pb-2 pl-[270px]">Skills</p>
      <div className=" flex  h-72 ml-8 justify-center">
        <div className=" rounded-md flex justify-end pr-6 w-[770px] border border-zinc-800 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      dsds
    </div>
  );
}
