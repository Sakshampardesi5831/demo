import React, { Fragment, useEffect, useState } from 'react'
import { Box,
    Typography,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,Button,Dialog, InputBase} from '@mui/material'
import {AddOutlined,EditOutlined,Delete} from '@mui/icons-material'
import instance from '@/axiosConfig';
import {useDispatch,useSelector} from 'react-redux'
import { asyncCurrentAdmin } from '@/store/Action/AdminAction';
/**-------------------------------------------------------------------- */
const AdminWrapper=styled(Box)({
  width:"100%",
  height:"calc(100vh - 80px)",
  border:"2px solid #000",
  padding:"20px 15px"
});
const AdminButtonWrapper=styled(Box)({
  width:"100%",
//   height:"10%",
  padding:"15px 10px",
//   border:"2px SOLID RED",
  display:"flex",
  justifyContent:"flex-end",
  alignItems:"center"
});
const AdminButton=styled(Button)({
  padding:"10px 25px",
  backgroundColor:"#142683",
  color:"#fff",
  display:"flex",
  gap:"10px",
  '&:hover':{
    backgroundColor:"#0b57d0",
   }
});
const AdminTable =styled(Button)({
  width:"100%",
//   height:"90%",
  padding:"20px 25px",
//   border:"2px solid #000",
  overflow:"hidden",
  overflowY:"auto",
  marginTop:"15px"
});
/**--------------------------------------------------------------------- */
const dialogStyler = {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "60%",
    height: "100vh",
    borderRadius: "15px",
    padding: "20px 15px",
};
const DialogWrapper=styled(Box)({
  width:"100%",
  height:"100%",
  // border:"2px solid #000",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between",
  alignItems:'center'
})
const DialogHeadingWrapper=styled(Box)({
   width:"100%",
   padding:"10px 15px",
   height:"10%",
  //  border:"2px solid red",
   display:'flex',
   alignItems:'center'
   
});
const Heading=styled(Typography)({
  fontSize:"25px",
  fontWeight:"700"
});
//FORM
const DialogFormWrapper=styled(Box)({
  width:"100%",
  padding:"10px 15px",
  height:"75%",
  // border:"2px solid #000",
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'center'
});
const DialogFormContent=styled(Box)({
  width:"100%",
  // padding:"20px 15px",
  // border:"2px solid #000",
  display:'flex',
  justifyContent:"space-between",
  alignItems:'center'
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
   opacity:"0.7"
});
const SubInput=styled(InputBase)({
  width:"100%",
  padding:"10px 10px",
  border:"2px solid #e8e8e8",
  borderRadius:"10px"
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
const CancelButton=styled(Button)({
  padding:'10px 20px',
  border:' 2px solid  #e8e8e8',
  borderRadius:"10px",
  color:'#000',
  opacity:'0.8'
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
/**-------------------------------------------------------------------- */
const AdminUserTable = () => {
const [AddUserDialog,setAddUserDialog]=useState(false);
const [EditOpenDialog,setEditOpenDialog]=useState(false);
const [firstName,setFirstName]=useState("");
const [lastName,setLastName]=useState("");
const [city,setCity]=useState("");
const [contact,setContact]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [selectGender,setSelectGender]=useState("")
/**-------------------------------------------------------- */
const [updatedId,setUpdatedId]=useState("");
const [updatedFirstName,setUpdatedFirstName]=useState("")
const [updatedLastName,setUpdatedLastName]=useState("");
const [updatedCity,setUpdatedCity]=useState("");
const [updatedContact,setUpdatedContact]=useState("");
const [updatedEmail,setUpdatedEmail]=useState("");
const [updatedPassword,setUpdatedPassword]=useState("");
const [updatedGender,setUpdatedGender]=useState("");
/**--------------------------------------------------------- */
const dispatch=useDispatch();
const {admin} =useSelector((state)=>state.AdminReducer);
const handleChange=(e)=>{
  const Gender=e.target.value;
  setSelectGender(Gender);
};
const handleUpdateChange=(e)=>{
  const Gender=e.target.value;
  setUpdatedGender(Gender);
}
const handleAdminCreatedUser= async ()=>{
    let userData={
      firstname:firstName,
      lastname:lastName,
      city:city,
      contact:contact,
      gender:selectGender,
      email:email,
      password:password,
    }
    try {
       const {data}=await instance.post("/admin/addUser",userData);
       setFirstName("");
       setLastName("");
       setCity("");
       setContact("");
       setSelectGender("");
       setEmail("");
       setPassword("");
       dispatch(asyncCurrentAdmin());
       setAddUserDialog(false);
    } catch (error) {
       console.log(error);
    }
}
const handleSingleValue=(id,firstname,email,gender,contact,city)=>{
   setUpdatedId(id);
   setUpdatedFirstName(firstname);
   setUpdatedEmail(email);
   setUpdatedGender(gender);
   setUpdatedContact(contact);
   setUpdatedCity(city);
   setEditOpenDialog(true);
}
const handleUpdateValues= async ()=>{
  let userData={
    firstname:updatedFirstName,
    city:updatedCity,
    contact:updatedContact,
    gender:updatedGender,
    email:updatedEmail,
  }
  try {
    const {data}=await instance.post(`/admin/edituser/${updatedId}`,userData);
    window.alert(`${data.message}`);
    setUpdatedId("");
    setUpdatedFirstName("");
    setUpdatedEmail("");
    setUpdatedGender("");
    setUpdatedContact("");
    setUpdatedCity("");
    dispatch(asyncCurrentAdmin());
    setEditOpenDialog(false);
  } catch (error) {
    console.log(error);
  }
}
const handleDeleteAccount= async (id)=>{
    const tempValue=id.toString()
    try {
      const {data}=await instance.post(`/admin/delete/${tempValue}`);
      window.alert(`${data.message}`);
      dispatch(asyncCurrentAdmin());
    } catch (error) {
      console.log(error);
    }
}
useEffect(()=>{
  dispatch(asyncCurrentAdmin());
},[])
/**--------------------------------------------------------- */
  return (
    <Fragment>
       <AdminWrapper>
         <AdminButtonWrapper>
            <AdminButton onClick={()=>setAddUserDialog(true)}><AddOutlined/>Add User</AdminButton>
         </AdminButtonWrapper>
         <AdminTable>
         <TableContainer component={Paper}>
             <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">EDIT/DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admin?.createdusers.length===0 ?"No User is Added":admin?.createdusers.map((dets)=>(
               <TableRow
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               key={dets._id}
             >
               <TableCell component="th" scope="row">
                  {dets.firstname}
               </TableCell>
               <TableCell align="center">{dets.city}</TableCell>
               <TableCell align="center">{dets.email}</TableCell>
               <TableCell align="center">{dets.gender}</TableCell>
               <TableCell align="center">{dets.contact}</TableCell>
               <TableCell align="center"><EditOutlined onClick={()=>handleSingleValue(dets._id,dets.firstname,dets.email,dets.gender,dets.contact,dets.city)}style={{color:"green",cursor:"pointer"}}/> &nbsp;<Delete onClick={()=>handleDeleteAccount(dets._id)} style={{color:"red",cursor:"pointer"}}/></TableCell>
              </TableRow>
          ))}
            
        </TableBody>
             </Table>
         </TableContainer>
         </AdminTable>
       </AdminWrapper>
       <Dialog open={AddUserDialog} PaperProps={{sx:dialogStyler}}>
          <DialogWrapper>
             <DialogHeadingWrapper><Heading>Create Users</Heading></DialogHeadingWrapper>
             <DialogFormWrapper>
                <DialogFormContent>
                   <SubFieldWrapper>
                      <SubTypo>First Name</SubTypo>
                      <SubInput onChange={(e)=>setFirstName(e.target.value)} value={firstName} placeholder='Enter the first name' />
                   </SubFieldWrapper>
                   <SubFieldWrapper>
                      <SubTypo>Last Name</SubTypo>
                      <SubInput onChange={(e)=>setLastName(e.target.value)} value={lastName} placeholder='Enter the last name' />
                   </SubFieldWrapper>
                </DialogFormContent>
                <DialogFormContent>
                   <SubFieldWrapper>
                      <SubTypo>City Name</SubTypo>
                      <SubInput onChange={(e)=>setCity(e.target.value)} value={city} placeholder='Enter the City name' />
                   </SubFieldWrapper>
                   <SubFieldWrapper>
                      <SubTypo>Contact Number</SubTypo>
                      <SubInput onChange={(e)=>setContact(e.target.value)} value={contact} placeholder='Enter the Contact Number'/>
                   </SubFieldWrapper>
                </DialogFormContent>
                <DialogFormContent>
                   <SubFieldWrapper>
                      <SubTypo> Select Gender</SubTypo>
                      <select name="" id="dialogSelectBox" value={selectGender} onChange={handleChange} >
                          <option value="">Select the Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                      </select>
                   </SubFieldWrapper>
                   <SubFieldWrapper>
                      <SubTypo>Email Name</SubTypo>
                      <SubInput onChange={(e)=>setEmail(e.target.value)} value={email} type='email'  placeholder='Enter the Email Address' />
                   </SubFieldWrapper>
                </DialogFormContent>
                <DialogFormContent style={{flexDirection:"column",justifyContent:'center',alignItems:"flex-start",padding:"10px 15px"}}>
                  <SubTypo>Enter Password</SubTypo>
                  <SubInput onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='Enter Password'/>
                </DialogFormContent>
             </DialogFormWrapper>
             <DialogButtonWrapper>
               <CancelButton onClick={()=>setAddUserDialog(false)}>Cancel</CancelButton>
               <SaveButton onClick={()=>handleAdminCreatedUser()}><AddOutlined/>Create Users</SaveButton>
             </DialogButtonWrapper>
          </DialogWrapper>
       </Dialog>
       <Dialog  open={EditOpenDialog} PaperProps={{sx:dialogStyler}} >
             <DialogWrapper>
                <DialogHeadingWrapper>
                     <Heading>Update Users</Heading>
                </DialogHeadingWrapper>
                <DialogFormWrapper style={{justifyContent:"space-around"}} >
                   <DialogFormContent>
                      <SubFieldWrapper>
                          <SubTypo>Enter the Name</SubTypo>
                          <SubInput onChange={(e)=>setUpdatedFirstName(e.target.value)} value={updatedFirstName} placeholder='Update the Name'  />
                      </SubFieldWrapper>
                      <SubFieldWrapper>
                        <SubTypo>Enter the City</SubTypo>
                          <SubInput onChange={(e)=>setUpdatedCity(e.target.value)} value={updatedCity} placeholder='Update the City Values' />
                       </SubFieldWrapper>
                   </DialogFormContent>
                   <DialogFormContent>
                      <SubFieldWrapper>
                          <SubTypo>Enter the Contact</SubTypo>
                          <SubInput onChange={(e)=>setUpdatedContact(e.target.value)} value={updatedContact} placeholder='Update the Contact'  />
                      </SubFieldWrapper>
                      <SubFieldWrapper>
                        <SubTypo>Select the Gender</SubTypo>
                        <select name="" id="dialogSelectBox" value={updatedGender} onChange={handleUpdateChange}>
                          <option value="">Select the Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                      </select>
                       </SubFieldWrapper>
                   </DialogFormContent>
                   <DialogFormContent style={{flexDirection:"column",justifyContent:'center',alignItems:"flex-start",padding:"10px 15px"}} >
                    <SubTypo>Enter the Email</SubTypo>
                    <SubInput onChange={(e)=>setUpdatedEmail(e.target.value)} value={updatedEmail} placeholder='Update the Email'/>
                   </DialogFormContent>
                </DialogFormWrapper>
                <DialogButtonWrapper>
                    <CancelButton onClick={()=>setEditOpenDialog(false)}>Cancel</CancelButton>
                    <SaveButton onClick={()=>handleUpdateValues()}>Update Details</SaveButton>
                </DialogButtonWrapper>
             </DialogWrapper>
       </Dialog>
    </Fragment>
  )
}

export default AdminUserTable