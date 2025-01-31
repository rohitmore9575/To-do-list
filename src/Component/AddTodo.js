import React from 'react'
import {useState} from 'react';

const AddTodo = (props) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{

        e.preventDefault();
        if(!title || !desc){
            alert("title or description cant be blank");

        }
       else{ props.addTodo(title,desc);

       setTitle("");
       setDesc("");

       }

    }
  return (
    <div className="container my-3" >
        <h3 className="">Add a Todo </h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label Forhtml="exampleInputEmail1" className="form-label">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label Forhtml="desc" className="form-label">Todo Description</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
  </div>

  <button type="submit" className="btn btn-success btn-sm">Submit</button>
</form>
    </div>
  )
}

export default AddTodo
