import React from 'react'
import Link from "next/link"

import { LogOutButton, UsersButton } from '@/components/Clients'

const header = () => {
  return (
    <div className='header'>
      <div>
        <h2>Todo </h2>
      </div>
      <article>

<Link href={"/"}>Home</Link>
<Link href={"/profile"}> Profile</Link>

<LogOutButton/>


      </article>
    </div>
  )
}

export default header
