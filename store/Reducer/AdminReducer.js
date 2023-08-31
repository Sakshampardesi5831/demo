import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    isAuthenticated:false,
    admin:null,
    errors:null,
}


export const adminSlice=createSlice({
   name:"admin",
   initialState,
   reducers:{
     isLoading:(state,action)=>{
        state.isLoading=true;
     },
     SetUser:(state,actions)=>{
          state.isAuthenticated=true,
          state.isLoading=false,
          state.admin=actions.payload,
          state.errors=null
          console.log(actions);
     },
     RemoveUser:(state,actions)=>{
        state = {
            isLoading: false,
            isAuthenticated: false,
            admin: null,
            error: null,
        };
     }
   }
});

export const {SetUser,RemoveUser}=adminSlice.actions

export default adminSlice.reducer;