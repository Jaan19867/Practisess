"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Link from "next/link"
import { toast } from "react-hot-toast"
import { Task } from "@/app/models/Task"

export const MyContext = createContext("")

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user)
        }
      })
  }, [])

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export const UsersButton = () => {
  const { user } = useContext(MyContext)

  console.log(user.name + "inside the users button ")

  return (
    <>
      <h1>Your Username: {user.name}</h1>
      <h2>Your email:{user.email}</h2>
    </>
  )
}

export const LogOutButton = () => {
  const { user, setUser } = useContext(MyContext)
  const logoutHandler = async () => {
    try {
      const res = await fetch("/api/auth/logout")
      const data = await res.json()
      if (!data.success) {
        toast.error(data.message)
      }
      setUser({})
      toast.success(data.message)
    } catch (error) {
      return toast.error(error)
    }
  }

  return user._id ? (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  ) : (
    <Link href={"/login"}>Login</Link>
  )
}

export const TodoButton = ({ completed, id }) => {
  const deleteHandler = async (id) => {
  
    try {
      const res = await fetch(`http://localhost:3000/api/task/${id}/`, {
        method: "DELETE",
      })
      const data = await res.json()
      if (!data.sucess) {
        return toast.error(data.message)
      }
      toast.success(data.message);
      Task.save();
    } catch (error) {
      return toast.error(error)
    }
  }

  const updateHandler = async() => {
   
    try {
      const res = await fetch(`http://localhost:3000/api/task/${id}/`, {
        method: "PUT",
      })
      const data = await res.json()
      if (!data.sucess) {
        return toast.error(data.message)
      }
      toast.success(data.message)
       Task.save()
    } catch (error) {
      return toast.error(error)
    }
  }

  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => updateHandler(id)}
      />
      <button className="btn" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </>
  )
}
