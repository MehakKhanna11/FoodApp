import { createSlice } from "@reduxjs/toolkit";

export const orderReducer=createSlice({
    name:"order",initialState:{},
    reducers:{
        createOrderRequest:(state,action)=>{
            state.loading=true;
        },
        createOrderSuccess:(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        },
        createOrderFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        clearError:(state,action)=>{
            state.error=null;
        },
        clearMessage:(state,action)=>{
            state.message=null
        },
        paymentVerificationRequest:(state,action)=>{
            state.loading=true;
        },
        paymentVerificationSuccess:(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        },
        paymentVerificationFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
    }
});



export const {createOrderFail,createOrderSuccess,createOrderRequest,clearError,clearMessage,paymentVerificationRequest,paymentVerificationSuccess,paymentVerificationFail}=orderReducer.actions;
export default orderReducer.reducer;