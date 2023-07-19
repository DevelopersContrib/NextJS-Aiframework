'use client'

import { useSearchParams } from 'next/navigation'
import { UserContext } from "@/components/Provider"
import { useContext, useEffect, useState } from "react";
import Link from 'next/link';

export default function Form() {
  const domain = 'dns.org'
  const { user, setUser } = useContext(UserContext);
	const searchParams = useSearchParams() 
  const code = searchParams.get('code')
  const [message, setMessage] = useState(false);

	useEffect(() => {
		
    if(code){
      async function fetchData() {
        const response = await fetch("/api/account", {
          method: "POST",
          body: JSON.stringify({code:code}),
        });

        if (response.ok) {
          const res = await response.json()
          
          if(res.data.success){
            if(!user) setUser(res.data.info)
          }else{
            setMessage(res.data.message);
          }
        }else{
          alert('An error occurred')
        }
      }
      fetchData();
    }
  }, []);

  return (
    <>
			<section>
        <Link href="/">Home</Link>
        {
          message ? (
            <h1>{message}</h1>
          ):
          user?(
            <div className="py-8 px-16">
              <h1 className="text-xl text-gray-600 my-4">Connect with {domain} using the options below {user.first_name}</h1>
            </div>
          ):<h1>Loading...</h1>
          
        }
			</section>
    </>
  );
}
