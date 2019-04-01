import axios from "axios";
import {
  GET_ERRORS,
  CLEAR_ERRORS,
  ADD_POST,
  DELETE_POST,
  GET_POST,
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
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
