import Button from "./Button";

export default function Summary({
  step,
  handleStepChange,
  isYear,
  selectedPlan,
  services,
  handleSubmit4
}) {
  function calcTotalPrice() {
    let totalPrice = isYear ? selectedPlan.priceYear : selectedPlan.priceMonth;
    for (let x of services) {
      let num = isYear ? x.priceYear : x.priceMonth;
      let digits = parseFloat(num.replace(/[^0-9.]/g, ""));
      totalPrice += digits;
    }
    return totalPrice;
  }
  return (
    <div className="signup-form">
      <form noValidate onSubmit={handleSubmit4}>
        <div className="upper-info">
          <div className="form-info">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
          </div>
          <div className="user-summary">
            <div className="user-summary-plan">
              <div className="plan-price">
                <div className="user-summary-selected-plan">
                  <h4>{`${selectedPlan.planName} (${
                    isYear ? "Yearly" : "Monthly"
                  })`}</h4>
                  <span onClick={() => handleStepChange(2)}>Change</span>
                </div>
                <div className="summary-plan-price">{`$${
                  isYear ? selectedPlan.priceYear : selectedPlan.priceMonth
                }/${isYear ? "yr" : "mo"}`}</div>
              </div>
              {services.length > 0 && (
                <div className="adds-services">
                  {services.map((service) => {
                    return (
                      <div className="summary-service">
                        <span className="service-name">{service.name}</span>
                        <span className="service-price">
                          {isYear ? service.priceYear : service.priceMonth}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="user-payment">
              <span className="total">Total(per {isYear ? "year" : "month"})</span>
              <span className="total-price">
                +${calcTotalPrice()}/{isYear ? "yr" : "mo"}
              </span>
            </div>
          </div>
        </div>
        <Button step={step} handleStepChange={handleStepChange} />
      </form>
    </div>
  );
}
