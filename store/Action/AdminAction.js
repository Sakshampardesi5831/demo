import instance from "@/axiosConfig";
import { SetUser } from "../Reducer/AdminReducer";

export const setAdmin=()=> async (dispatch,getState)=>{
   try {
     const res=await instance.get("/");
     console.log(res);
   } catch (error) {
     console.log(error);
   }
}

export const asyncCurrentAdmin=()=>async (dispatch,getState)=>{
    try {
      const res=await instance.get("/admin/currentAdmin");
      
      dispatch(SetUser(res.data.admin));
    } catch (error) {
       console.log(error);
    }
}

export const asyncAdminSignup=(admin)=>async (dispatch,getState)=>{
    try {
      const res=await instance.post("/admin/signup",admin);
      asyncCurrentAdmin();
      dispatch(asyncCurrentAdmin());
      console.log(res);
    } catch (error) {
      console.log(error);
    }
}

export const asyncAdminSignin=(admin)=>async (dispatch,getState)=>{
   try {
     const res=await instance.post("/admin/signin",admin);
     dispatch(asyncCurrentAdmin());
     console.log(res);
   } catch (error) {
     console.log(error);
   }
}

export const asyncAdminSignOut=(admin)=>async (dispatch,getState)=>{
   try {
      const res=await instance.get("/admin/signout",admin);
      dispatch(asyncCurrentAdmin());
      console.log(res);
   } catch (error) {
      console.log(error);
   }
}