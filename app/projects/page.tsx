"use client"
import { useLanguage } from "@/components/LanguageContext";
import { Card } from "@/components/projectsCard";
import { useState } from "react";
import en from "../../components/locales/en.json"
import jp from "../../components/locales/jp.json"

const translations = { en, jp }


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
  const gupshupai = ["Next.js", "Typescript", "TailwindCSS"]
  const { lang, toggleLang } = useLanguage()

  const projects = [
    {
      id: 1,
      category: "web2",
      src: "/anitaro.png",
      title: "アニタロ",
      description: translations[lang].anitaroDesc,
      tools: anitaroArr,
      link: "https://anitaro.akshitt.me/"
    },
    {
      id: 2,
      category: "web2",
      src: "/enso.png",
      title: "Enso",
      description: translations[lang].ensoDesc,
      tools: ensoarr,
      link: "https://enso.akshitt.me/"
    },
    {
      id: 3,
      category: "web2",
      src: "/secbrain.png",
      title: "SecondBrain",
      description: translations[lang].secondbrainDesc,
      tools: secBrainarr,
      link: "https://secondbrainn.netlify.app/"
    },

    {
      id: 4,
      category: "web2",
      src: "/gupshup.jpg",
      title: "GupShupAI",
      description: translations[lang].gupshupai,
      tools: gupshupai,
      link: "https://gupshup-ai.vercel.app/"
    },
    {
      id: 5,
      category: "terminal",
      src: "/keyzen.gif",
      title: "Keyzen",
      description: translations[lang].keyzenDesc,
      tools: keyzenarr,
      link: "https://github.com/akshitvigg/keyzen"
    },

    {
      id: 6,
      category: "web2",
      src: "/bggone.png",
      title: "BgGone",
      description: translations[lang].bggoneDesc,
      tools: bggonearr,
      link: "https://bg-gone-rose.vercel.app/"
    },
    {
      id: 7,
      category: "web3",
      src: "/sol.jpg",
      title: "Solana Wallet",
      description: translations[lang].solanaDesc,
      tools: solwallarr,
      link: "https://sol-wallet-adapter.netlify.app/"
    }, {
      id: 8,
      category: "web2",
      src: "/chitchat.png",
      title: "ChitChat",
      description: translations[lang].chitchatDesc,
      tools: chitchat,
      link: "https://chitt-chatt.vercel.app/"
    },
    {
      id: 9,
      category: "web2",
      src: "/astroquest.png",
      title: "AstroQuest",
      description: translations[lang].astroDesc,
      tools: astroquestarr,
      link: "https://astroquest.netlify.app/"
    },
    {
      id: 10,
      category: "web2",
      src: "/pawpal.png",
      title: "PawPal",
      description: translations[lang].pawpalDesc,
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
        <span className="text-2xl mt-8 flex font-bold justify-center">
          {translations[lang].project}<button
            onClick={toggleLang}
            className="fixed top-4 right-4 sm:absolute sm:translate-x-[380px] sm:-translate-y-0 sm:top-auto sm:right-auto w-12 h-8 border border-neutral-300 dark:border-neutral-700 rounded overflow-hidden bg-white dark:bg-neutral-900 z-50"
          >
            <div className={`flex flex-col items-center transition-transform duration-500 ease-out ${lang === "en" ? "translate-y-0" : "-translate-y-8"}`}>
              <span className="h-8 flex items-center justify-center text-sm font-bold w-full">EN</span>
              <span className="h-8 flex items-center justify-center text-sm font-bold w-full">JP</span>
            </div>
          </button>        </span>
        <p className="tracking-wider pt-2 text-2xl sm:text-4xl font-bold justify-center flex">
          {translations[lang].checkwork}
        </p>
        <p className="sm:text-xl text-lg sm:pl-0 sm:pr-0 pl-3 pr-3 pt-2 font-bold text-neutral-400 justify-center flex">
          {translations[lang].workedOn}
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
