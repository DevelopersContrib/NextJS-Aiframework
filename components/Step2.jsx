import Link from "next/link";

export default function Step2() {
    return (
        <>
        <div className="container setup-content" >
            <div className="row justify-content-center">
                <div className="col-md-8 coldiv">
                    <div className="fw-bold text-3xl">
                    👋 Hi! Please type in your name to continue.
                    <label className="input-sizer">
                        <span></span>
                        <input id="userName" type="text" onInput="this.parentNode.dataset.value = this.value" size="4" placeholder="Name"/>
                    </label>	
                    </div>
                </div>
                <div className="col-md-8 coldiv">
                    <div className="row">				
                        <div className="col-md-12" id="name-form-btn-wrapper">
                            <div className="row">
                                <div className="col-md-12 mb-5 mt-3">
                                    <div className="fw-bold1 text-center text-3xl">
                                    Thank you&nbsp;<span className="user-name text-primary text-capitalize"></span>!&nbsp;
                                    </div>
                                </div>						
                                <div className="col-md-6">
                                    <div className="text-start">                       
                                        <Link href="#" className="btn btn-dark btn-lg rounded-pill" id="activate-1st-container">Back</Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-end">                        
                                        <Link href="#" class="btn btn-dark btn-lg rounded-pill" id="activate-2nd-container">Let's go</Link>
                                    </div>
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