
import NameStep from "./NameStep"

export default function Step2({handleSubmit,prevStep,data,handleChange}) {
    return (
        <>
        <div className="container setup-content" >
            <div className="row justify-content-center">
                <div className="col-md-8 coldiv">
                    <div className="fw-bold tw-text-3xl">
                    👋 Hi! Please type in your name to continue.
                    <label className="input-sizer">
                        <span></span>
                        <input name="name" onChange={handleChange} type="text" size="4" placeholder="Name"/>
                    </label>	
                    </div>
                </div>
                {data.name !='' ?  <NameStep data={data} handleSubmit={handleSubmit} prevStep={prevStep} />: null}
            </div>
        </div>
        </>
    )
}