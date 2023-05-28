import { Button } from '@mui/material';
import React from 'react';
import './Book.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = (props) => {
  const history = useNavigate();
    const {_id,name, author, description, image} = props.book;
    const deleteHandler=async()=>{
     await axios.delete(`http://localhost:8080/books/${_id}`)
     .then((res)=>res.data)
     .then(()=>history("/"))
     .then(()=>history("/books"))
    }

  return (
    <div className='card' >
      <div className='options'>
        <Button ><i className='fa fa-heart'></i></Button>
        <Button LinkComponent={Link} to={`/books/${_id}`}><i className='fa fa-edit'></i></Button>
        <Button onClick={deleteHandler} ><i className='fa fa-trash'></i></Button>
      </div>
   
      <img src={image} alt={name}></img>
      <h3>{name}</h3>
      <article>By {author}</article>
      <p>{description}</p>
      
   
      <Button className='acart' >Add To Cart</Button>
      
    </div>
  )
}

export default Book;
