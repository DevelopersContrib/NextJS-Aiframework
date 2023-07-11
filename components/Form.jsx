"use client";

import { useState, useEffect } from "react";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

export default function AiForm () {
    const initialValues = {
        step: 1
    }

    const [data, setData] = useState(initialValues);


    const showStep = () => {
        const step = data.step;
        if(step===1){
          return (
            <Step1 />
          )
        }else if(step===2){
            return (
                <Step2 />
            )
        }else if(step===3){
            return (
                <Step3 />
            )
        }else if(step===4){
            return (
                <Step4 />
            )
        }else if(step===5){
            return (
                <Step5 />
            )
        }
    }

    return (
        showStep()
    )
}