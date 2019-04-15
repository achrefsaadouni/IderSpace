import axios from "axios";

import {
    GET_PROFILE,
    GET_PROFILES,
    LOADING,
    CLEAR_CURRENT_PROFILE,
    GET_ERRORS, SET_RESUME
} from "./types";
import {setRecommandationLoading} from "./recommandationAction";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("api/user/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Add experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post("http://localhost:2500/api/user/addExperience", expData)
    .then(res => history.push("/profile"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add resume
export const addResume = (hobbies, about , languages) => dispatch => {
    dispatch(setProfileLoading());
  axios
    .post("http://localhost:2500/api/user/addResume", {hobbies: hobbies , about:about , languages:languages},{headers:{'Content-Type': 'application/json'}})
      .then(res => {
          dispatch({
              type: SET_RESUME,
              payload: res.data
          })
      })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add skill
export const addSkills = (skillsData, history) => dispatch => {
  axios
    .post("http://localhost:2500/api/user/addSkills", skillsData)
    .then(res => history.push("/profile"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Experience + skills + resume

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("http://localhost:2500/api/user/profiles")
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

// Delete account & profile

// Profile loading
export const setProfileLoading = () => {
  return {
    type: LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
