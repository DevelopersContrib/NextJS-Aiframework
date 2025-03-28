import Image from "next/image";
import Containerform from "../components/Containerform";
import HeaderWidget from "../components/HeaderWidget";
import NewsTicker from "../components/NewsTicker";

import {
  getData,
  getDomain,
  getLoginUrl,
  getTotalMembers,
  ucfirst,
  getTotalLeads,
  getTeamApplication,
  getTotalTasks,
} from "../lib/data";
import Logo from "../components/Logo";

export default async function Home() {
  const leads = await getTotalLeads();
  const c = await getData();
  const members = await getTotalMembers();
  const teamApplication = await getTeamApplication();
  const totalTasks = await getTotalTasks();
  const domain = getDomain();
  const uc_domain = ucfirst(domain);
  const loginUrl = getLoginUrl();

  return (
    <>
      <NewsTicker />
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />

      <div className="onboardingHeader">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center col-top">
              <div className="oh-innner">
                <Logo domain={domain} logo={c.data.logo} />

                <div className="oh-right">
                  <div className="contrib-users-avatar">
                    <Image
                      src="https://s3.amazonaws.com/assets.zipsite.net/images/jayson/icons/currency-ctb-4.png"
                      width={0}
                      height={0}
                      className="img-fluid tw-w-full"
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                  <div className="contrib-users-avatar">
                    <Image
                      src="https://www.contrib.com/uploads/profile/1672908033RWZ0J.jpg"
                      width={0}
                      height={0}
                      className="img-fluid tw-w-full"
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                  <div className="contrib-users-avatar">
                    <Image
                      src="https://www.contrib.com/uploads/profile/1673889003CZibx.jpg"
                      width={0}
                      height={0}
                      className="img-fluid tw-w-full"
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                </div>
                <span className="badge text-bg-primary rounded-pill">
                  {members.data.count} members
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="onboardingSection">
        <Containerform
          domain={uc_domain}
          domain_small={domain}
          domain_leads={leads.data.total_leads}
          team_application={teamApplication.data.team_application}
          total_tasks={totalTasks.data.task_count}
          members={members.data.count}
          loginUrl={loginUrl}
        />
      </div>
    </>
  );
}
