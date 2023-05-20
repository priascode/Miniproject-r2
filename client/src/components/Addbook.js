import { Button, FormLabel, TextField} from '@mui/material';
import React, { useState } from 'react';
import {Box} from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

const Addbook = () => {
const [inputs, setInputs] = useState({
  name:'',
  author:'',
  description:'',
  price:'',
  image:''
});

const history = useNavigate();
const handleChange = (e) => {
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value,
  }))
};

const sendRequest = async()=> {
  axios.post("http://localhost:8080/books",{
    name:String(inputs.name),
    author:String(inputs.author),
    description:String(inputs.description),
    price:String(inputs.price),
    image:String(inputs.image),
    available:Boolean(checked)
  }).then((res) => res.data);
}

const [checked, setChecked] = useState(false);

const handleSubmit =(e)=>{
  e.preventDefault();
console.log(inputs, checked);
sendRequest().then(()=>history('/books'))
};



  return <form onSubmit={handleSubmit}>
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

    
    <Button variant="contained" type="submit">Addbook</Button>
  </Box>

  </form>
};

export default Addbook
