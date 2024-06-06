import {
    getAdminOrdersFail,
    getAdminOrdersRequest,
    getAdminOrdersSuccess,

    getAdminUsersFail,
    getAdminUsersRequest,
    getAdminUsersSuccess,
    
  getDashboardStatsFail,
  getDashboardStatsRequest,
  getDashboardStatsSuccess,
  processOrderFail,
  processOrderRequest,
  processOrderSuccess,
} from "../reducers/adminReducer";
import { server } from "../store";
import axios from "axios";

export const getAdminStats = () => async (dispatch) => {
  try {
    dispatch(getDashboardStatsRequest());

    const { data } = await axios.get(`${server}/admin/stats`, {
      withCredentials: true,
    });

    dispatch(getDashboardStatsSuccess(data));
  } catch (error) {
    dispatch(getDashboardStatsFail(error.response.data.message));
  }
};




export const getAdminUsers = () => async (dispatch) => {
  try {
    dispatch(getAdminUsersRequest());

    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });

    dispatch(getAdminUsersSuccess(data.users));
  } catch (error) {
    dispatch(getAdminUsersFail(error.response.data.message));
  }
};





export const getAdminOrders = () => async (dispatch) => {
  try {
    dispatch(getAdminOrdersRequest());

    const { data } = await axios.get(`${server}/admin/orders`, {
      withCredentials: true,
    });

    dispatch(getAdminOrdersSuccess(data.orders));
  } catch (error) {
    dispatch(getAdminOrdersFail(error.response.data.message));
  }
};





export const processOrder = (id) => async (dispatch) => {
    try {
      dispatch(processOrderRequest());
  
      const { data } = await axios.get(`${server}/admin/order/${id}`, {
        withCredentials: true,
      });
      console.log(data);
  
      dispatch(processOrderSuccess(data.message));
    } catch (error) {
        console.log(error)
      dispatch(processOrderFail(error.response.data.message));
    }
  };
