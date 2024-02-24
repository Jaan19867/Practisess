



import React from 'react'
import Form from "./addTodoForm"
import { TodoItem } from '@/components/ServerComponents'
import dotenv from "dotenv"
import { UsersButton } from '@/components/Clients'
import Todos from './todos'
dotenv.config({ path: ".env.local" })
const page = () => {
  return (
    <>
      <div className="container">
      <UsersButton />
        <Form />
        <section className="todoContainer"></section>
       
        <Todos/>
      </div>
    </>
  )
}

export default page
