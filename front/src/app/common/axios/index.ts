import axios from "axios";

export const api = axios.create({
  baseURL: "https://team2-omae.onrender.com",
  headers: { "Content-Type": "application/json" },
});
