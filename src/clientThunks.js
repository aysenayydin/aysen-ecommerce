import { setRoles, SET_ROLES } from "./reducers/clientActions";
import { getRoles } from "./lib/apiService";

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
