import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import forumReducer from "./forumReducer";
import recommandationReducer from "./recommandationReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  forum: forumReducer,
  recommandation: recommandationReducer
});
