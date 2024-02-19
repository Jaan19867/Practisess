
"use client"
import React from 'react'

const addTodoForm = () => {
  return (
    <div className="login">
      <section>
        <form action="">
          <input
            //   onChange={(e) => setEmail(e.target.value)}
            //   value={email}
            type="text"
            placeholder="Task Title "
          />
          <input
            //   onChange={(e) => setPassword(e.target.value)}
            //   value={password}
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
