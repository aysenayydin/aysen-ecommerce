import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request and response interceptors if you need to handle tokens or errors globally
api.interceptors.request.use(
  (config) => {
    // Add authentication token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally, if needed
    if (error.response && error.response.status === 401) {
      // Optionally handle unauthorized requests, like removing token or redirecting to login
      localStorage.removeItem("token");
      delete api.defaults.headers["Authorization"];
    }
    return Promise.reject(error);
  }
);

// Define service functions for your endpoints
export const getRoles = () => {
  return api.get(`/roles`);
};

export const postSignup = (data) => {
  return api.post("/signup", data);
};

export const updateUser = (userId, userData) => {
  return api.put(`/users/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return api.delete(`/users/${userId}`);
};

// You can also add other API methods as needed
export const fetchPosts = () => {
  return api.get("/posts");
};

export const verifyToken = () => {
  return api.get("/verify"); // Verify endpoint for token authorization
};

export const postLogin = (data) => {
  return api.post(`/login`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default api;

// Example usage in a component
// import React, { useEffect, useState } from 'react';
// import { getUser } from './apiService';

// const UserProfile = ({ userId }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     getUser(userId)
//       .then((response) => setUser(response.data))
//       .catch((error) => console.error(error));
//   }, [userId]);

//   return <div>{user ? user.name : 'Loading...'}</div>;
// };

// export default UserProfile;
