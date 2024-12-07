"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask]= useState([])

  const submitHandler = (e) => {
    e.preventDefault()   //yay aik method hay jo form ko submit honay say rok layta hay
    setMainTask([...mainTask, {title,desc}]);
    settitle("");
    setdesc("");
  }; 

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1);
      setMainTask(copytask)
    
  }

  let renderTask = <h2>No task Available</h2>;
if(mainTask.length>0){
   renderTask = mainTask.map((t,i) =>{
    return (
      <li key={i} className='flex items-center justify-between bg-white p-4 rounded-lg shadow-md'>
      <div className='w-2/3'>
        <h5 className='text-lg font-bold text-gray-800'>{t.title}</h5>
        <h6 className='text-gray-600'>{t.desc}</h6>
      </div>
      <button
        onClick={() => deleteHandler(i)}
        className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition-all'
      >
        Delete
      </button>
    </li>
    
    );
  });
}
  return (
   <>
   <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-5 text-5xl font-bold text-center shadow-lg'>
  Ayat's Todo-List
</h1>

<form onSubmit={submitHandler} className="flex flex-wrap justify-center gap-4 p-4">
  <input
    type='text'
    className='border-2 border-gray-400 rounded-lg text-lg px-4 py-2 w-80 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
    placeholder='Enter Your Title'
    value={title}
    onChange={(e) => settitle(e.target.value)}
  />
  <input
    type='text'
    className='border-2 border-gray-400 rounded-lg text-lg px-4 py-2 w-80 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
    placeholder='Enter description here'
    value={desc}
    onChange={(e) => setdesc(e.target.value)}
  />
  <button
    className='bg-indigo-600 text-white px-6 py-3 text-lg font-bold rounded-lg shadow-md hover:bg-indigo-500 transition-all'
  >
    Add Task
  </button>
</form>

<hr className="my-4 border-gray-300" />

<div className='p-5 bg-gray-100 rounded-lg shadow'>
  <ul className="space-y-4">{renderTask}</ul>
</div>

   
   </>

  )
}


export default page
