import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {Box} from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormLabel, TextField} from '@mui/material';

const BookDetails = () => {

const history = useNavigate();
const [inputs, setInputs] = useState(); 
const[checked, setChecked] = useState(false);
  const id = useParams().id;
  useEffect(()=> {
    const fetchHandler = async()=> {
      await axios.get(`http://localhost:8080/books/${id}`).then((res)=>res.data).then(data=>setInputs(data.book))
    };
    fetchHandler();
  },[id]);
const sendRequest =async()=>{
  await axios.put(`http://localhost:8080/books/${id}`,
 {
  name:String(inputs.name),
  author:String(inputs.author),
  description:String(inputs.description),
  price:String(inputs.price),
  image:String(inputs.image),
  available:Boolean(checked)
 } ).then((res)=>res.data)
}

  const handleSubmit =(e)=>{
    e.preventDefault();
    sendRequest().then(()=>history("/books"))

  }
const handleChange=(e)=>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value,
  }))

}

return (
    <div>
   {inputs && ( <form onSubmit={handleSubmit}>
     <Box display="block" flexdirection="column" justifyContent={"center"} maxWidth={700} alignContent={"center"} alignSelf={"center"} marginLeft={"auto"} marginRight={"auto"} marginTop={10}  >
    <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth="outlined" name='name' />
    <FormLabel>Author</FormLabel>
    <TextField  value={inputs.author} onChange={handleChange} margin='normal' fullWidth="outlined" name='author' />
    <FormLabel>description</FormLabel>
    <TextField   value={inputs.description} onChange={handleChange}  margin='normal' fullWidth="outlined" name='description' />
    <FormLabel>Price</FormLabel>
    <TextField  value={inputs.price} onChange={handleChange} type="number"  margin='normal' fullWidth="outlined" name='price' />
    <FormLabel>ImageURL</FormLabel>
    <TextField   value={inputs.image} onChange={handleChange} margin='normal' fullWidth="outlined" name='image' />
    <FormControlLabel required control={<Checkbox  checked ={checked} onChange={()=>setChecked(!checked)}  />} label="Available" />

    
    <Button variant="contained" 
            type="submit">Updatebook</Button>
  </Box>

  </form>)}
    </div>
  )
}

export default BookDetails
