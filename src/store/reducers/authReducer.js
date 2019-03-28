import { POST_LOGIN } from "../actions/types";

const initialState = {
  auth: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_LOGIN:
      return {
        ...state,
        auth: action.payload
      };
    default:
      return state;
  }
}
