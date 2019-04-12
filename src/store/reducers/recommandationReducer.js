import {
    GET_Recommandation,
    LOADING
} from "../actions/types";

const initialState = {

    loading:false,
    recommandation: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_Recommandation:
            return {

                ...state,
                recommandation: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
