"use client"
import React, { useContext, useEffect, useState } from "react"
// import { MyContext } from "../components/Client"
import Link from "next/link"
import { toast } from "react-hot-toast"

import { MyContext } from "@/components/Clients"
// import { useRouter } from "next/navigation"
import { redirect } from "next/navigation"

const Page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user, setUser } = useContext(MyContext)

  //  const router = useRouter()

  const loginHandler = async (e) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json()
      if (!data.success) {
        return toast.error(data.message)
      }
      setUser(data.user)
      toast.success(data.message)
    } catch (error) {
      return toast.error(error)
    }
  }

  useEffect(() => {
    if (user._id) return redirect("/")
  }, [user._id])
  return (
    <div className="login">
      <section>
        <form onSubmit={loginHandler}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password "
          />
          <button type="submit">Login</button>
          <p>OR</p>
          <Link href={"/register"}>New User</Link>
        </form>
      </section>
    </div>
  )
}

export default Page
