import {
    GET_ACTIVITIES,
    LOADING
} from "../actions/types";

const initialState = {
    activities: null,
    loading: true
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                loading: false
            };

        default:
            return state;
    }
}
