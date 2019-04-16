import axios from "axios";


import {
    GET_ACTIVITIES, GET_QUESTIONS,
    LOADING
} from "./types";
import {setForumLoading} from "./forumActions";

export const getActivities = () => dispatch => {
    dispatch(setForumLoading());
    axios
        .get(
            `http://localhost:2500/api/activity/getAllCreatedActivities`
        )
        .then(res => {
            dispatch({
                type: GET_ACTIVITIES,
                payload: res.data
            })

                console.log(res)
        })
        .catch(err =>
            dispatch({
                type: GET_ACTIVITIES,
                payload: {}
            })
        );
};