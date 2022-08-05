import axios from "axios";

const randomUserApi = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export default randomUserApi;
