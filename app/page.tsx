import Image from 'next/image';
import Link from "next/link";
import Containerform from '../components/Containerform';

export default function Home() {
  return (
    <>
      <div className="onboardingHeader">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center col-top">
              <div className="oh-innner">
                <Link  href="/" className="oh-logo">
                <p className="tw-text-3xl fw-bold">Javapoint.com</p>
                </Link>
                <div className="oh-right">
                  <div className="contrib-users-avatar">
                  <Image
                    src="https://i0.wp.com/blog.contrib.com/wp-content/uploads/2022/06/jackripper.jpg"
                    width={0}
                    height={0}
                    className="img-fluid tw-w-full"
                    sizes="100vw"
                    alt=""
                  />								
                  </div>
                  <div className="contrib-users-avatar">
                    <Image
                      src="https://www.contrib.com/uploads/profile/1672908033RWZ0J.jpg"
                      width={0}
                      height={0}
                      className="img-fluid tw-w-full"
                      sizes="100vw"
                      alt=""
                    />		
                    							
                  </div>
                  <div className="contrib-users-avatar">
                    <Image
                        src="https://www.contrib.com/uploads/profile/1673889003CZibx.jpg"
                        width={0}
                        height={0}
                        className="img-fluid tw-w-full"
                        sizes="100vw"
                        alt=""
                      />							
                  </div>
                </div>
                <span className="badge text-bg-primary rounded-pill">100 members</span>
              </div>
            </div>
          </div>
        </div>			
      </div>
      <div className="onboardingSection">
         
        <Containerform />
          
      </div>
    </>
  )
}
