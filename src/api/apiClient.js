// src/api/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:4000/api/v2",
});

// inject header otomatis
apiClient.interceptors.request.use((config) => {
  config.headers["x-api-key"] = process.env.REACT_APP_API_KEY;
  return config;
});

export default apiClient;
