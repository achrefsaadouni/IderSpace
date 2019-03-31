import {
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE,
  UPDATE_USER_PROFILE,
  USER_LOGOUT,
  USERS_LOGIN_AUTO
} from "./types";
import axios from "axios";

let timerLogout = 0;

export const login = auth => async dispatch => {
  await axios
    .post("http://localhost:2500/api/user/login", auth)
    .then(response => {
      //logout after 1h
      console.log("Setting timer: " + response.data.expiresIn);
      timerLogout = setTimeout(() => {
        logout();
      }, response.data.expiresIn * 1000);
      const now = new Date();
      const expirationDate = new Date(
        now.getTime() + response.data.expiresIn * 1000
      );
      console.log(expirationDate);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("expiration", expirationDate.toISOString());
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch({
        type: USERS_LOGIN_SUCCESS,
        payload: response.data
      });
    })
    .catch(function(error) {
      console.log("err: " + error);
      dispatch({
        type: USERS_LOGIN_FAILURE,
        payload: null
      });
    });
};

const getAuthData = () => {
  const token = localStorage.getItem("token");
  const expirationDate = localStorage.getItem("expiration");
  const user = JSON.parse(localStorage.getItem("user"));
  if (!token || !expirationDate) {
    return;
  }
  return {
    token: token,
    expirationDate: new Date(expirationDate),
    user: user
  };
};

export const autoAuthUser = () => async dispatch => {
  const authInformation = getAuthData();
  if (!authInformation) {
    return;
  }
  const now = new Date();
  const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
  if (expiresIn > 0) {
    const token = authInformation.token;
    const user = authInformation.user;
    setTimeout(() => {
      logout();
    }, expiresIn);
    dispatch({
      type: USERS_LOGIN_AUTO,
      payload: {
        token,
        expiresIn,
        user
      }
    });
  }
};

export const logout = () => async dispatch => {
  clearTimeout(timerLogout);
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  localStorage.removeItem("user");
  dispatch({
    type: USER_LOGOUT,
    payload: null
  });
};

export const updateProfile = user => async dispatch => {
  await axios
    .put("http://localhost:2500/api/user/" + user.id, user)
    .then(response => {
      console.log("response: " + response);
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: response.data
      });
    })
    .catch(function(error) {
      console.log("err: " + error);
    });
};
