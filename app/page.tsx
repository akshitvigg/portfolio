import { IconCloud } from "@/components/skillssphere";
import Image from "next/image";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Home() {
  return (
    <div>
      <div className="mt-16 items-center flex justify-center">
        <div className="   ">
          <p className=" font-bold text-4xl">Hi I'm Akshit</p>
          <p>Full Stack developer </p>
        </div>
        <Image
          className=" ml-52 rounded-full"
          src={
            "https://i.pinimg.com/736x/aa/c8/02/aac8024b2258aad7262895c4b0bccd79.jpg"
          }
          alt="ds"
          width={150}
          height={300}
        />
      </div>
      <p className="pl-[360px]  text-xl font-bold ">About</p>
      <p className="pl-[360px]  w-[1000px] text-zinc-400">
        I’m Akshit, a self-taught programmer who loves diving into new things
        and figuring them out as I go. Right now, I’m learning Japanese and
        exploring cool areas like AI and blockchain. I’m all about building
        things with code, breaking them down, and making them better. I’ve
        always had an interest in art, even if I’m not great at it, but these
        days, I’m focused on creating stuff that actually works and solving
        problems with technology.
      </p>

      <div className=" flex justify-center">
        <div className=" w-96 bg-zinc-600">dsd</div>
      </div>

      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
