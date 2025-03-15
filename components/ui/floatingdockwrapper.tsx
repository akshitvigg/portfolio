"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconMoon,
  IconNotebook,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "./theme-provider";

const FloatingDockWrapper = () => {
  const { theme, toggleTheme } = useTheme();

  const items = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Blogs",
      icon: (
        <IconNotebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },
    {
      title: "Mail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:akshitvig48@gmail.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/AkshitVig4",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/akshitvigg",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin />,
      href: "https://www.linkedin.com/in/akshit-vig-a56377303",
    },
    {
      title: "Theme",
      icon:
        theme === "light" ? (
          <IconMoon className=" hidden sm:block h-full w-full text-neutral-500 dark:text-neutral-300" />
        ) : (
          <IconSun className=" hidden sm:block  h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),

      onClick: toggleTheme,
    },
  ];

  return (
    <div className="flex items-center  justify-end sm:h-24  w-full">
      <FloatingDock
        mobileClassName=" -translate-x-4 -translate-y-8"
        items={items}
      />
    </div>
  );
};
export default FloatingDockWrapper;
