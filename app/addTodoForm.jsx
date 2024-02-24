"use client"
import React, { useContext, useState } from "react"
import {toast} from "react-hot-toast"
import { redirect, useRouter } from "next/navigation";
import { MyContext } from "@/components/Clients";


const addTodoForm = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { user } = useContext(MyContext)

const router = useRouter();

    const submitHandler=async(e)=>{

e.preventDefault();
try{
  const res=await fetch("/api/task/newtask",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      title,
      description,
    }),
  });
  const data=await res.json();
  if(!data.success){ return toast.error(data.message)};
  toast.success(data.message);
  router.refresh();
  setTitle("")
  setDescription("");

  
}
catch(error){
  return toast.error(error);
}


    }
    if(!user._id) return redirect("/login")
  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input value={title} 
          onChange={(e)=>{ setTitle(e.target.value)}}
          type="text"
           placeholder="Task Title " />
          <input
           value={description}
           onChange={(e)=>{ setDescription(e.target.value)}}
            type="text"
            placeholder="Task description"
          />
          <button type="submit">Add Task </button>
        </form>
      </section>
    </div>
  )
}

export default addTodoForm
