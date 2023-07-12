import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBoxesPacking, faBoxesStacked, faCoins, faHandHolding, faShare } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import Image from 'next/image';

export default function Step1() {
    return (
        <>
        
            <div className="row justify-content-center">
                <div className="col-md-8 coldiv">
                    <p className="tw-text-2xl my-2">Welcome to Javapoint.com</p>
                    <p className="tw-text-3xl fw-bold"> 👋 Hi!
                    I'm a smart URL asset here trying to increase value through education, commerce and community. How can we help?</p>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="select-1st">
                                <input className="styled-checkbox" name="form1-checkbox" id="styled-checkbox-1" type="checkbox" value="cd1" data-form="offer::inquire" />
                                <label htmlFor="styled-checkbox-1">
                                <FontAwesomeIcon icon={faGlobe}  className='tw-text-3xl'/>
                                <div>Interested in connecting with Javapoint.com</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-2nd">
                                <input className="styled-checkbox" name="form1-checkbox" id="styled-checkbox-2" type="checkbox" value="cd2" data-form="staffing" />
                                <label htmlFor="styled-checkbox-2">
                                <FontAwesomeIcon icon={faBoxesPacking} className='tw-text-3xl'/>
                                <div>Would like to find a job with Javapoint.com</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-3rd">
                                <input className="styled-checkbox" name="form1-checkbox" id="styled-checkbox-3" type="checkbox" value="cd3" data-form="staffing" />
                                <label htmlFor="styled-checkbox-3">
                                <FontAwesomeIcon icon={faBoxesStacked} className='tw-text-3xl'/>
                                <div>Help build Javapoint.com</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-4th">
                                <input className="styled-checkbox" name="form1-checkbox" id="styled-checkbox-4" type="checkbox" value="cd4" data-form="earnctb" />
                                <label htmlFor="styled-checkbox-4">
                                <FontAwesomeIcon icon={faCoins} className='tw-text-3xl'/>
                                <div>Earn CTB or Javapoint.com token</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-5th">
                                <input className="styled-checkbox" name="form1-checkbox" id="styled-checkbox-5" type="checkbox" value="cd5" data-form="partner" />
                                <label htmlFor="styled-checkbox-5">
                                <FontAwesomeIcon icon={faHandHolding} className='tw-text-3xl'/>
                                <div>Interested in partner opps with Javapoint.com</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-6th">
                                <input className="styled-checkbox" name="form1-checkbox" id="styled-checkbox-6" type="checkbox" value="cd6" data-form="earnctb" />
                                <label htmlFor="styled-checkbox-6">
                                <FontAwesomeIcon icon={faShare} className='tw-text-3xl'/>
                                <div>Connect with others</div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-end">
                                <span className="text-danger d-none">Please add your name above!&nbsp;</span>
                                <Link href="#" className="btn btn-dark btn-lg rounded-pill" id="btn-show-name-form">Continue</Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-contrib">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center text-uppercase mt-3">
                                        login with <Link href="#" id="btn-login-contrib" >
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
                </div>
            </div>
       
        </>
    )
}