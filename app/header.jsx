import React from 'react'
import Link from "next/link"

import { Button } from '@/components/Clients'

const header = () => {
  return (
    <div className='header'>
      <div>
        <h2>Todo </h2>
      </div>
      <article>

<Link href={"/"}>Home</Link>
<Link href={"/profile"}> Profile</Link>

<Button/>

      </article>
    </div>
  )
}

export default header
