import Link from "next/link";

const Blogs = () => {
  return (
    <div className="min-h-screen flex justify-center  bg-white text-neutral-900  dark:bg-neutral-900 dark:text-white">
      <div>
        <p className=" font-bold mt-20 text-5xl">My Blogs</p>
        <Link
          href={
            "https://sand-nutria-26f.notion.site/My-first-blog-1b7fb8c0cfbd804cb9f9c601b3185639"
          }
        >
          <div className="cursor-pointer ">
            <p className=" hover:underline  mt-14 text-3xl">first blog</p>
            <p className="  mt-3 text-lg text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              delectus voluptate
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
