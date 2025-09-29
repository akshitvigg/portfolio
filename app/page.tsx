"use client";
import { IconCloud } from "@/components/skillssphere";
import Image from "next/image";
import TechStackBtn from "@/components/skillschips";
import { Card } from "@/components/projectsCard";
import { Snippet } from "@nextui-org/snippet";
import GithubContributions from "@/components/githubcontri";
import Link from "next/link";
import { useState } from "react";
import en from "../components/locales/en.json"
import jp from "../components/locales/jp.json"
import { useLanguage } from "@/components/LanguageContext";




const slugs = [
  "rust",
  "solidity",
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
];

const anitaroArr = ["Next.js", "Typescript", "TailwindCSS", "NextUI"];
const secBrainarr = ["React", "Typescript", "TailwindCSS", "MongoDB"];
const chitchat = ["React", "Typescript", "WebSockets"];
const astroquestarr = ["React", "Javascript"];
//const pawpalarr = ["React", "Javascript", "MongoDB"];
const bggonearr = ["Next.js", "Typescript", "TailwindCSS", "MagicUI"];
const solwallarr = ["React", "Typescript", "TailwindCSS", "ShadcnUI"];
const ensoarr = ["Next.js", "Typescript", "TailwindCSS", "WebSocket"];
const keyzenarr = ["Rust", "Tui"];


const translations = { en, jp }


export default function Home() {
  const { lang, toggleLang } = useLanguage()

  return (
    <div className="  flex justify-center font-sans bg-white text-neutral-900  dark:bg-neutral-900 dark:text-white">
      <div className=" w-[370px]  sm:w-[900px] min-h-screen ">
        <div className="sm:pt-16 sm:pl-[84px]  items-center flex  ">
          <div className="sm:pr-7 pl-3 sm:pl-0 pr-5  ">
            <Image
              className=" mb-10 sm:mb-0  rounded-full"
              src={"/cheng1.jpg"}
              alt="pfp"
              width={100}
              height={300}
            />
          </div>
          <div className="">
            <div className="justify-between flex">
              <p className="font-bold pt-4 sm:pt-0 text-4xl">{translations[lang].greeting}</p>
            </div>

            <div className=" pt-2 pr-2 flex  sm:pr-0">
              <p>{translations[lang].tagline}</p>
              <button className="translate-x-[616px] -translate-y-12 fixed hover:bg-neutral-400 cursor-pointer active:scale-95" onClick={toggleLang}>{lang === "en" ? "JP" : "EN"}</button>

            </div>
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
        <p className="pl-3 sm:pt-10 sm:ml-[70px]  text-xl font-bold ">{translations[lang].aboutTitle}</p>
        <p className=" pl-3 pr-3 sm:ml-[70px] sm:pr-0 sm:w-[780px] text-justify text-neutral-500 dark:text-neutral-400">
          {translations[lang].aboutText}
        </p>
        <p className=" text-xl pl-3 font-bold mt-10 flex pb-2 sm:ml-[70px] ">
          {translations[lang].skills}
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
              <TechStackBtn name="Rust" icon=" bg-orange-700" />
              <TechStackBtn name="Node.js" icon="bg-teal-600" />
              <TechStackBtn name="Express.js" icon="bg-emerald-300" />
              <TechStackBtn name="TailwindCSS" icon="bg-cyan-500" />
              <TechStackBtn name="Git" icon="bg-orange-700" />
              <TechStackBtn name="Solidity" icon="bg-[#2b247c]" />
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
            {translations[lang].project}
          </p>
          <p className=" tracking-wider pt-2 text-2xl sm:text-4xl font-bold justify-center flex ">
            {translations[lang].checkwork}
          </p>
          <p className="sm:text-xl text-lg sm:pl-0 sm:pr-0 pl-3 pr-3 pt-2 font-bold text-neutral-400 justify-center flex">
            {translations[lang].workedOn}
          </p>
          <div className="sm:pl-7 pt-7  flex justify-center">
            <div className=" pb-5  dark:border-neutral-700  border-b-1 grid gap-3 grid-cols-1 sm:grid-cols-2">
              <Card
                src={"/anitaro.png"}
                projectTitle="アニタロ"
                description={translations[lang].anitaroDesc}
                toolsUsed={anitaroArr}
                projLink="https://anitaro.akshitt.me/"
              />
              <Card
                src={"/enso.png"}
                projectTitle="Enso"
                description={translations[lang].ensoDesc}
                toolsUsed={ensoarr}
                projLink="https://enso.akshitt.me/"
              />
              <Card
                src={"/secbrain.png"}
                projectTitle="SecondBrain"
                description={translations[lang].secondbrainDesc}
                toolsUsed={secBrainarr}
                projLink="https://secondbrainn.netlify.app/"
              />
              <Card
                src={"/chitchat.png"}
                projectTitle="ChitChat"
                description={translations[lang].chitchatDesc}
                toolsUsed={chitchat}
                projLink="https://chitt-chatt.vercel.app/"
              />
              <Card
                src={"/bggone.png"}
                projectTitle="BgGone"
                description={translations[lang].bggoneDesc}
                toolsUsed={bggonearr}
                projLink="https://bg-gone-rose.vercel.app/"
              />
              <Card
                src={"/sol.jpg"}
                projectTitle="Solana Wallet"
                description={translations[lang].solanaDesc}
                toolsUsed={solwallarr}
                projLink="https://sol-wallet-adapter.netlify.app/"
              />
              <Card
                src={"/keyzen.gif"}
                projectTitle="Keyzen"
                description={translations[lang].keyzenDesc}
                toolsUsed={keyzenarr}
                projLink="https://github.com/akshitvigg/keyzen"
              />

              <Card
                src={"/astroquest.png"}
                projectTitle="AstroQuest"
                description={translations[lang].astroDesc}
                toolsUsed={astroquestarr}
                projLink="https://astroquest.netlify.app/"
              />

              <p className="text-neutral-500  dark:text-neutral-400">
                {lang === "en" ? <>checkout all of them{" "}
                  <Link href="/projects">
                    <span className="cursor-pointer underline text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white">here</span>
                  </Link>
                </> : <>全てのプロジェクトは{" "}
                  <Link href="/projects">
                    <span className="cursor-pointer underline text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white">こちら</span>
                  </Link>
                  からご覧いただけます
                </>}
              </p>
            </div>
          </div>
        </div>
        <p className="flex dark:border-neutral-700 pt-4 justify-center">
          {translations[lang].footer}
        </p>
      </div>
    </div >
  );
}
