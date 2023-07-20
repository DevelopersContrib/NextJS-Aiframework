"use client";


import Form from './Form';

const Containerform = ({domain,domain_leads,team_application, total_tasks, members, domain_small, loginUrl}) => {
    const dataFormValues = {
        step: 1,
        url: ''
    }


    return (
        <div className="container setup-content">
        <Form domain={domain} 
        domain_small={domain_small}
        domain_leads={domain_leads} 
        team_application={team_application}
        total_tasks={total_tasks}
        members={members}
        loginUrl={loginUrl}
        dataFrom={dataFormValues}
        />
        </div>
        
    )
}
export default Containerform