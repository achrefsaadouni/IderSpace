import {
    GET_ACTIVITIES, GET_SUPERVISORS, GET_ACTIVITIES_MEMBERS_LIST,
    LOADING, ADD_ACTIVITY,CREATIONBAR
} from "../actions/types";

const initialState = {
    activities: null,
    supervisors: null,
    membersList:null,
    activityCreation:null,
    loading: true,
    creationBar:true
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOADING:
        return {
            ...state,
            loading: true
        };
        case CREATIONBAR:
            return {
                ...state,
                creationBar: true
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                loading: false
            };
        case GET_SUPERVISORS:
            return {
                ...state,
                supervisors: action.payload,
                loading: false
            };
        case GET_ACTIVITIES_MEMBERS_LIST:
            return {
                ...state,
                membersList: action.payload,
                loading: false
            };
        case ADD_ACTIVITY:
            return {
                ...state,
                activityCreation: action.payload,
                loading: false
            };

        default:
            return state;
    }
}
