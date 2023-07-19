'use client'

import { UserContext } from "@/components/Provider"
import { useContext } from "react";

function page() {
  const { user } = useContext(UserContext);
  
  return (
    <>
      <div className="">
        <h1>User:</h1>
        <p>{user.email}</p>
      </div>
    </>
  )
}

export default page