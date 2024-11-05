import { setRoles, setUser } from "./reducers/clientActions";
import { getRoles, postLogin } from "./lib/apiService";
import { toast } from "react-toastify";
import md5 from "md5";

// Thunk action to fetch roles
export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().clientReducer;

    if (roles.length === 0) {
      // Trigger fetch only if roles are not loaded
      dispatch({ type: "SET_FETCHSTATE", payload: "FETCHING" }); // Optional: update fetch state
      //   try {
      // const response = await fetch("/api/roles"); // Assume API endpoint to fetch roles
      getRoles()
        .then((response) => {
          dispatch(setRoles(response.data));
          dispatch({ type: "SET_FETCHSTATE", payload: "FETCHED" }); // Optional: update fetch state
          console.log("data", response.data);
        })
        .catch((error) => {
          dispatch({ type: "SET_FETCHSTATE", payload: "FAILED" });
          console.error(error);
        });
      //   } catch (error) {
      //     console.error("Failed to fetch roles:", error);
      //     dispatch({ type: "SET_FETCHSTATE", payload: "FAILED" }); // Optional: update fetch state
      //   }
    }
  };
};

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
  try {
    const response = await postLogin(credentials);

    // Ensure that user data exists before proceeding
    if (!response || !response.data) {
      throw new Error("Unexpected response structure");
    }

    // Add Gravatar URL for user's profile picture
    const userData = {
      ...response.data,
      avatar: `https://www.gravatar.com/avatar/${md5(credentials.email)}`,
    };

    // Save user info to Redux store
    dispatch(setUser(userData));

    // Save token to localStorage if "Remember Me" is checked
    if (rememberMe && userData.token) {
      localStorage.setItem("token", userData.token);
    }

    return true;
  } catch (error) {
    // Show an error notification to the user
    toast.error("Login failed. Please check your credentials.");
    console.error("Login failed:", error);
    return false;
  }
};
