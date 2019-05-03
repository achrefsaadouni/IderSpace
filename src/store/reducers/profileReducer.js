import {
    GET_PROFILE,
    GET_PROFILES,
    LOADING,
    CLEAR_CURRENT_PROFILE,
    SET_RESUME, SET_LINKEDIN, UPDATE_PHOTO, GET_USER_FRIENDS
} from "../actions/types";

const initialState = {
    profile: null,
    profiles: null,
    loading: false,
    hobbies: null,
    about: null,
    languages: null,
    facebook: '',
    url: null,
    friends:null

};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PROFILE:
            return {
                ...state,
                friends:null,
                profile: action.payload,
                loading: false
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: action.payload,
                loading: false
            };
        case GET_USER_FRIENDS:
            return {
                ...state,
                friends: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
            };
        case UPDATE_PHOTO:
            return {
                ...state,
                profile: action.payload
            };
        case SET_RESUME:
            return {
                ...state,
                hobbies: action.payload,
                about: action.payload,
                languages: action.payload,
                facebook: action.payload,
                loading: false
            };
        case SET_LINKEDIN:
            return {
                ...state,
                url: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
