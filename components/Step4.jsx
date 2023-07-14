import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import ErrorBlock from './ErrorBlock';

export default function Step4({domain, handleSubmit, prevStep, handleCheckboxChangeTerms, err, handleChange, emailExist}) {
    const terms_link = 'https://domaindirectory.com/policypage/terms?domain='+domain;
    const privacy_link = 'https://domaindirectory.com/policypage/privacypolicy?domain='+domain;
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
                            <input type="email" name="email" onChange={handleChange} className="form-control form-control-lg" id="form4-email" placeholder="Enter your email address" />
                            {err.validate? (<ErrorBlock msg={err.emailError} />): null}
                            {emailExist? (<ErrorBlock msg={emailExist} />): null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="form4-password" className="form-label">Password*</label>
                            <input type="password" name="password" onChange={handleChange} className="form-control form-control-lg" id="form4-password" placeholder="Create a password" />
                            {err.validate? (<ErrorBlock msg={err.passwordError} />): null}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkbox-term-policy" onClick={() => handleCheckboxChangeTerms('checked')}/>
                            <label className="form-check-label" for="flexCheckDefault">
                                I agree to the <Link href={terms_link} target="_blank" className="tw-text-blue-500">Terms of Service</Link>
                                &nbsp; and <Link href={privacy_link} target="_blank" className="tw-text-blue-500">Privacy Policy</Link>
                            </label>
                            <div id="terms-policy-error">
                            {err.validate? (<ErrorBlock msg={err.termsCheckedError} />): null}
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