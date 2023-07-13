import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function Step4({domain, handleSubmit, prevStep}) {
    return (
        <>
        <div className="row justify-content-center">
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md-2">
                        <div className="text-start">
                            <Link href="" className="btn btn-back" title="Back" onClick={prevStep}><FontAwesomeIcon icon={faArrowLeftLong} className='tw-text-3xl'/></Link>
                        </div>								
                    </div>
                    <div className="col-md-10"></div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-7 coldiv">
                <div className="tw-text-3xl">You’re almost there!</div>
                <div className="tw-text-3xl">Just one more step to set up your account.</div>
            </div>
            <div className="col-md-7 colformbg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="form4-email" className="form-label">Email address</label>
                            <input type="email" className="form-control form-control-lg" id="form4-email" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="form4-password" className="form-label">Password*</label>
                            <input type="password" className="form-control form-control-lg" id="form4-password" placeholder="Create a password" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkbox-term-policy" />
                            <label className="form-check-label" for="flexCheckDefault">
                                I agree to the <Link href="https://domaindirectory.com/policypage/terms?domain=<?=$info['domain']?>" target="_blank">Terms of Service</Link> 
                                and <Link href="https://domaindirectory.com/policypage/privacypolicy?domain=<?=$info['domain']?>" target="_blank">Privacy Policy</Link>
                            </label>
                            <div id="terms-policy-error" class="d-none">
                                <span className="text-danger">Do you agree to the terms and policy?</span>
                            </div>
                        </div>
                    </div>		
                    <div className="col-md-12 mt-3">
                        <div className="d-grid gap-2">
                            <Link href="" className="btn btn-dark btn-lg btn-block rounded-pill" id="activate-5th-container" onClick={handleSubmit}>Join {domain}</Link>
                        </div>
                    </div>											
                </div>
            </div>
            <div className="col-md-7 col-contrib">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center text-uppercase mt-3">
                            Or login with
                            <Link href="#" id="btn-login-contrib" >
                                        <Image
                                            src="https://cdn.vnoc.com/logos/logo-new-contrib-06.png"
                                            width={200}
                                            height={200}
                                            sizes="100vw"
                                            className='tw-inline'
                                            alt=""
                                        />		
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}