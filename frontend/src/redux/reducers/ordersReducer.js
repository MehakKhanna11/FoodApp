import { createSlice } from "@reduxjs/toolkit";

export const ordersReducer=createSlice({name:"orders",initialState:{},reducers:{
    getMyOrdersRequest:(state)=>{
        state.loading=true;
    },
    getMyOrdersSuccess:(state,action)=>{
        state.loading=false;
        state.orders=action.payload;
    },
    getMyOrdersFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    getOrderDetailsRequest:(state)=>{
        state.loading=true;
    },
    getOrderDetailsSuccess:(state,action)=>{
        state.loading=false;
        state.order=action.payload;
    },
    getOrderDetailsFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    clearError:(state,action)=>{
        state.error=null;
    },
    clearMessage:(state,action)=>{
        state.message=null
    },

}});

export const {getMyOrdersRequest,getMyOrdersSuccess,getMyOrdersFail,getOrderDetailsRequest,getOrderDetailsSuccess,getOrderDetailsFail,clearError,clearMessage}=ordersReducer.actions;
export default ordersReducer.reducer;