"use client"
import { Card } from "@/components/projectsCard";
import { useState } from "react";

const Projects = () => {
  const [category, setCategory] = useState<string>('all')

  const anitaroArr = ["Next.js", "Typescript", "TailwindCSS", "NextUI"];
  const secBrainarr = ["React", "Typescript", "TailwindCSS", "MongoDB"];
  const chitchat = ["React", "Typescript", "WebSockets"];
  const astroquestarr = ["React", "Javascript"];
  const pawpalarr = ["React", "Javascript", "MongoDB"];
  const bggonearr = ["Next.js", "Typescript", "TailwindCSS", "MagicUI"];
  const solwallarr = ["React", "Typescript", "TailwindCSS", "ShadcnUI"];
  const ensoarr = ["Next.js", "Typescript", "TailwindCSS", "WebSocket"];
  const keyzenarr = ["Rust", "Tui"];

  const projects = [
    {
      id: 1,
      category: "web2",
      src: "/anitaro.png",
      title: "アニタロ",
      description: "A site where users can watch anime and read manga with a smooth and enjoyable experience. Built with a user-friendly interface for effortless content exploration.",
      tools: anitaroArr,
      link: "https://anitaro.akshitt.me/"
    },
    {
      id: 2,
      category: "web2",
      src: "/enso.png",
      title: "Enso",
      description: "A collaborative whiteboard app for seamless real-time drawing and brainstorming. Designed with simplicity and teamwork in mind.",
      tools: ensoarr,
      link: "https://enso.akshitt.me/"
    },
    {
      id: 3,
      category: "web2",
      src: "/secbrain.png",
      title: "SecondBrain",
      description: "A site to save and organize content like YouTube videos, tweets, documents and more. share your 'brain' with friends to explore your collection.",
      tools: secBrainarr,
      link: "https://secondbrainn.netlify.app/"
    },
    {
      id: 4,
      category: "web2",
      src: "/chitchat.png",
      title: "ChitChat",
      description: "A real-time chat app with temporary rooms for seamless conversations. Its clean and simple UI ensures effortless communication and a smooth user experience",
      tools: chitchat,
      link: "https://chitt-chatt.vercel.app/"
    },
    {
      id: 5,
      category: "web2",
      src: "/bggone.png",
      title: "BgGone",
      description: "A simple background removal tool that allows users to remove image backgrounds effortlessly.Features a clean and user-friendly interface for easy processing.",
      tools: bggonearr,
      link: "https://bg-gone-rose.vercel.app/"
    },
    {
      id: 6,
      category: "web3",
      src: "/sol.jpg",
      title: "Solana Wallet",
      description: "Simple wallet adapter for seamless crypto transactions, offering secure authentication, smooth integration, and a user-friendly interface",
      tools: solwallarr,
      link: "https://sol-wallet-adapter.netlify.app/"
    },
    {
      id: 7,
      category: "web2",
      src: "/astroquest.png",
      title: "AstroQuest",
      description: "A fun web app that lets you explore the solar system with detailed planet info, smooth space animations, and a bot to help guide you on your cosmic journey",
      tools: astroquestarr,
      link: "https://astroquest.netlify.app/"
    },
    {
      id: 8,
      category: "terminal",
      src: "/keyzen.gif",
      title: "Keyzen",
      description: "A typing test that runs in your terminal. Supports 35+ languages with real-time WPM and accuracy tracking for a minimal, focused experience.",
      tools: keyzenarr,
      link: "https://github.com/akshitvigg/keyzen"
    }, {
      id: 9,
      category: "web2",
      src: "/pawpal.png",
      title: "PawPal",
      description: "A simple pet adoption site where users can browse and adopt pets in need of a home. Features a user-friendly interface to explore available pets and their details.",
      tools: pawpalarr,
      link: "https://paw-pal.netlify.app/"
    }
  ];

  const categories = [
    { id: 'all', label: 'all' },
    { id: 'web2', label: 'web2' },
    { id: 'web3', label: 'web3' },
    { id: 'terminal', label: 'terminal' }
  ];

  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(project => project.category === category);

  return (
    <div className="min-h-screen flex justify-center font-sans bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <div>
        <p className="text-2xl mt-8 flex font-bold justify-center">
          Projects
        </p>
        <p className="tracking-wider pt-2 text-2xl sm:text-4xl font-bold justify-center flex">
          Check out my latest work
        </p>
        <p className="sm:text-xl text-lg sm:pl-0 sm:pr-0 pl-3 pr-3 pt-2 font-bold text-neutral-400 justify-center flex">
          I've worked on a variety of projects, here are some that I like.
        </p>

        <div className="flex justify-center">
          <div className="mt-8 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl border border-neutral-200/60 dark:border-neutral-700/60 shadow-lg">
            <div className="flex gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`
                    px-5 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ease-out focus:outline-none
                    ${category === cat.id
                      ? 'bg-white dark:bg-white text-neutral-900 dark:text-neutral-900 shadow-md shadow-neutral-200/50 dark:shadow-neutral-900/50 scale-105 border border-neutral-200/50 dark:border-neutral-600/50'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:pl-7 pt-7 flex justify-center">
          <div className="pb-5 dark:border-neutral-700 border-b-1 grid gap-3 grid-cols-1 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                src={project.src}
                projectTitle={project.title}
                description={project.description}
                toolsUsed={project.tools}
                projLink={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
