import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import Prompts from './Prompts'

export default function Step3({domain, domain_leads, team_application, total_tasks, members, handleSubmit, prevStep, data}) {
    return (
        <>
        <div className="container setup-content" id="2nd-container">
            <div className="row justify-content-center">
                <div className="col-md-8 coldiv tw-mt-5">
                    <div className="tw-text-3xl tw-my-2">{domain} Fact: </div>
                    <Prompts domain={domain} 
                    domain_leads={domain_leads} 
                    team_application={team_application}
                    total_tasks={total_tasks}
                    members={members}
                    data={data}
                    />
                   
                </div>
                <div className="col-md-8 mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text-start">
                                <Link href="" id="deactivate-2nd-container" className="btn btn-back" title="Back" onClick={prevStep}><FontAwesomeIcon icon={faArrowLeftLong} className='tw-text-3xl'/></Link>
                            </div>								
                        </div>
                        <div className="col-md-6">								
                            <div className="text-end">
                                <Link href="" className="btn btn-dark btn-lg rounded-pill" id="activate-3rda-container" onClick={handleSubmit}>Good to know!</Link>
                            </div>
                        </div>							
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}