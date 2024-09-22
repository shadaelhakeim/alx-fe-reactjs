const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

import axios from "axios";
export const fetchUserData = (username) => {
  return axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  });
};
