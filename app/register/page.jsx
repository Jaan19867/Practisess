"use client"
import { redirect } from "next/navigation"
import React, { useContext,useEffect,useState } from "react"
import { toast } from "react-hot-toast"
import Link from "next/link"
import { MyContext } from "@/components/Clients"



const Page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const { user, setUser } = useContext(MyContext)

  const registerHandle = async (e) => {
  
    e.preventDefault()
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      const data = await res.json()
      if (!data.success) return toast.error(data.message);
      setUser(data.user)
      toast.success(data.message)
      console.log(user._id + " inside the page in register after success ")
    } catch (error) {
      return toast.error(error)
    }
  }
  useEffect(()=>{
if (user._id) return redirect("/")
  },[user._id]);


  return (
    <div className="login">
      <section>
        <form onSubmit={registerHandle}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter your Name "
          />
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
          <button type="submit">Sign Up </button>
          <p>OR</p>
          <Link href={"/login"}>Already Registered? Login here</Link>
        </form>
      </section>
    </div>
  )
}

export default Page
