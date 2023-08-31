import React, { useEffect } from 'react'
import AdminLoginPage from '@/components/Admin/AdminLoginPage'
import {useSelector,useDispatch} from 'react-redux'
import { asyncCurrentAdmin } from '@/store/Action/AdminAction'
import { useRouter } from 'next/router'
const AdminLogin = () => {
  const dispatch=useDispatch();
  const router=useRouter();
  const {isAuthenticated}=useSelector((state)=>state.AdminReducer);
  useEffect(()=>{
     if(!isAuthenticated){
       dispatch(asyncCurrentAdmin());
     }
     if(isAuthenticated){
        router.push("/admin/dashboard");
     }
  },[isAuthenticated])
  return (
     <AdminLoginPage/>
  )
}

export default AdminLogin