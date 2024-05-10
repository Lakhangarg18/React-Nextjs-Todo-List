"use client";
// import { isAbsoluteUrl } from 'next/dist/shared/lib/utils';
import React, { useState } from 'react'


const page = () => {
  let renderTask=<h1>No New Task Added.</h1>
  const [title,setTitle]=useState("");
  const [about,setAbout]=useState("");
  const [mainTask,setMainTask]= useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setMainTask([...mainTask,{title,about}]);
    
    setTitle("");
    setAbout("");

    
  }
  const deleteHandler=(i)=>{
   const copyTask=[...mainTask];
   copyTask.splice(i,1);
   setMainTask(copyTask)
  
  }
  if(mainTask.length>0){
    renderTask=mainTask.map((e,i)=>{
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex itmes-center justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{e.title}</h5>
            <h6 className='text-lg  font-semibold'>{e.about}</h6>
          </div>
          <button onClick={()=>{deleteHandler(i)}

          } className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete Task</button>
        </li>
      )
      
    })

  }
  
  
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl text-center'>Lakhan's Todo List</h1>
      <form onSubmit={handleSubmit}>
       <input type="text" className=' text-2xl border-solid border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter your task' value={title}  onChange={(e)=>{setTitle(e.target.value)}} />
       <input type="text" className=' text-2xl border-solid border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter Description Here.' value={about}  onChange={(e)=>{setAbout(e.target.value)}} />
       <button className='bg-black text-white px-4 py-3 m-5 text-2xl font-blod rounded'>Add Task</button>

      </form>
      <hr/>
      <div className='bg-slate-200 p-7'>
        <ul>{renderTask}</ul>
      </div>
      


    </>
  
  )
}
// 

export default page
