import axios from "axios";

const API = axios.create({
  baseURL: "https://mybeautygloww.onrender.com/API",
});

export default API;