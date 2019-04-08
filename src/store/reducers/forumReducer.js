import {
  GET_FORUM,
  ADD_QUESTION,
  GET_QUESTION,
  GET_QUESTIONS,
  GET_COMMENTS,
  DELETE_QUESTION,
  LOADING
} from "../actions/types";

const initialState = {
  questions: [],
  question: {},
  forum: {},
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_FORUM:
      return {
        ...state,
        forum: action.payload,
        loading: false
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case GET_COMMENTS:
      return {
        ...state,
        question: action.payload,
        loading: false
      };
    case GET_QUESTION:
      return {
        ...state,
        question: action.payload,
        loading: false
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [action.payload, ...state.posts]
      };
    case DELETE_QUESTION:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    default:
      return state;
  }
}
