import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3000", // Replace with your backend URL
});

// Add interceptor to set authorization header from localStorage
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token; // NOT adding "Bearer" prefix
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
