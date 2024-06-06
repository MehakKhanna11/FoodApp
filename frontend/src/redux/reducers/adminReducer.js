import { createSlice } from "@reduxjs/toolkit";

const adminReducer=createSlice({name:"admin",initialState:{orders:[],users:[]},reducers:{
    getDashboardStatsRequest:(state)=>{
        state.loading=true;
    },
    getDashboardStatsSuccess:(state,action)=>{
        state.loading=false;
        state.usersCount=action.payload.usersCount;
        state.ordersCount=action.payload.ordersCount;
        state.totalIncome=action.payload.totalIncome;
    },    
    getDashboardStatsFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },



    getAdminUsersRequest:(state)=>{
        state.loading=true;
    },
    getAdminUsersSuccess:(state,action)=>{
        state.loading=false;
        state.users=action.payload;

    },    
    getAdminUsersFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },


    getAdminOrdersRequest:(state)=>{
        state.loading=true;
    },
    getAdminOrdersSuccess:(state,action)=>{
        state.loading=false;
        state.orders=action.payload;

    },    
    getAdminOrdersFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },

    processOrderRequest:(state)=>{
        state.loading=true;
    },
    processOrderSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },    
    processOrderFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },

    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null
    }
}});

export const {getDashboardStatsSuccess,getDashboardStatsFail,getDashboardStatsRequest,getAdminUsersFail,getAdminUsersSuccess,getAdminUsersRequest,getAdminOrdersRequest,getAdminOrdersSuccess,getAdminOrdersFail,processOrderFail,processOrderRequest,processOrderSuccess,clearError,clearMessage}=adminReducer.actions;
export default adminReducer.reducer;