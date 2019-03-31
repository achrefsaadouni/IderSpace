import {
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE,
  USER_LOGOUT,
  USERS_LOGIN_AUTO,
  UPDATE_USER_PROFILE
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  auth: {},
  profile: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USERS_LOGIN_SUCCESS:
      state.isAuthenticated = true;
      return {
        ...state,
        auth: action.payload,
        profile: action.payload.user
      };
    case USERS_LOGIN_FAILURE:
      state.isAuthenticated = false;
      return {
        ...state
      };
    case USERS_LOGIN_AUTO:
      state.isAuthenticated = true;
      return {
        ...state,
        auth: action.payload,
        profile: action.payload.user
      };
    case USER_LOGOUT:
      state.isAuthenticated = false;
      state.auth = {};
      return {
        ...state
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
}
