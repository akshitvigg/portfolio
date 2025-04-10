import Link from "next/link";

const Blogs = () => {
  return (
    <div className="min-h-screen flex justify-center  bg-white text-neutral-900  dark:bg-neutral-900 dark:text-white">
      <div>
        <p className=" font-bold mt-20 ml-4 sm:ml-0 sm:text-5xl text-4xl">
          My Blogs
        </p>
        <Link
          href={
            "https://sand-nutria-26f.notion.site/Creating-a-Token-on-Solana-1b8fb8c0cfbd80bfa831e8b799b0e2e6"
          }
        >
          <div className="cursor-pointer ">
            <p className=" hover:underline ml-3 sm:ml-0  mt-14 text-2xl sm:text-3xl">
              How to create a token on Solana
            </p>
            <p className="  mt-3 text-md sm:text-lg ml-3 sm:ml-0 text-neutral-400">
              Learn how to create, mint, and manage your own token on Solana
              from scratch.
            </p>
            <p className=" text-neutral-400 ml-3 sm:ml-0 text-xs">
              Mar 17, 2025
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
