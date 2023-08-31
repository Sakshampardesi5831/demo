import React, { Fragment, useEffect, useState } from 'react'
import {Box,Typography,Button,InputBase,styled} from '@mui/material'
import {AddOutlined, AdminPanelSettings} from '@mui/icons-material'
import Link from 'next/link';
import { asyncAdminSignin,asyncCurrentAdmin } from '@/store/Action/AdminAction';
import {useDispatch,useSelector} from 'react-redux'
import { useRouter } from 'next/router';
/**----------------------------------------------------------------------- */
const AdminWrapper=styled(Box)({
 width:"100%",
 height:"100vh",
 border:"5px solid #000",
//  backgroundColor:"white",
 display:'flex',
 flexDirection:"column",
 justifyContent:"space-around",
 alignItems:'center',
 backgroundColor: "#0093E9",
backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
});
const AdminFromWrapper=styled(Box)({
  width:"40%",
  height:"70%",
  border:"2px solid #fff",
  padding:"10px 10px",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-around",
  alignItems:"center",
  borderRadius:"5px"
});
const AdminHeading=styled(Box)({
  width:"100%",
  padding:"10px 15px",
  textAlign:"left",
});
const AdminStyler=styled(Typography)({
  fontSize:"35px",
  fontWeight:"700",
  color:"#fff",
  display:"flex",
  alignItems:"center"
});
const AdminFormContentWrapper=styled(Box)({
  width:'100%',
  padding:"5px 10px",
  marginTop:"10px"
});
const AdminForm=styled(Box)({
   width:"100%",
   height:"80%",
//    border:"2px solid red",
   padding:"10px 15px"
});
const FormContentTypo=styled(Typography)({
  fontSize:"30px",
  color:'#fff'
});
const AdminInput=styled(InputBase)({
  width:"100%",
  padding:"10px 15px",
  border:"1px solid #fff",
  color:"#fff",
  marginTop:"10px",
  fontSize:"18px",
  borderRadius:"10px"
});
const ButtonWrapper=styled(Box)({
    width:'100%',
    padding:"5px 10px",
    marginTop:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})
const ButtonStyler=styled(Button)({
   padding:"10px 35px",
   color:'#fff',
   backgroundColor:"#142683",
   '&:hover':{
    backgroundColor:"#5081f4",
   },
   border:"1px solid #fff"
});

/**------------------------------------------------------------------------ */
const AdminLoginPage = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  const router=useRouter();
  const {admin,isAuthenticated}=useSelector((state)=>state.AdminReducer);
  const submitHandler=(e)=>{
       e.preventDefault();
       let admin={
         email:email,
         password:password
       }
     dispatch(asyncAdminSignin(admin));
  }
  useEffect(()=>{
    if(!isAuthenticated){
       dispatch(asyncCurrentAdmin());
    }
    if(isAuthenticated){
      router.push("/admin/dashboard");
    }
  },[isAuthenticated])
  return (
    <Fragment>
       <AdminWrapper>
          <AdminFromWrapper>
          <AdminHeading>
            <AdminStyler><AdminPanelSettings fontSize='25px'/>  WELCOME TO ADMIN LOGIN</AdminStyler>
          </AdminHeading>
          <AdminForm>
             < AdminFormContentWrapper>
             <FormContentTypo>Enter the Email</FormContentTypo>
             <AdminInput onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter the Email Address'/>
             </ AdminFormContentWrapper>
             <AdminFormContentWrapper>
             <FormContentTypo>Enter the Password</FormContentTypo>
             <AdminInput onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter the Password'/>
             </ AdminFormContentWrapper> 
             <ButtonWrapper>
               <ButtonStyler onClick={submitHandler}>Login</ButtonStyler>
               <Link style={{color:"#FFF",textDecoration:"none",display:"flex",alignItems:"center",padding:"10px 25px",border:"2px solid #fff"}}href={`/admin/register`}><AddOutlined/>Create Account</Link>
            </ButtonWrapper> 
          </AdminForm>
          </AdminFromWrapper>
       </AdminWrapper>
    </Fragment>
  )
}

export default AdminLoginPage