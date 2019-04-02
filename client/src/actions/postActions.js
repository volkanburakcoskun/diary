import axios from "axios";
import {
  GET_ERRORS,
  CLEAR_ERRORS,
  ADD_POST,
  DELETE_POST,
  POST_LOADING,
  GET_POSTS
} from "./types";

export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`api/v1/posts/`, postData)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/v1/posts/")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/v1/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
