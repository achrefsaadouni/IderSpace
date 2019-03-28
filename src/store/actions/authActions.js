import { POST_LOGIN } from "./types";
import axios from "axios";

export const postLogin = auth => async dispatch => {
  const res = await axios.post("http://localhost:2500/api/user/login", auth);
  dispatch({
    type: POST_LOGIN,
    payload: res
  });
};
