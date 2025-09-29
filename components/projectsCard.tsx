import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

interface CardProps {
  src: string;
  projectTitle: string;
  description: string;
  toolsUsed: string[];
  projLink: string;
}

export const Card = ({
  src,
  projectTitle,
  description,
  toolsUsed,
  projLink,
}: CardProps) => {
  const { lang } = useLanguage()
  return (
    <div className=" border  rounded-lg dark:border-zinc-800 h-[365px] w-80 sm:w-96">
      <Link href={projLink}>
        <Image
          className=" rounded-t-lg  "
          width={400}
          height={358}
          src={src}
          alt="img"
        />
      </Link>
      <p className=" font-bold text-lg pt-1 pl-2">{projectTitle}</p>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 pt-1 pl-2">
        {description}
      </p>
      <div className="mt-2 flex">
        {toolsUsed.map((tools, index) => (
          <div key={index}>
            <button className="border bg-neutral-200 dark:bg-neutral-800 px-2 text-xs border-neutral-400 dark:border-zinc-700 rounded-full ml-1 py-1">
              {tools}
            </button>
          </div>
        ))}
      </div>
      <Link href={projLink}>
        <button className=" dark:hover:bg-zinc-300 hover:bg-zinc-300 active:scale-105 transition-all duration-150 rounded-md py-1 ml-2 mt-3 flex border-neutral-300 border items-center dark:bg-white dark:text-black text-sm px-2">
          <img src="/network.png" width={12} />
          <p className="pl-2  ">{lang === "en" ? "Website" : "サイト"}</p>
        </button>
      </Link>
    </div>
  );
};
