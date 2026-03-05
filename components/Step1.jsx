import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faBoxesPacking, faBoxesStacked, faCoins, faHandHolding, faShare } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import Image from "next/image";


export default function Step1({data, domain, handleSubmit, handleCheckboxChange, handleChange, loginUrl}) {
   
    return (
        <>
            <div className="row justify-content-center">
                {/* Hero block */}
                <div className="col-12 col-lg-10 col-xl-8">
                    <div className="step1-hero">
                        <span className="step1-hero-badge">Welcome to {domain}</span>
                        <h1 className="step1-hero-title">
                            Hi! I&apos;m a smart URL asset here to add value through education, commerce and community.
                        </h1>
                        <p className="step1-hero-sub">How can we help you today? Choose one option below.</p>
                    </div>
                </div>
                {/* Options grid */}
                <div className="col-12 col-lg-10 col-xl-8 mt-0 mt-md-2">
                    <p className="step1-options-label">What brings you here?</p>
                    <div className="row g-3 g-md-4">
                        <div className="col-md-4 col-sm-6">
                            <div className="select-1st">
                                <input className="styled-checkbox"
                                checked={data.selectedCheckbox === "cd1"}
                                name="form1-checkbox" 
                                type="checkbox" value="cd1" 
                                onChange={handleChange}
                                />
                                <label htmlFor="styled-checkbox-1" onClick={() => handleCheckboxChange("cd1","offer::inquire")}>
                                    <span className="step1-card-icon"><FontAwesomeIcon icon={faGlobe} /></span>
                                    <span className="step1-card-text">Interested in connecting with {domain}</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="select-2nd">
                                <input className="styled-checkbox" 
                                checked={data.selectedCheckbox === "cd2"}
                                name="form2-checkbox" 
                                type="checkbox" value="cd2"
                                onChange={handleChange} 
                                />
                                <label htmlFor="styled-checkbox-2" onClick={() => handleCheckboxChange("cd2","staffing")}>
                                    <span className="step1-card-icon"><FontAwesomeIcon icon={faBoxesPacking} /></span>
                                    <span className="step1-card-text">Would like to find a job with {domain}</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="select-3rd">
                                <input className="styled-checkbox" name="form3-checkbox" 
                                 checked={data.selectedCheckbox === "cd3"}
                                 type="checkbox" value="cd3"
                                 onChange={handleChange}
                                />
                                <label htmlFor="styled-checkbox-3" onClick={() => handleCheckboxChange("cd3","staffing")}>
                                    <span className="step1-card-icon"><FontAwesomeIcon icon={faBoxesStacked} /></span>
                                    <span className="step1-card-text">Help build {domain}</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="select-4th">
                                <input className="styled-checkbox" name="form4-checkbox"
                                onChange={handleChange} 
                                checked={data.selectedCheckbox === 'cd4'}
                                type="checkbox" value="cd4" />
                                <label htmlFor="styled-checkbox-4" onClick={() => handleCheckboxChange('cd4','earnctb')}>
                                    <span className="step1-card-icon"><FontAwesomeIcon icon={faCoins} /></span>
                                    <span className="step1-card-text">Earn CTB or {domain} token</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="select-5th">
                                <input className="styled-checkbox" name="form5-checkbox" 
                                checked={data.selectedCheckbox === 'cd5'}
                                onChange={handleChange}
                                type="checkbox" value="cd5" data-form="partner" />
                                <label htmlFor="styled-checkbox-5" onClick={() => handleCheckboxChange('cd5','partner')}>
                                    <span className="step1-card-icon"><FontAwesomeIcon icon={faHandHolding} /></span>
                                    <span className="step1-card-text">Interested in partner opps with {domain}</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="select-6th">
                                <input className="styled-checkbox" name="form6-checkbox" 
                                checked={data.selectedCheckbox === 'cd6'}
                                onChange={handleChange} 
                                type="checkbox" value="cd6" data-form="earnctb" />
                                <label htmlFor="styled-checkbox-6" onClick={() => handleCheckboxChange('cd6','earnctb')}>
                                    <span className="step1-card-icon"><FontAwesomeIcon icon={faShare} /></span>
                                    <span className="step1-card-text">Connect with others</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mt-md-5">
                        <div className="col-md-12">
                            <div className="text-end">
                                
                                <Link href="" className="btn btn-dark btn-lg rounded-pill px-4" id="btn-show-name-form" onClick={handleSubmit}>Continue</Link>
                            </div>
                        </div>
                        <div className="col-md-12 col-contrib">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center tw-text-sm tw-text-slate-500 tw-uppercase tw-tracking-wider mt-3">
                                        or login with{" "}
                                        <Link href={loginUrl} id="btn-login-contrib">
                                            <Image
                                                src="https://cdn.vnoc.com/logos/logo-new-contrib-06.png"
                                                width={200}
                                                height={200}
                                                sizes="100vw"
                                                className="tw-inline"
                                                alt="Contrib login"
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