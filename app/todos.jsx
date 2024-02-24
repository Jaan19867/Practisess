const { checkAuth } = require("./utils/features")

import { cookies } from "next/headers"
import { TodoItem } from "@/components/ServerComponents"
import { decode } from "jsonwebtoken"
// import { useEffect } from "react/cjs/react.production.min"

const fetchTodo = async (token) => {
  // useEffect(()=>{

  // },[])
  try {
    const res = await fetch("http://localhost:3000/api/task/mytask", {
      cache: "no-cache",
      headers: {
        cookie: `token=${token}`,
      },
    })
    console.log("hi")
    const data = await res.json()
    console.log(data )
    console.log("after data ")
    // const user = await checkAuth()
    const our_user = decode(token, process.env.JWT_SECRET)
    const userId = our_user.user;

    console.log(our_user)
    // {user && console.log(user)}
    const task = data.tasks.map((t) => {
    if(t.user==userId){ return t}
    })
    console.log(task)
    return task
  } catch (error) {
    console.log(error)
    return []
  }
}

const Todos = async () => {
  console.log(cookies + "this is about cookies inside the Todos ")
  const token = cookies().get("token")?.value
  console.log(token + " inside the todos and this is value of token ")
  const UsersTask = await fetchTodo(token)

  return (
    <section className="todosContainer">
      {UsersTask?.map((i) => (
        <TodoItem
          title={i.title}
          description={i.description}
          id={i._id}
          key={i._id}
          completed={i.isCompleted}
        />
      ))}
    </section>
  )
}

export default Todos
