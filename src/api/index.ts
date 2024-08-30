import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://dummyjson.com",
});
export default baseURL;
