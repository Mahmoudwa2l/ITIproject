import axios from "axios";

const BASE_URL = "http://localhost:8800/api/";

// Function to get the access token from local storage
const getAccessToken = () => {
  try {
    const persistData = JSON.parse(localStorage.getItem("persist:root"));
    if (persistData && persistData.user) {
      const user = JSON.parse(persistData.user);
      if (user.currentUser && user.currentUser.accessToken) {
        return user.currentUser.accessToken;
      }
    }
  } catch (error) {
    console.error("Error getting access token:", error);
  }
  return null; // Return null if no user or token is found
};

// Get the access token
const TOKEN = getAccessToken();

// Function to handle redirection to login page if there is no user or token
const redirectToLogin = () => {
  // Redirect to your login page here
  // For example, you can use React Router or window.location.href
  // Replace '/login' with the actual URL of your login page
  window.location.href = "/login";
};

// Create userRequest with an interceptor to check for TOKEN
export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use(
  (config) => {
    if (TOKEN) {
      config.headers.token = `Bearer ${TOKEN}`;
      return config;
    } else {
      // If there is no user or token, redirect to login
      redirectToLogin();
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
