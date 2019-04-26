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
  LOADING,
  GET_QUESTIONS_LAST3
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

// Get last 3 questions
export const getLast3Questions = (id, page, current) => dispatch => {
  axios
    .get(`http://localhost:2500/api/question/last3`)
    .then(res =>
      dispatch({
        type: GET_QUESTIONS_LAST3,
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
export const addQuestion = (question, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post("http://localhost:2500/api/question", question)
    .then(res =>
      history.push(
        "/forum/" +
          res.data.question.category +
          "/question/" +
          res.data.question._id
      )
    )
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Add comment
export const addComment = (id, comment) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`http://localhost:2500/api/question/comment/${id}`, comment)
    .then(res => dispatch(getComments(id, 3, 1))
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Update question
export const updateQuestion = (id, question, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .put(`http://localhost:2500/api/question/${id}`, question)
    .then(res =>
      history.push(
        "/forum/" +
          res.data.question.category +
          "/question/" +
          res.data.question._id
      )
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete question
export const deleteQuestion = (id, history, category_id) => dispatch => {
  dispatch(setForumLoading());
  axios
    .delete(`http://localhost:2500/api/question/${id}`)
    .then(res => {
      history.push("/forum/" + category_id);
    })
    .catch(err =>
      dispatch({
        type: DELETE_QUESTION,
        payload: null
      })
    );
};

// Delete comment
export const deleteComment = (id, id_comment) => dispatch => {
  axios
    .delete(`http://localhost:2500/api/question/${id}/comment/${id_comment}`)
    .then(res =>
      dispatch(getComments(id, 3, 1))
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
  axios
    .post(`http://localhost:2500/api/question/like/${id}`)
    .then(res => dispatch(getQuestion(id)))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// dislike
export const unlikeQuestion = id => dispatch => {
  axios
    .post(`http://localhost:2500/api/question/unlike/${id}`)
    .then(res => dispatch(getQuestion(id)))
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
