import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faBoxesPacking, faBoxesStacked, faCoins, faHandHolding, faShare } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import Image from "next/image";


export default function Step1({data, domain, handleSubmit, handleCheckboxChange, handleChange, loginUrl}) {
   
    return (
        <>
        
            <div className="row justify-content-center">
                <div className="col-md-8 coldiv">
                    <p className="tw-text-2xl my-2">Welcome to {domain}</p>
                    <p className="tw-text-3xl fw-bold"> 👋 Hi!
                    I&apos;m a smart URL asset here trying to increase value through education, commerce and community. How can we help?</p>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="select-1st">
                                <input className="styled-checkbox"
                                checked={data.selectedCheckbox === "cd1"}
                                name="form1-checkbox" 
                                type="checkbox" value="cd1" 
                                onChange={handleChange}
                                />
                                <label htmlFor="styled-checkbox-1" onClick={() => handleCheckboxChange("cd1","offer::inquire")}>
                                <FontAwesomeIcon icon={faGlobe}  className="tw-text-3xl"/>
                                <div>Interested in connecting with {domain}</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-2nd">
                                <input className="styled-checkbox" 
                                checked={data.selectedCheckbox === "cd2"}
                                name="form2-checkbox" 
                                type="checkbox" value="cd2"
                                onChange={handleChange} 
                                />
                                <label htmlFor="styled-checkbox-2" onClick={() => handleCheckboxChange("cd2","staffing")}>
                                <FontAwesomeIcon icon={faBoxesPacking} className="tw-text-3xl"/>
                                <div>Would like to find a job with {domain}</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-3rd">
                                <input className="styled-checkbox" name="form3-checkbox" 
                                 checked={data.selectedCheckbox === "cd3"}
                                 type="checkbox" value="cd3"
                                 onChange={handleChange}
                                />
                                <label htmlFor="styled-checkbox-3" onClick={() => handleCheckboxChange("cd3","staffing")}>
                                <FontAwesomeIcon icon={faBoxesStacked} className="tw-text-3xl"/>
                                <div>Help build {domain}</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-4th">
                                <input className="styled-checkbox" name="form4-checkbox"
                                onChange={handleChange} 
                                checked={data.selectedCheckbox === 'cd4'}
                                type="checkbox" value="cd4" />
                                <label htmlFor="styled-checkbox-4" onClick={() => handleCheckboxChange('cd4','earnctb')}>
                                <FontAwesomeIcon icon={faCoins} className='tw-text-3xl'/>
                                <div>Earn CTB or {domain} token</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-5th">
                                <input className="styled-checkbox" name="form5-checkbox" 
                                checked={data.selectedCheckbox === 'cd5'}
                                onChange={handleChange}
                                type="checkbox" value="cd5" data-form="partner" />
                                <label htmlFor="styled-checkbox-5" onClick={() => handleCheckboxChange('cd5','partner')}>
                                <FontAwesomeIcon icon={faHandHolding} className='tw-text-3xl'/>
                                <div>Interested in partner opps with {domain}</div>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="select-6th">
                                <input className="styled-checkbox" name="form6-checkbox" 
                                checked={data.selectedCheckbox === 'cd6'}
                                onChange={handleChange} 
                                type="checkbox" value="cd6" data-form="earnctb" />
                                <label htmlFor="styled-checkbox-6" onClick={() => handleCheckboxChange('cd6','earnctb')}>
                                <FontAwesomeIcon icon={faShare} className='tw-text-3xl'/>
                                <div>Connect with others</div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-end">
                                
                                <Link href="" className="btn btn-dark btn-lg rounded-pill" id="btn-show-name-form" onClick={handleSubmit} >Continue</Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-contrib">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center text-uppercase mt-3">
                                        login with <Link href={loginUrl} id="btn-login-contrib" >
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