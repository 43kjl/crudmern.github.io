import React from 'react';
import"./Home.css";
import image  from "../photo (3).jpg";
import {Link} from "react-router-dom";
const Home = () => {
  return (
   <div className='Home-Page bg-dark text-white container-fluid d-flex justify-content-center  align-items-center'>
    <div className='row-container d-flex justify-content-center  align-items-start flex-row'>
     <div className='col-lg-6  d-flex justify-content-center  align-items-start flex-column' 
     style={{height:"91.5vh"}}>
        <h2 style={{fontSize:"80px"}}>BOOK STORE</h2>
        <h3 style={{fontSize:"50px"}}> FOR YOU</h3>
        <p  className="mb-0" style={{color:"silver"}}>BOOK STORE FOR YOU</p>
        <Link className='view-book my-3' to='/books'>
        View Books</Link>
     </div>
     <div className='col-lg-6  d-flex justify-content-center  align-items-end flex-column' 
     style={{height:"91.5vh"}}>
        <img className='img-fluid homeimg' 
      src={image} alt= '/' />
     </div>

    </div>

    </div>

  )
};

export default Home