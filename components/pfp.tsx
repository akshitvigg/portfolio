import Image from "next/image";
import { Snippet } from "@nextui-org/snippet";

export default function Pfp() {
  return (
    <div>
      <div className="sm:pt-16  items-center flex  ">
        <div className="sm:pr-7 pl-3 sm:pl-0 pr-5 sm:ml-[400px]  ">
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
    </div>
  );
}
