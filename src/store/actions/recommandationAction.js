import axios from "axios";

import {
    GET_Recommandation, LOADING,
    SET_CURRENT_USER
} from "./types";

// Get current forum
export const getRecommandation = tab => dispatch => {
    dispatch(setRecommandationLoading());
    axios
        .post("http://127.0.0.1:2500/api/user/getRecommendation", {reqSkills: tab},{headers:{'Content-Type': 'application/json'}})
        .then(res => {
            dispatch({
                type: GET_Recommandation,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_Recommandation,
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
        type: GET_Recommandation,
        payload: decoded
    };
};