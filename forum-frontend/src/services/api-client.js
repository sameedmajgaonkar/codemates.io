import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "x-auth-token": localStorage.getItem("FORUM_TOKEN"),
  },
});
