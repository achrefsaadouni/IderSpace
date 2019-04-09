import axios from "axios";

import {
  GET_FORUM,
  GET_QUESTIONS,
  GET_QUESTION,
  GET_COMMENTS,
  ADD_QUESTION,
  DELETE_QUESTION,
  CLEAR_ERRORS,
  GET_ERRORS,
  LOADING
} from "./types";

// Get current forum
export const getForum = () => dispatch => {
  dispatch(setForumLoading());
  axios
    .get("http://localhost:2500/api/forum")
    .then(res =>
      dispatch({
        type: GET_FORUM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FORUM,
        payload: {}
      })
    );
};

// Get questions
export const getQuestions = (id, page, current) => dispatch => {
  dispatch(setForumLoading());
  axios
    .get(
      `http://localhost:2500/api/question/forum/${id}?pageSize=${page}&currentPage=${current}`
    )
    .then(res =>
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_QUESTIONS,
        payload: {}
      })
    );
};

// Get current question
export const getQuestion = id => dispatch => {
  dispatch(setForumLoading());
  axios
    .get(`http://localhost:2500/api/question/${id}`)
    .then(res =>
      dispatch({
        type: GET_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_QUESTION,
        payload: null
      })
    );
};

// Get comments
export const getComments = (id, page, current) => dispatch => {
  dispatch(setForumLoading());
  axios
    .get(
      `http://localhost:2500/api/question/comments/${id}?pageSize=${page}&currentPage=${current}`
    )
    .then(res =>
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COMMENTS,
        payload: null
      })
    );
};

// Add Question
export const addGuestion = question => dispatch => {
  dispatch(setForumLoading());
  axios
    .post("http://localhost:2500/api/question", question)
    .then(res =>
      dispatch({
        type: ADD_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add comment
export const addComment = (id, comment) => dispatch => {
  dispatch(setForumLoading());
  axios
    .post(`http://localhost:2500/api/question/comment/${id}`, comment)
    .then(res =>
      dispatch({
        type: GET_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Update question
export const updateQuestion = (id, question) => dispatch => {
  dispatch(setForumLoading());
  axios
    .put(`http://localhost:2500/api/question/${id}`, question)
    .then(res =>
      dispatch({
        type: DELETE_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_QUESTION,
        payload: null
      })
    );
};

// Delete question
export const deleteQuestion = id => dispatch => {
  dispatch(setForumLoading());
  axios
    .delete(`http://localhost:2500/api/question/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_QUESTION,
        payload: null
      })
    );
};

// Delete comment
export const deleteComment = (id, id_comment) => dispatch => {
  dispatch(setForumLoading());
  axios
    .delete(`http://localhost:2500/api/question/comment/${id}/${id_comment}`)
    .then(res =>
      dispatch({
        type: GET_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_QUESTION,
        payload: null
      })
    );
};

// Set Best comment
export const bestComment = (id, id_comment) => dispatch => {
  dispatch(setForumLoading());
  axios
    .post(`http://localhost:2500/api/question/comment/${id}/${id_comment}`)
    .then(res =>
      dispatch({
        type: GET_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_QUESTION,
        payload: null
      })
    );
};

// like
export const likeQuestion = id => dispatch => {
  dispatch(setForumLoading());
  axios
    .post(`http://localhost:2500/api/like/comment/${id}`)
    .then(res =>
      dispatch({
        type: GET_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// dislike
export const unlikeQuestion = id => dispatch => {
  dispatch(setForumLoading());
  axios
    .post(`http://localhost:2500/api/unlike/comment/${id}`)
    .then(res =>
      dispatch({
        type: GET_QUESTION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setForumLoading = () => {
  return {
    type: LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
