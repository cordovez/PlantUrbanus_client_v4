import axios from "axios";

// const token = localStorage.getItem("userToken");

export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
  // headers: { Authorization: "Bearer " + token },
});
