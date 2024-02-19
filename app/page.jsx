



import React from 'react'
import Form from "./addTodoForm"
import { TodoItem } from '@/components/ServerComponents'

const page = () => {
  return (
  <div className="container">
<Form/>
<section className='todoContainer'></section>
<TodoItem 
title={"Sample Task "}
 description={"Play hard "}
 completed={true}
 id="sample"
 />

  </div>
  )
}

export default page
