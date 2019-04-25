import isEmpty from "../../validation/is-empty";

import { SET_CURRENT_USER, GET_USER_INFO , SET_CURRENT_USER_AFTER_UPDATE_IMAGE } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  userInfo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_CURRENT_USER_AFTER_UPDATE_IMAGE:
      return {
        ...state,
        user: action.payload
      };
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
}
