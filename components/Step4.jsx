import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import ErrorBlock from "./ErrorBlock";

export default function Step4({
  domain,
  handleSubmit,
  prevStep,
  handleCheckboxChangeTerms,
  err,
  handleChange,
  emailExist,
  loginUrl,
}) {
  const terms_link =
    "https://domaindirectory.com/policypage/terms?domain=" + domain;
  const privacy_link =
    "https://domaindirectory.com/policypage/privacypolicy?domain=" + domain;

  return (
    <>
      <div className="container setup-content">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7">
            {/* Back */}
            <div className="step4-back-row">
              <Link
                href=""
                className="btn btn-back"
                title="Back"
                onClick={prevStep}
              >
                <FontAwesomeIcon icon={faArrowLeftLong} className="tw-me-2" />
                Back
              </Link>
            </div>

            {/* Hero */}
            <div className="step4-hero">
              <span className="step4-hero-badge">Almost done</span>
              <h2 className="step4-hero-title">You&apos;re almost there!</h2>
              <p className="step4-hero-sub">
                Just one more step to set up your account.
              </p>
            </div>

            {/* Form card */}
            <div className="step4-form">
              <div className="step4-field">
                <label htmlFor="form4-email" className="step4-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="step4-input"
                  id="form4-email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {err.validate ? <ErrorBlock msg={err.emailError} /> : null}
                {emailExist ? <ErrorBlock msg={emailExist} /> : null}
              </div>
              <div className="step4-field">
                <label htmlFor="form4-password" className="step4-label">
                  Password <span className="step4-required">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="step4-input"
                  id="form4-password"
                  placeholder="Create a secure password"
                  autoComplete="new-password"
                />
                {err.validate ? (
                  <ErrorBlock msg={err.passwordError} />
                ) : null}
              </div>
              <div className="step4-check-wrap">
                <input
                  className="step4-checkbox"
                  type="checkbox"
                  value=""
                  id="checkbox-term-policy"
                  onClick={() => handleCheckboxChangeTerms("checked")}
                />
                <label
                  className="step4-check-label"
                  htmlFor="checkbox-term-policy"
                >
                  I agree to the{" "}
                  <Link
                    href={terms_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="step4-link"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href={privacy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="step4-link"
                  >
                    Privacy Policy
                  </Link>
                </label>
                {err.validate ? (
                  <ErrorBlock msg={err.termsCheckedError} />
                ) : null}
              </div>
              <div className="step4-submit-wrap">
                <Link
                  href=""
                  className="btn btn-dark btn-lg rounded-pill px-5 step4-submit-btn"
                  id="activate-5th-container"
                  onClick={handleSubmit}
                >
                  Join {domain}
                </Link>
              </div>
            </div>

            {/* Or login with */}
            <div className="step4-login-divider">
              <span className="step4-login-text">Or login with</span>
              <Link href={loginUrl} id="btn-login-contrib" className="step4-login-link">
                <Image
                  src="https://cdn.vnoc.com/logos/logo-new-contrib-06.png"
                  width={160}
                  height={48}
                  sizes="160px"
                  className="step4-login-logo"
                  alt="Contrib"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}