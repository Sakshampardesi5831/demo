import React, { Fragment, useEffect } from 'react'
import {AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
} from '@mui/material'
import {Person, Route} from '@mui/icons-material'
import {useDispatch,useSelector} from 'react-redux'
import { asyncAdminSignOut,asyncCurrentAdmin } from '@/store/Action/AdminAction'
import { useRouter } from 'next/router'
/**---------------------------------------------------------------- */

const StyleWrapper=styled(AppBar)({
  backgroundColor:"#1e0ec9",
  boxShadow:"none",
  padding:"10px 30px",
  height:"80px",
  borderBottom:"3px solid #f2f6f9",
  color:"#000"
});

const LogoHeading=styled(Typography)({
  fontSize:"30px",
  fontWeight:"900",
  color:'#fff',
  display:"flex",
  alignItems:"center",
  gap:"10px"
});

const UserHeading=styled(Typography)({
   fontSize:"25px",
   color:"#fff",
   fontWeight:"700"
});
const UserWrapper=styled(Box)({
  width:"20%",
  padding:"10px 15px",
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center"
});

/**----------------------------------------------------------------- */
const AdminNavbar = () => {
  const {admin,isAuthenticated}=useSelector((state)=>state.AdminReducer);
  const dispatch=useDispatch();
  const router=useRouter();
  useEffect(()=>{
    if(!isAuthenticated){
      dispatch(asyncCurrentAdmin());
    }
    if(isAuthenticated){
      router.push("/admin/dashboard");
    }
  },[isAuthenticated]);
  const handleSignOut=()=>{
      dispatch(asyncAdminSignOut());
      dispatch(asyncCurrentAdmin());
      router.push("/");
  }
  return (
    <Fragment>
      <StyleWrapper position='static'>
        <Toolbar style={{display:"flex",justifyContent:"space-between",alignItems:'center',padding:"5px 10px"}}>
           <LogoHeading>
             <Person fontSize='25'/>
               User Management
           </LogoHeading>
            <UserWrapper>
            <UserHeading>{admin?.firstname}</UserHeading>
            <UserHeading onClick={()=>handleSignOut()}style={{fontSize:"18px",cursor:"pointer"}}>signOut</UserHeading>
            </UserWrapper>  
        </Toolbar>
      </StyleWrapper>
    </Fragment>
  )
}

export default AdminNavbar