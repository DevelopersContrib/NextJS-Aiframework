import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import Prompts from './Prompts'

export default function Step3() {
    return (
        <>
        <div className="container setup-content" id="2nd-container">
            <div className="row justify-content-center">
                <div className="col-md-8 coldiv mt-5">
                    <div className="text-3xl my-2">Javapoint.com Fact: </div>
                    <Prompts />
                   
                </div>
                <div className="col-md-8 mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-start">
                                <Link href="#1st-container" id="deactivate-2nd-container" className="btn btn-back" title="Back"><FontAwesomeIcon icon={faArrowLeftLong} className='text-3xl'/></Link>
                            </div>								
                        </div>
                        <div className="col-md-6">								
                            <div className="text-end">
                                <Link href="#" className="btn btn-dark btn-lg rounded-pill" id="activate-3rda-container">Good to know!</Link>
                            </div>
                        </div>							
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}