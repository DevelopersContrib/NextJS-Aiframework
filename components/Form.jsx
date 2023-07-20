"use client";

import { useState, useEffect } from "react";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';


export default function AiForm ({domain, domain_leads, team_application, total_tasks, members, domain_small, loginUrl,dataFrom}) {
    const initialValues = {
        domain:domain_small,
        step: dataFrom.step,
        email:'',
        password:'',
        selectedCheckbox:'',
        name:'',
        termsChecked:'',
        form:'',
		url:dataFrom.url
    }

    const initialErrors = {
        emailError:'',
        passwordError:'',
        termsCheckedError:'',
        validate:false,
    }

    const [errors, setErrors] = useState(initialErrors);

    const [data, setData] = useState(initialValues);

		const [emailExist, setEmailExist] = useState('');

    useEffect(() => {
        const validateErrors = () => {
            let dataErrors;
            if(data.step===4){
              dataErrors = {
                passwordError: data.password?'':"Password is required.",
                termsCheckedError: data.termsChecked?'':"Do you agree to the terms and policy?",
                emailError: (data.email?'':"Email is required.") || (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ?"":"Invalid Email."),
              }
            }
            setErrors(dataErrors);
          }
        validateErrors()
    }, [data])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    
    const handleCheckboxChange = (value,form) => {
        
        setData({ ...data, ['selectedCheckbox']: value,['form']:form});
    };

    const handleCheckboxChangeTerms = (value) => {
        
        setData({ ...data, ['termsChecked']: value});
    };

    const prevStep = event => {
        event.preventDefault();
        setData({ ...data, ['step']: data.step -1});
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setErrors({ ...errors, ['validate']: true })
        if( data.step===4){
            const isValid = !Object.values(errors).some(v => v);
            
            if(isValid){
                try {
                    console.log('submit')
                    const response = await fetch("/api/signup", {
											method: "POST",
											body: JSON.stringify(data),
                		});
										console.log(response);
										if (response.ok) {
											const res = await response.json()
											console.log(res);
											console.log(res.status);
											console.log(res.memberId);
											if(res.status){
												const iframe_url = "https://domaindirectory.com/serviceforms/menu?domain="+data.domain+"&email="+data.email+"&name="+data.name+"&form="+data.form+"&member_id="+res.memberId+"&is_developer=0";
												setData({ ...data, ['step']: data.step +1, ['url']:iframe_url});
											}else{
												setEmailExist(res.error);
											}
										}else{
											console.log('An error occurred')
										}
           		} catch (error) {
                console.log(error);
              } finally {
                //set
              }
    
                
            }
            
        }else{
            
            setData({ ...data, ['step']: data.step +1});
        }
        
    }


    const showStep = () => {
        const step = data.step;
        if(step===1){
          return (
            
            <Step1 domain={domain} 
            data={data}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCheckboxChange={handleCheckboxChange}
            loginUrl={loginUrl}
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
                handleCheckboxChangeTerms={handleCheckboxChangeTerms}
                prevStep={prevStep}
                err={errors}
								emailExist={emailExist}
                handleChange={handleChange}
                />
            )
        }else if(step===5){
            return (
                <Step5 data={data} />
            )
        }
    }

    return (
        showStep()
    )
}