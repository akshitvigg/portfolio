import Image from "next/image";

interface CardProps {
  src: string;
  projectTitle: string;
  description: string;
  toolsUsed: string[];
}

export const Card = ({
  src,
  projectTitle,
  description,
  toolsUsed,
}: CardProps) => {
  return (
    <div className=" border  rounded-lg border-zinc-800 h-[355px] w-96">
      <Image
        className=" rounded-t-lg  "
        width={400}
        height={358}
        src={src}
        alt="img"
      />
      <p className=" font-bold text-lg pt-1 pl-2">{projectTitle}</p>
      <p className="text-sm text-neutral-400 pt-1 pl-2">{description}</p>
      <div className="mt-2 flex">
        {toolsUsed.map((tools, index) => (
          <div key={index}>
            <button className="border px-2 text-xs border-zinc-700 rounded-full ml-1 py-1">
              {tools}
            </button>
          </div>
        ))}
      </div>
      <button className=" ml-1 mt-2 bg-white text-black text-sm px-2">
        Website
      </button>
    </div>
  );
};
