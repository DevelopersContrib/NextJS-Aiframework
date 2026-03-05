import Link from "next/link";

export default function NameStep({ handleSubmit, prevStep, data }) {
  return (
    <>
      <div className="col-12 col-lg-8 mt-4">
        <div className="step2-thanks">
          <p className="step2-thanks-text">
            Thank you, <span className="user-name text-primary text-capitalize">{data.name}</span>!
          </p>
          <div className="step2-btn-row">
            <Link href="" className="btn btn-back btn-lg rounded-pill px-4" id="activate-1st-container" onClick={prevStep}>
              Back
            </Link>
            <Link href="" className="btn btn-dark btn-lg rounded-pill px-4" id="activate-2nd-container" onClick={handleSubmit}>
              Let&apos;s go
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}