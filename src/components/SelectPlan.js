import Button from "./Button";
import plans from "./plans";

export default function SelectPlan({ step,handleStepChange,isYear,handlePlanSelect,selectedPlan,handleToggleYear ,handleSubmit2}) {
  return (
    <div className="signup-form">
      <form noValidate onSubmit={handleSubmit2}>
        <div className="upper-info">
          <div className="form-info">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </div>
          <div className="user-plan">
            {plans.map((plan => {
                return (
                    <div className={`plan ${selectedPlan && selectedPlan.planName === plan.planName && "selected-plan"}`} onClick={() => handlePlanSelect(plan)}>
                        <div className="logo">
                            <img src={plan.logo} alt={plan.planName} />
                        </div>
                        <div className="details">
                            <h2>{plan.planName}</h2>
                            <p>{`$${isYear ? plan.priceYear : plan.priceMonth}/${isYear ? "yr" : "mo"}`}</p>
                            {isYear && <span>2 months free</span>}
                        </div>
                    </div>
                )
            }))}
          </div>
          <div className="plan-selection">
            <span className={isYear && "gray"}>Monthly</span>
            <label className="switch">
              <input type="checkbox" checked={isYear} onChange={handleToggleYear}/>
              <span class="slider"></span>
            </label>
            <span className={!isYear && "gray"}>Yearly</span>
          </div>
        </div>
        <Button step={step} handleStepChange={handleStepChange} />
      </form>
    </div>
  );
}
