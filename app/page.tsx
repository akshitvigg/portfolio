import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-16 items-center flex justify-center">
        <div className="   ">
          <p className=" font-bold text-4xl">Hi I'm Akshit</p>
          <p>Full Stack developer </p>
        </div>
        <Image
          className=" ml-32 rounded-full"
          src={
            "https://i.pinimg.com/736x/aa/c8/02/aac8024b2258aad7262895c4b0bccd79.jpg"
          }
          alt="ds"
          width={150}
          height={300}
        />
      </div>
      <p className="pl-[390px] text-xl font-bold ">About</p>
      <p className="pl-[390px] text-zinc-400">dsd</p>
    </div>
  );
}
