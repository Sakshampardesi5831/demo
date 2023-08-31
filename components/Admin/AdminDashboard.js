import React, { Fragment, useEffect } from 'react'
import {Box,Typography,Button,Dialog,styled} from '@mui/material'
import AdminNavbar from './AdminNavbar'
import AdminUserTable from './AdminUserTable'
import {useDispatch,useSelector} from 'react-redux'
import { asyncCurrentAdmin } from '@/store/Action/AdminAction'
/**---------------------------------------------------------------------- */

/**----------------------------------------------------------------------- */
const AdminDashboard = () => {
  const {admin,isAuthenticated}=useSelector((state)=>state.AdminReducer);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(asyncCurrentAdmin());
  },[])
  return (
    <Fragment>
      <AdminNavbar/>
      <AdminUserTable/>
    </Fragment>
  )
}

export default AdminDashboard