import Image from 'next/image'
import Link from "next/link";

export default function Logo({domain,logo}) {
  if(logo!=null && logo!=''){
    return (
        
        <Image 
              src={logo}
              height={150}
              width={150}
              alt=""
        />
    )
  }else{
    return(
        <Link  href="/" className="oh-logo">
                <p className="tw-text-3xl fw-bold">{domain}</p>
        </Link>
    )
  }
}