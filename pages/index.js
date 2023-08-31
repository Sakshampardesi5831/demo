import React, { Fragment, useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { asyncCurrentAdmin } from '@/store/Action/AdminAction';
import { useRouter } from 'next/router';
import {Button,AppBar,Toolbar,Typography,styled,Select,MenuItem} from '@mui/material'
import {Person} from '@mui/icons-material'
import Navbar from '@/components/Navbar';
/**------------------------------------------------------------------- */


/**------------------------------------------------------------------- */
const index = () => {
  const {admin,isAuthenticated}=useSelector((state)=>state.AdminReducer);
  const dispatch=useDispatch();
  const router=useRouter();
  useEffect(()=>{
     dispatch(asyncCurrentAdmin());
     if(!isAuthenticated){
      dispatch(asyncCurrentAdmin());
     }
     if(isAuthenticated){
       router.push("/admin/dashboard");
     }
  },[isAuthenticated])
  return (
    <Fragment>
        <Navbar/>
    </Fragment>
  )
}

export default index