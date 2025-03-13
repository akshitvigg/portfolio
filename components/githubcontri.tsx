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
        // theme={{
        //   dark: ["#262626", "#795b3a", "#9c754a", "#b58e63", "#c5a786"],
        // }}
      />
    </div>
  );
};

export default GithubContributions;
