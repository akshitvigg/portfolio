"use client";

import GitHubCalendar from "react-github-calendar";

const GithubContributions = () => {
  return (
    <div className="ml-3 mr-3 sm:mr-0 sm:ml-8">
      <GitHubCalendar
        username="akshitvigg"
        colorScheme="dark"
        fontSize={12}
        blockSize={10.7}
        theme={{
          dark: ["#262626", "#0d6272", "#128aa0", "#18b1ce", "#31cbe7"],
        }}
      />
    </div>
  );
};

export default GithubContributions;
