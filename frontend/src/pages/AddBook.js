import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [Data,setData]=useState({
    bookname:"",
    description:"",
    author:"",
    image:"",
    price:""
  })

  const change=(e)=>{
    const{name,value}=e.target;
    setData({...Data,[name]:value});
  };

  const submit=async(e)=>{
    e.preventDefault();
    await axios
    .post("http://localhost:3000/api/v1/add",Data)
    .then((res)=>alert(res.data.message));

    setData({
      bookname:"",
      description:"",
      author:"",
      image:"",
      price:""
    })
  }
  console.log(Data);
  return (
    <div className='bg-dark d-flex justify-contain-center alifn-items-center' style={{minHeight:"91.5vh"}}>

    <div className='container p-4'>

   <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Book Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter book name" name='bookname' onChange={change} value={Data.bookname}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Author</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the Author name" name='author' onChange={change} value={Data.author}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">description</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter book description" name='description' onChange={change} value={Data.description}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Image</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the url of the image" name='image' onChange={change} value={Data.image}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label text-white">Price</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter the price" name='price' onChange={change} value={Data.price}/>
</div>

<button className='btn btn-success' onClick={submit}>Submit</button>

    </div>
    </div>
  )
}

export default AddBook;