import Link from "next/link";
export default function NameStep({handleSubmit,prevStep,data}) {
    return (
        <>
        <div className="col-md-8 coldiv">
            <div className="row">				
                <div className="col-md-12" id="name-form-btn-wrapper">
                    <div className="row">
                        <div className="col-md-12 mb-5 mt-3">
                            <div className="fw-bold1 text-center tw-text-3xl">
                            Thank you&nbsp;<span className="user-name text-primary text-capitalize">{data.name}</span>!&nbsp;
                            </div>
                        </div>						
                        <div className="col-md-6">
                            <div className="text-start">                       
                                <Link href="" className="btn btn-dark btn-lg rounded-pill" id="activate-1st-container" onClick={prevStep}>Back</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-end">                        
                                <Link href="" class="btn btn-dark btn-lg rounded-pill" id="activate-2nd-container" onClick={handleSubmit}>Let's go</Link>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        </>
    )
}