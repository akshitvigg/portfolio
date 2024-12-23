import { IconCloud } from "@/components/skillssphere";
import Image from "next/image";
import TechStackBtn from "@/components/skillschips";
import { Card } from "@/components/projectsCard";

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

const anitaroArr = ["Next.js", "Typescript", "TailwindCSS", "NextUi"];
const secBrainarr = ["React", "Typescript", "TailwindCSS", "MongoDB"];
const astroquestarr = ["React", "Javascript"];
const pawpalarr = ["React", "Javascript", "MongoDB"];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="pt-16  items-center flex  ">
        <div className="pr-7 ml-[400px]  ">
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
      <p className="pl-[400px] pt-10  text-xl font-bold ">About</p>
      <p className="pl-[400px]  w-[1150px] text-neutral-400">
        I’m Akshit, a self-taught programmer who loves diving into new things
        and figuring them out as I go. Right now, I’m learning Japanese and
        exploring cool areas like AI and blockchain. I’m all about building
        things with code, breaking them down, and making them better. I’ve
        always had an interest in art, even if I’m not great at it, but these
        days, I’m focused on creating stuff that actually works and solving
        problems with technology.
      </p>
      <p className=" text-xl font-bold mt-10 flex pb-2 pl-[400px]">Skills</p>
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
      <div>
        <p className=" text-2xl mt-8 flex font-bold justify-center">Projects</p>
        <p className=" tracking-wider pt-2 text-4xl font-bold justify-center flex ">
          Check out my latest work
        </p>
        <p className="text-xl pt-2 font-bold text-neutral-400 justify-center flex">
          I've worked on a variety of projects, here are some that I like.
        </p>
        <div className="pl-7 pt-7 flex justify-center">
          <div className=" pb-5 grid gap-3 grid-cols-2">
            <Card
              src={"/anitaro.png"}
              projectTitle="アニタロ"
              description="A site where users can watch anime and read manga with a smooth and enjoyable experience. Built with a user-friendly interface for effortless content exploration."
              toolsUsed={anitaroArr}
              projLink="https://anim-gules.vercel.app/"
            />
            <Card
              src={"/secondBrain.png"}
              projectTitle="SecondBrain"
              description="A site to save and organize content like YouTube videos, tweets, documents and more. share your 'brain' with friends to explore your collection."
              toolsUsed={secBrainarr}
              projLink="https://secondbrainn.netlify.app/"
            />
            <Card
              src={"/astroquest.png"}
              projectTitle="AstroQuest"
              description="A fun web app that lets you explore the solar system with detailed planet info, smooth space animations, and a bot to help guide you on your cosmic journey"
              toolsUsed={astroquestarr}
              projLink="https://astroquest.netlify.app/"
            />
            <Card
              src={"/pawpal.png"}
              projectTitle="PawPal"
              description="A simple pet adoption site where users can browse and adopt pets in need of a home. Features a user-friendly interface to explore available pets and their details."
              toolsUsed={pawpalarr}
              projLink="https://paw-pal.netlify.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
