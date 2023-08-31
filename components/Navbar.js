import React, { Fragment, useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { asyncCurrentAdmin } from '@/store/Action/AdminAction';
import { useRouter } from 'next/router';
import {Button,AppBar,Toolbar,Typography,styled,Select,MenuItem} from '@mui/material'
import {Person} from '@mui/icons-material'
const StyleWrapper=styled(AppBar)({
  backgroundColor:"#1e0ec9",
  boxShadow:"none",
  padding:"10px 30px",
  height:"80px",
  borderBottom:"3px solid #f2f6f9",
  color:"#000"
});

const LogoHeading=styled(Typography)({
  fontSize:"34px",
  fontWeight:"900",
  color:'#fff',
  display:"flex",
  alignItems:"center"
});
const Navbar = () => {
  const [chooseUser,setChooseUser]=useState("");
  const dispatch=useDispatch();
  const router=useRouter();
  const handleSelectChange=(e)=>{
    const selectedOption=e.target.value
    setChooseUser(selectedOption);

    //condition for pushing the route 

    if(selectedOption ==="Admin"){
       router.push("/admin/login")
    }
    if(selectedOption ==="User"){
      router.push("/user/login");
    }
    if(selectedOption ===""){
     router.push("/");
    }
}
  return (
    <StyleWrapper>
    <Toolbar style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 15px"}}>
       <LogoHeading> <Person fontSize='25px' />User Management</LogoHeading>
        <select name="" id="selectBox" value={chooseUser} onChange={handleSelectChange}>
              <option value="">Select the Account</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
        </select>
    </Toolbar>
  </StyleWrapper>
  )
}

export default Navbar