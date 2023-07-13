"use client";

import { useState, useEffect } from "react";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';


export default function AiForm ({domain, domain_leads, team_application, total_tasks, members, domain_small}) {
    const initialValues = {
        domain:domain_small,
        step: 1,
        selectedCheckbox:null,
        name:''
    }

    const [data, setData] = useState(initialValues);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    
    const handleCheckboxChange = (value) => {
        
        setData({ ...data, ['selectedCheckbox']: value});
    };

    const prevStep = event => {
        event.preventDefault();
        setData({ ...data, ['step']: data.step -1});
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setData({ ...data, ['step']: data.step +1});
    }


    const showStep = () => {
        const step = data.step;
        if(step===1){
          return (
            
            <Step1 domain={domain} 
            data={data}
            handleSubmit={handleSubmit}
            handleCheckboxChange={handleCheckboxChange}
            />
          )
        }else if(step===2){
            return (
                <Step2 domain={domain}
                data={data}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                prevStep={prevStep}
                />
            )
        }else if(step===3){
            return (
                <Step3 domain={domain} 
                data={data}
                domain_leads={domain_leads} 
                team_application={team_application} 
                total_tasks={total_tasks}
                members={members}
                handleSubmit={handleSubmit}
                prevStep={prevStep}
                />
            )
        }else if(step===4){
            return (
                <Step4 domain={domain}
                handleSubmit={handleSubmit}
                prevStep={prevStep}
                />
            )
        }else if(step===5){
            return (
                <Step5 domain={domain}
                handleSubmit={handleSubmit}
                prevStep={prevStep}
                />
            )
        }
    }

    return (
        showStep()
    )
}