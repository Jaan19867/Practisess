"use client"

import { createContext, useContext, useState } from "react"
import Link from "next/link"

export const MyContext = createContext("")

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

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

export const Button = () => {
  const { user } = useContext(MyContext)
  const logoutHandler = () => {
    alert("logout ")
  }

  return user._id ? (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  ) : (
    <Link href={"/login"}>Login</Link>
  )
}

export const TodoButton = ({completed}) => {

  return (
    <>
      <input type="checkbox" 
      checked={completed} 
      // onChange={()=>updateHandler(id)}
      />
      <button className="btn"
      //  onClick={()=>deleteHandler(id)}
       >
        Delete
      </button>
    </>
  )
}
