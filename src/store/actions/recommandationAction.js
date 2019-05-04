import axios from "axios";

import {
    GET_RECOMMANDATION, LOADING, GET_ALLSKILLS,
    SET_CURRENT_USER, GET_PROFILE
} from "./types";
import {setProfileLoading} from "./profileActions";

// Get recommandation
export const getRecommandation = tab => dispatch => {
    dispatch(setRecommandationLoading());
    axios
        .post("http://localhost:2500/api/user/getRecommendation", {reqSkills: tab},{headers:{'Content-Type': 'application/json'}})
        .then(res => {
            dispatch({
                type: GET_RECOMMANDATION,
                payload: res.data
            })
            console.log("appel",res.data)
        })
        .catch(err =>
            dispatch({
                type: GET_RECOMMANDATION,
                payload: {}
            })
        );
};

// GET all skills
export const getAllSkills = () => dispatch => {
    dispatch(setRecommandationLoading());
    axios
        .get("http://localhost:2500/api/user/getAllSkills")
        .then(res =>
            dispatch({
                type: GET_ALLSKILLS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ALLSKILLS,
                payload: {}
            })
        );
};


// Set loading state
export const setRecommandationLoading = () => {
    return {
        type: LOADING
    };
};


// Set loading state
export const setRec = decoded => {
    return {
        type: GET_RECOMMANDATION,
        payload: decoded
    };
};