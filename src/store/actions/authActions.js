import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, GET_USER_INFO , SET_CURRENT_USER_AFTER_UPDATE_IMAGE } from "./types";

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post("https://iderspace.herokuapp.com/api/user/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Set logged in user
export const setCurrentUserAfterUpdate = decoded => {
  return {
    type: SET_CURRENT_USER_AFTER_UPDATE_IMAGE,
    payload: decoded
  };
};

// Get user info
export const getUserInfo = id => dispatch => {
  axios
    .get(`https://iderspace.herokuapp.com/api/user/some-info/${id}`)
    .then(res =>
      dispatch({
        type: GET_USER_INFO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_INFO,
        payload: {}
      })
    );
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
