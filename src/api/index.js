import axios from "./config";

export function fetchAllPosts() {
  return axios.get("/posts").then((res) => {
    return res.data;
  });
}
