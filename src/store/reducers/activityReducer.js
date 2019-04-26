import {
    ADD_ACTIVITY, ADD_MODULE, ADD_TODO,
    CREATIONBAR,
    GET_ACTIVITIES,
    GET_ACTIVITIES_MEMBERS_LIST,
    GET_ACTIVITY,
    GET_MEMBERS_ACTIVITY,
    GET_SUPERVISORS,
    LOADING, TODOS_MODULE
} from "../actions/types";

const initialState = {
    activities: null,
    supervisors: null,
    membersList: null,
    activityCreation: null,
    loading: true,
    creationBar: true,
    workspaceActivity: null,
    activityMembers: null,
    modulecreation: null,
    moduleTodos:null,
    todoCreation:null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ACTIVITY:
        return {
            ...state,
            workspaceActivity: action.payload,
            loading: false
        };
        case GET_MEMBERS_ACTIVITY:
            return {
                ...state,
                workspaceActivity: action.payload,
                loading: false
            };
        case TODOS_MODULE:
            return {
                ...state,
                moduleTodos: action.payload,
                loading: false
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
        case ADD_TODO:
            return {
                ...state,
                todoCreation: action.payload,
                loading: false
            };
        case ADD_MODULE:
            return {
                ...state,
                modulecreation: action.payload,
                loading: false
            };

        default:
            return state;
    }
}
