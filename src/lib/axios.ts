import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5678",
  headers: {
    Authorization: window.localStorage.getItem("token"),
  },
});

export default request;
