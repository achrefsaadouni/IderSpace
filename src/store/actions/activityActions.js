import axios from "axios";


import {
    LOADING,
    GET_ACTIVITIES, GET_SUPERVISORS, GET_ACTIVITIES_MEMBERS_LIST, ADD_ACTIVITY

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

export const getSupervisors = () => dispatch => {
    dispatch(setForumLoading());
    axios
        .get(
            `http://localhost:2500/api/activity/getAllSupervisors`
        )
        .then(res => {
            dispatch({
                type: GET_SUPERVISORS,
                payload: res.data
            });

            console.log(res)
        })
        .catch(err =>
            dispatch({
                type: GET_SUPERVISORS,
                payload: {}
            })
        );
};


export const getMembersList = tab => dispatch => {

    dispatch(setForumLoading());
    axios
        .post(
            `http://localhost:2500/api/activity/getAllMembers`,{members: tab}
        )
        .then(res => {
            dispatch({
                type: GET_ACTIVITIES_MEMBERS_LIST,
                payload: res.data
            })

            console.log(res.data)
        })
        .catch(err =>
            dispatch({
                type: GET_ACTIVITIES_MEMBERS_LIST,
                payload: {}
            })
        );
};

export const CreateActivity = values => dispatch => {

    dispatch(setForumLoading());
    axios
        .post(
            `http://localhost:2500/api/activity/createActivity`,{values: values}
        )
        .then(res => {
            dispatch({
                type: ADD_ACTIVITY,
                payload: res.data
            })

            console.log(res.data)
        })
        .catch(err =>
            dispatch({
                type: ADD_ACTIVITY,
                payload: {}
            })
        );
};