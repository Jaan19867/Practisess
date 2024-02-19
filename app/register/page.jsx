"use client"
import React, { useContext, useState } from "react"
// import { MyContext } from "../components/Client"
import Link from "next/link"

// const metadata = {
//   title: "Login",
//   description: "Login  Page ",
// }

const Page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name,setName]=useState("");
  //   const { user, setUser } = useContext(MyContext)
  return (
    <div className="login">
      <section>
        <form action="">
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
          <Link href={"/login"}>Already Register Login here </Link>
        </form>
      </section>
    </div>
  )
}

export default Page
