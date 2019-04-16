import {
    GET_RECOMMANDATION,
    LOADING,
    GET_ALLSKILLS
} from "../actions/types";

const initialState = {

    loading: false,
    recommandation: null,
    allSkills: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_RECOMMANDATION:
            return {

                ...state,
                recommandation: action.payload,
                loading: false
            };
        case GET_ALLSKILLS:
            return {

                ...state,
                allSkills: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
