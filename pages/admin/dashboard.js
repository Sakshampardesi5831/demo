import React, { useEffect } from 'react'
import AdminDashboard from '@/components/Admin/AdminDashboard'
import {useSelector,useDispatch}from 'react-redux'
import { useRouter } from 'next/router'
const dashboard = () => {
  const {admin,isAuthenticated}=useSelector((state)=>state.AdminReducer);
  const router=useRouter();
  const dispatch=useDispatch();
  useEffect(()=>{
    if(!isAuthenticated){
      router.push("/");
    }
  },[isAuthenticated])
  return (
     <AdminDashboard/>
  )
}

export default dashboard