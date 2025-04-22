"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "./ui/theme-provider";
import { list } from "postcss";

const GithubContributions = () => {
  const { theme } = useTheme();

  const customTheme = {};
  return (
    <div className="ml-3 mr-3 sm:mr-0 sm:ml-8">
      <GitHubCalendar
        username="akshitvigg"
        colorScheme={theme === "light" ? "light" : "dark"}
        fontSize={12}
        blockSize={10.7}
        theme={{
          light: ["#ebedf0", "#b3eaf5", "#7fd8ea", "#44c3de", "#10b0d2"],
          dark: ["#262626", "#0d6272", "#128aa0", "#18b1ce", "#31cbe7"],
        }}
      />
    </div>
  );
};

export default GithubContributions;
