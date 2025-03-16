import Link from "next/link";

const Blogs = () => {
  return (
    <div className="min-h-screen flex justify-center  bg-white text-neutral-900  dark:bg-neutral-900 dark:text-white">
      <div>
        <p className=" font-bold mt-20 text-5xl">My Blogs</p>
        <Link
          href={
            "https://sand-nutria-26f.notion.site/Creating-a-Token-on-Solana-1b8fb8c0cfbd80bfa831e8b799b0e2e6"
          }
        >
          <div className="cursor-pointer ">
            <p className=" hover:underline  mt-14 text-3xl">
              How to create a token on Solana
            </p>
            <p className="  mt-3 text-lg text-neutral-400">
              Learn how to create, mint, and manage your own token on Solana
              from scratch.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
