'use client'

import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import { UserContext } from "@/components/Provider"
import { useContext, useEffect, useState } from "react";


export default function LoginContribForm() {
  let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;
  const referrer = window.location.hostname;
  const domainName = referrer.includes("localhost")
  ? DOMAIN
  : referrer.replace("www.", "");

  const dataFormValues = {
      step: 5,
      url: '',
  }
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState(dataFormValues);
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
          console.log(res);
          if(res.data.success){
            if(!user) {
              const iframe_url = "https://domaindirectory.com/serviceforms/menu?domain="+domainName+"&email="+res.data.info.email+"&name="+res.data.info.first_name+"&member_id="+res.data.info.userid;
              setUser(res.data.info)
              setData({ ...data, ['url']: iframe_url});
            }
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
		
        {
          message ? (
            <h1>{message}</h1>
          ):
          user?(
            
            <div className="container setup-content">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <iframe id="service-form" data-src="" src={data.url} width="100%" height="720"></iframe>
                    </div>
                </div>
            </div>

          ):<div className="col-loader der text-center mt-5" id="framework-loader">
            <Image src="https://cdn.vnoc.com/loader/Blocks-1s-200px.gif"
              width={200}
              height={200}
              sizes="100vw"
              className='tw-inline'
              alt=""
            />
          </div>
          
        }
		
    </>
  );
}
