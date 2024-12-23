import Image from "next/image";

interface CardProps {
  src: string;
  projectTitle: string;
  description: string;
}

export const Card = ({ src, projectTitle, description }: CardProps) => {
  return (
    <div className=" border  rounded-lg border-zinc-800 h-80 w-96">
      <Image
        className=" rounded-t-lg  "
        width={400}
        height={358}
        src={src}
        alt="img"
      />
      <p className=" font-bold text-lg pt-1 pl-2">{projectTitle}</p>
      <p className="text-sm text-neutral-400 pt-1 pl-2">{description}</p>
    </div>
  );
};
