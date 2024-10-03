import { useContext } from "react";
import { Context } from "./Context";

export default function Button(){
    const {step,handleStepChange} = useContext(Context);
    return (
        <div className="button-field">
            {step > 1 && <button className="back-button" type="button" onClick={() =>  {handleStepChange(-1)}}>Go Back</button>}
            {step === 4 ? <button className="confirm-button" type="submit">Confirm</button> : <button className="next-button" type="submit">Next Step</button>}
            
        </div>
    )
}