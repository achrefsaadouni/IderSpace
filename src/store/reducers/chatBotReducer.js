import {
    GET_CHATBOTQUESTION,
    LOADING
} from "../actions/types";

const initialState = {
    questionBots: null,
    loading: true
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_CHATBOTQUESTION:
            return {
                ...state,
                questionBots: action.payload,
                loading: false
            };

        default:
            return state;
    }
}
