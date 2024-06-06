import axios from "axios";
import { server } from "../store";
import { createOrderFail, createOrderRequest, createOrderSuccess, paymentVerificationFail, paymentVerificationRequest, paymentVerificationSuccess } from "../reducers/orderReducer";
import { getMyOrdersFail, getMyOrdersRequest, getMyOrdersSuccess, getOrderDetailsFail, getOrderDetailsRequest, getOrderDetailsSuccess } from "../reducers/ordersReducer";



export const createOrder=(shippingInfo,orderItems,paymentMethod,itemsPrice,taxPrice,shippingCharges,totalAmount)=>async(dispatch)=>{
    try {
        dispatch(createOrderRequest());
        const { data } = await axios.post(`${server}/createorder`,{
            shippingInfo,
            orderItems,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totalAmount,
        },{
          withCredentials: true,
          headers: {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        });
        dispatch(createOrderSuccess(data.message));
      } catch (error) {
        console.log(error);
        dispatch(createOrderFail(error.response.data.message) //error.response.data.message
        );
      }
}

export const paymentVerification=(              razorpay_payment_id,
  razorpay_order_id,
  razorpay_signature,
  orderOptions)=>async(dispatch)=>{
  try {
      dispatch(paymentVerificationRequest());
      const { data } = await axios.post(`${server}/paymentverification`,{
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        orderOptions
      },{
        withCredentials: true,
        headers: {
          "Content-Type":"application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });
      dispatch(paymentVerificationSuccess(data.message));
    } catch (error) {
      console.log(error);
      dispatch(paymentVerificationFail(error.response.data.message) //error.response.data.message
      );
    }
}



export const getMyOrders=()=>async(dispatch)=>{
  try{
    dispatch(getMyOrdersRequest());
    const {data}=await axios.get(`${server}/myorders`,{
      withCredentials:true,
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      }}
    )
    console.log(data);
    dispatch(getMyOrdersSuccess(data.orders));
  }
  catch(error){
    console.log(error);
    dispatch(getMyOrdersFail(error.response.data.message));//
  }
}

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch(getOrderDetailsRequest());

    const { data } = await axios.get(`${server}/order/${id}`, {
      withCredentials: true,
    });

    dispatch(getOrderDetailsSuccess(data.order));
  } catch (error) {
    dispatch(getOrderDetailsFail(error.response.data.message));
  }
};