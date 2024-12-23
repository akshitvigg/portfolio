import { IconCloud } from "@/components/skillssphere";
import Image from "next/image";
import TechStackBtn from "@/components/skillschips";

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
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="pt-16  items-center flex  ">
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
        <div className=" rounded-md flex justify-between  pr-6 w-[770px] border border-zinc-800 ">
          <div className="grid pl-5 grid-cols-3 pb-3 gap-3 mt-5">
            <TechStackBtn name="Typecript" icon=" bg-[#3498db]" />
            <TechStackBtn name="React" icon="bg-cyan-300" />
            <TechStackBtn name="Next.js" icon="bg-white" />
            <TechStackBtn name="MongoDB" icon="bg-green-600" />
            <TechStackBtn name="PostgreSQL" icon="bg-blue-500" />
            <TechStackBtn name="MySQL" icon="bg-blue-400" />
            <TechStackBtn name="JavaScript" icon="bg-yellow-300" />
            <TechStackBtn name="Flask" icon="bg-white" />
            <TechStackBtn name="Python" icon="bg-green-400" />
            <TechStackBtn name="Java" icon="bg-orange-500" />
            <TechStackBtn name="C" icon=" bg-red-200" />
            <TechStackBtn name="C++" icon="bg-red-400" />
            <TechStackBtn name="Node.js" icon="bg-teal-600" />
            <TechStackBtn name="Express.js" icon="bg-emerald-300" />
            <TechStackBtn name="Tailwind" icon="bg-cyan-500" />
            <TechStackBtn name="Git" icon="bg-orange-700" />
          </div>

          <div className="">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
      <p className=" text-3xl mt-8 flex font-bold justify-center"> Projects</p>
    </div>
  );
}
