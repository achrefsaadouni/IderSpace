import {
  GET_FORUM,
  ADD_QUESTION,
  GET_QUESTION,
  GET_QUESTIONS,
  GET_COMMENTS,
  GET_QUESTIONS_LAST3,
  DELETE_QUESTION,
  LOADING,
  GET_SEARCH
} from "../actions/types";

const initialState = {
  questions: null,
  question: null,
  forum: null,
  comments: null,
  newquestion: null,
  lastQuestions: null,
  search: null,
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
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload,
        loading: false
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case GET_QUESTIONS_LAST3:
      return {
        ...state,
        lastQuestions: action.payload,
        loading: false
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
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
        questions: [action.payload, ...state.posts],
        newquestion: action.payload
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
