"use client";
import { IconCloud } from "@/components/skillssphere";
import Image from "next/image";
import TechStackBtn from "@/components/skillschips";
import { Card } from "@/components/projectsCard";
import { Snippet } from "@nextui-org/snippet";
import GithubContributions from "@/components/githubcontri";

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

const anitaroArr = ["Next.js", "Typescript", "TailwindCSS", "NextUI"];
const secBrainarr = ["React", "Typescript", "TailwindCSS", "MongoDB"];
const chitchat = ["React", "Typescript", "WebSockets"];
const astroquestarr = ["React", "Javascript"];
const pawpalarr = ["React", "Javascript", "MongoDB"];
const bggonearr = ["Next.js", "Typescript", "TailwindCSS", "MagicUI"];
const solwallarr = ["React", "Typescript", "TailwindCSS", "ShadcnUI"];
const ensoarr = ["Next.js", "Typescript", "TailwindCSS", "WebSocket"];

export default function Home() {
  return (
    <div className="  flex justify-center font-sans bg-white text-neutral-900  dark:bg-neutral-900 dark:text-white">
      <div className=" w-[370px] sm:w-[900px] min-h-screen ">
        <div className="sm:pt-16 sm:pl-[84px]  items-center flex  ">
          <div className="sm:pr-7 pl-3 sm:pl-0 pr-5  ">
            <Image
              className=" mb-10 sm:mb-0  rounded-full"
              src={"/cheng.jpg"}
              alt="pfp"
              width={100}
              height={300}
            />
          </div>
          <div className="">
            <p className="font-bold pt-4 sm:pt-0 text-4xl">Hi, I'm Akshit</p>
            <p className=" pt-2 pr-2 sm:pr-0">
              I mess with code, break stuff, and make it better
            </p>
            <Snippet
              className=" collapse sm:visible mt-1"
              tooltipProps={{
                content: "Copy and run this on your terminal",
                placement: "right",
              }}
              size="md"
            >
              npx akshiro
            </Snippet>
          </div>
        </div>
        <p className="pl-3 sm:pt-10 sm:ml-[70px]  text-xl font-bold ">About</p>
        <p className=" pl-3 pr-3 sm:ml-[70px] sm:pr-0 sm:w-[780px] text-justify text-neutral-500 dark:text-neutral-400">
          I’m a 20-year-old CS student. I’m all about building things with code,
          breaking them down, and making them better. I’ve always had an
          interest in art, but I’m more focused on creating stuff that actually
          works and solving problems with technology. Robots catch my attention,
          and I love figuring out how they work.When I’m not coding, you’ll
          probably find me reading or messing around with my Japanese studies.
        </p>
        <p className=" text-xl pl-3 font-bold mt-10 flex pb-2 sm:ml-[70px] ">
          Skills
        </p>
        <div className=" flex  h-72 sm:ml-8 justify-center">
          <div className=" rounded-md flex justify-between sm:ml-0 sm:mr-0 ml-3 mr-3  pr-6 w-[770px] border dark:border-zinc-800 ">
            <div className=" hidden sm:grid   pl-5 grid-cols-3 pb-3 gap-3 mt-5">
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
              <TechStackBtn name="TailwindCSS" icon="bg-cyan-500" />
              <TechStackBtn name="Git" icon="bg-orange-700" />
            </div>

            <div className=" sm:ml-0 ml-16">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>

        <div className="w-full mt-8 flex justify-center">
          <div className="max-w-7xl overflow-hidden">
            <GithubContributions />
          </div>
        </div>
        <div>
          <p className=" text-2xl mt-8 flex font-bold justify-center">
            Projects
          </p>
          <p className=" tracking-wider pt-2 text-2xl sm:text-4xl font-bold justify-center flex ">
            Check out my latest work
          </p>
          <p className="sm:text-xl text-lg sm:pl-0 sm:pr-0 pl-3 pr-3 pt-2 font-bold text-neutral-400 justify-center flex">
            I've worked on a variety of projects, here are some that I like.
          </p>
          <div className="sm:pl-7 pt-7  flex justify-center">
            <div className=" pb-5  dark:border-neutral-700  border-b-1 grid gap-3 grid-cols-1 sm:grid-cols-2">
              <Card
                src={"/anitaro.png"}
                projectTitle="アニタロ"
                description="A site where users can watch anime and read manga with a smooth and enjoyable experience. Built with a user-friendly interface for effortless content exploration."
                toolsUsed={anitaroArr}
                projLink="https://anitaro.akshitt.me/"
              />
              <Card
                src={"/enso.png"}
                projectTitle="Enso"
                description="A collaborative whiteboard app for seamless real-time drawing and brainstorming. Designed with simplicity and teamwork in mind."
                toolsUsed={ensoarr}
                projLink="https://enso.akshitt.me/"
              />
              <Card
                src={"/secbrain.png"}
                projectTitle="SecondBrain"
                description="A site to save and organize content like YouTube videos, tweets, documents and more. share your 'brain' with friends to explore your collection."
                toolsUsed={secBrainarr}
                projLink="https://secondbrainn.netlify.app/"
              />
              <Card
                src={"/chitchat.png"}
                projectTitle="ChitChat"
                description="A real-time chat app with temporary rooms for seamless conversations. Its clean and simple UI ensures effortless communication and a smooth user experience"
                toolsUsed={chitchat}
                projLink="https://chitt-chatt.vercel.app/"
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
              <Card
                src={"/bggone.png"}
                projectTitle="BgGone"
                description="A simple background removal tool that allows users to remove image backgrounds effortlessly.Features a clean and user-friendly interface for easy processing."
                toolsUsed={bggonearr}
                projLink="https://bg-gone-rose.vercel.app/"
              />
              <Card
                src={"/sol.jpg"}
                projectTitle="Solana Wallet"
                description="Simple wallet adapter for seamless crypto transactions, offering secure authentication, smooth integration, and a user-friendly interface"
                toolsUsed={solwallarr}
                projLink="https://solana-wallet-adapterr.netlify.app/"
              />
            </div>
          </div>
        </div>
        <p className="flex dark:border-neutral-700 pt-4 justify-center">
          Made with ❤️ by Akshit
        </p>
      </div>
    </div>
  );
}
