import {createSlice} from "@reduxjs/toolkit";

 const authReducer=createSlice({name:"load",initialState:{},
    reducers:{
    loadUserRequest:(state,action)=>{
        state.loading=true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;
    },  
    loadUserFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload; 
    },
    logoutRequest:(state)=>{
        state.loading=true;
    },
    logoutSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.message=action.payload
        state.user=null;
    },  
    logoutFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.error=action.payload; 
    },
    clearError:(state,action)=>{
        state.error=null;
    },
    clearMessage:(state,action)=>{
        state.message=null
    },

    uploadContactInfoRequest:(state,action)=>{
        state.loading=true;
    },
    uploadContactInfoSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },  
    uploadContactInfoFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload; 
    },
}});


export const {loadUserRequest,loadUserSuccess,loadUserFail,logoutRequest,logoutSuccess,logoutFail,clearError,clearMessage,uploadContactInfoFail,uploadContactInfoRequest,uploadContactInfoSuccess}=authReducer.actions;

export default authReducer.reducer;