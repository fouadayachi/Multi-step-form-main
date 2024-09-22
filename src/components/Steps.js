import { useState } from "react"


export default function Steps({isMobile,step}){
    return (
        <div className="steps">
            <div className="step">
                <div className={`step-circle ${step === 1 && "active"}`}  >1</div>
                { !isMobile && <div className="step-info">
                    <span className="step-number">Step 1</span>
                    <span>YOUR INFO</span>
                </div>}
            </div>
            <div className="step">
                <div className={`step-circle ${step === 2 && "active"}`} >2</div>
                { !isMobile && <div className="step-info">
                    <span className="step-number">Step 2</span>
                    <span>SELECT PLAN</span>
                </div>}
            </div>
            <div className="step">
                <div className={`step-circle ${step === 3 && "active"}`} >3</div>
                { !isMobile && <div className="step-info">
                    <span className="step-number">Step 3</span>
                    <span>ADD-ONS</span>
                </div>}
            </div>
            <div className="step">
                <div className={`step-circle ${step === 4 && "active"}`} >4</div>
                { !isMobile && <div className="step-info">
                    <span className="step-number">Step 4</span>
                    <span>SUMMARY</span>
                </div>}
            </div>
        </div>
    )
}




// const handleStepChange = (newStep) => {
//     setStep(newStep);
// }