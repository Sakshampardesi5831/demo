import React, { Fragment } from 'react'
import {Box,Typography,InputBase,styled, colors, Button} from '@mui/material'
import {} from '@mui/icons-material'
/**----------------------------------------------------------------------- */
const RegisterWrapper=styled(Box)({
    width:"100%",
    height:"100vh",border:'2px solid #000',
    backgroundColor:"#0093E9",
     backgroundImage:"linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
     padding:'20px 25px',
     display:"flex",
     justifyContent:"center",
     alignItems:"center"
})

const RegisterForm=styled(Box)({
   width:"70%",
   height:"100%",
   border:"2px solid #fff",
   display:'flex',
   flexFlow:'wrap',
});
const RegisterPanel=styled(Box)({
  width:"100%",
   padding:"10px 15px",
   height:"10%",
  //  border:"2px solid red",
   display:'flex',
   alignItems:'center',
   color:"#fff"
});

const Heading=styled(Typography)({
  fontSize:"25px",
  fontWeight:"700"
});
const RegisterFormWrapper=styled(Box)({
  width:"100%",
  padding:"10px 15px",
  height:"75%",
  border:"2px solid #000",
  display:'flex',
  // flexDirection:'column',
  // justifyContent:'space-between',
  // alignItems:'center'
});
const DialogButtonWrapper=styled(Box)({
  width:"100%",
  padding:"15px 15px",
  // border:"2px solid yellow",
  display:"flex",
  justifyContent:"flex-end",
  alignItems:"center",
  gap:"10px"
});
const SaveButton=styled(Button)({
  padding:"10px 25px",
  backgroundColor:"#142683",
  color:'#fff',
  fontWeight:'700',
  '&:hover':{
   backgroundColor:"#0b57d0",
  }
});
const DialogFormContent=styled(Box)({
  width:"30%",
  height:"25%",
  padding:"20px 15px",
  border:"2px solid #000",
  display:'flex',
  justifyContent:"space-between",
  alignItems:'center',
  flexFlow:"wrap"
});
const SubFieldWrapper=styled(Box)({
    width:"50%",
    padding:"10px",
    // border:'2px solid #000',
    display:"flex",
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'flex-start',
    gap:"10px"
});
const SubTypo=styled(Typography)({
   fontSize:"20px",
   fontWeight:'700',
   color:"#fff"
});
const SubInput=styled(InputBase)({
  width:"100%",
  padding:"10px 10px",
  border:"2px solid #e8e8e8",
  borderRadius:"10px"
});
/**----------------------------------------------------------------------- */
const AdminRegisterSection = () => {
  return (
   <Fragment>
     <RegisterWrapper>
       <RegisterForm>
          <RegisterPanel>
            < Heading>
                REGISTER ADMIN PANEL
            </ Heading>
          </RegisterPanel>
          < RegisterFormWrapper>
              <DialogFormContent>
                  <SubTypo>Enter the First Name</SubTypo>
                  <SubInput placeholder='Enter the First Name'/>
              </DialogFormContent>
              <DialogFormContent>
                  <SubTypo>Enter the Last Name</SubTypo>
                  <SubInput placeholder='Enter the Last Name'/>
              </DialogFormContent>
              <DialogFormContent>
                  <SubTypo>Enter the City  Name</SubTypo>
                  <SubInput placeholder='Enter the City Name'/>
              </DialogFormContent>
              <DialogFormContent>
                  <SubTypo>Enter the City  Name</SubTypo>
                  <SubInput placeholder='Enter the City Name'/>
              </DialogFormContent>
          </ RegisterFormWrapper>
          <DialogButtonWrapper>
             <SaveButton>REGISTER</SaveButton>
          </DialogButtonWrapper>
       </RegisterForm>
     </RegisterWrapper>
   </Fragment>
  )
}

export default AdminRegisterSection