import NameStep from "./NameStep";

export default function Step2({ handleSubmit, prevStep, data, handleChange }) {
  return (
    <>
      <div className="container setup-content">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="step2-hero">
              <span className="step2-hero-badge">Your name</span>
              <h2 className="step2-hero-title">What should we call you?</h2>
              <p className="step2-hero-sub">We’ll use it to personalize your experience.</p>
              <div className="step2-name-wrap">
                <label className="input-sizer step2-name-input" htmlFor="step2-name">
                  <span></span>
                  <input
                    id="step2-name"
                    name="name"
                    onChange={handleChange}
                    type="text"
                    size="4"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
              </div>
            </div>
          </div>
          {data.name !== "" ? (
            <NameStep data={data} handleSubmit={handleSubmit} prevStep={prevStep} />
          ) : null}
        </div>
      </div>
    </>
  );
}