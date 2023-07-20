import { getDomain } from '@/lib/data'
import Container from './Container';


export default async function LoginContribForm() {
 
  const domain = getDomain();
  
  return (
    <>   
       <Container domain={domain} />
         
    </>
  );
}
