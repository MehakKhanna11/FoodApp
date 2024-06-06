import axios from "axios";
import {
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
  uploadContactInfoRequest,
  uploadContactInfoSuccess,
  uploadContactInfoFail
} from "../reducers/userReducer.js";


import { server } from "../store.js";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
// console.log(data);
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    dispatch(
      loadUserFail(error.response.data.message) //error.response.data.message
    );
  }
};




export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });

    dispatch(logoutSuccess(data.message));
  } catch (error) {
    dispatch(
      logoutFail(error.response.data.message) //error.response.data.message
    );
  }
};


export const uploadContactInfo = (name,email,message) => async (dispatch) => {
  try {
    dispatch(uploadContactInfoRequest());
    const { data } = await axios.post(`${server}/contact`, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      name,email,message
    });

    dispatch(uploadContactInfoSuccess(data.message));
  } catch (error) {
    dispatch(
      uploadContactInfoFail(error.response.data.message) 
    );
  }
};