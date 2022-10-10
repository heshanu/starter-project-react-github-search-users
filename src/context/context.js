import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

//const

//provider and consumer-GithubContext.Provider
const GithubProvider = ({ children }) => {
  const [gitUser, setGitUser] = useState(mockUser);
  const [gitRepos, setGitRepos] = useState(mockRepos);
  const [gitFollowers, setGitFollowers] = useState(mockFollowers);
  return (
    <GithubContext.Provider value={{ gitUser, gitRepos, gitFollowers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
