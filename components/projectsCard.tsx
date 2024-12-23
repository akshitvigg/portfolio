import Image from "next/image";

interface Image {
  src: string;
}

export const Card = ({ src }: Image) => {
  return (
    <div className=" border rounded-lg border-zinc-800 h-64 w-96">
      <Image
        className=" mt-3 rounded-lg ml-3"
        width={358}
        height={358}
        src={src}
        alt="img"
      />
    </div>
  );
};
