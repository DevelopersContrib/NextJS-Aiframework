import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Prompts from "./Prompts";

export default function Step3({
  domain,
  domain_leads,
  team_application,
  total_tasks,
  members,
  handleSubmit,
  prevStep,
  data,
}) {
  return (
    <>
      <div className="container setup-content" id="2nd-container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {/* Back */}
            <div className="step3-back-row">
              <Link
                href=""
                id="deactivate-2nd-container"
                className="btn btn-back"
                title="Back"
                onClick={prevStep}
              >
                <FontAwesomeIcon icon={faArrowLeftLong} className="tw-me-2" />
                Back
              </Link>
            </div>

            {/* Fact card */}
            <div className="step3-fact-card">
              <span className="step3-fact-badge">{domain} Fact</span>
              <div className="step3-fact-body">
                <Prompts
                  domain={domain}
                  domain_leads={domain_leads}
                  team_application={team_application}
                  total_tasks={total_tasks}
                  members={members}
                  data={data}
                />
              </div>
              <div className="step3-actions">
                <Link
                  href=""
                  id="activate-3rda-container"
                  className="btn btn-dark btn-lg rounded-pill px-5 step3-cta"
                  onClick={handleSubmit}
                >
                  Good to know!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}