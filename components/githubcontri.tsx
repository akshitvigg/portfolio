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
        //   dark: ["#262626", "#3a3a3a", "#505050", "#6b7280", "#94a3b8"],
        // }}
      />
    </div>
  );
};

export default GithubContributions;
