import {combineReducers} from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import forumReducer from "./forumReducer";
import activityReducer from "./activityReducer";
import recommandationReducer from "./recommandationReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer,
    forum: forumReducer,
    activity: activityReducer,
    recommandation: recommandationReducer
});
