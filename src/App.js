import React, { useState } from "react";
import "./App.css";
import Steps from "./components/Steps";
import { useMediaQuery } from "react-responsive";
import YourInfo from "./components/YourInfo";
import SelectPlan from "./components/SelectPlan";
import plans from "./components/plans";
import AddOns from "./components/AddOns";
import adds from "./components/Adds";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";
import { Context } from "./components/Context";

function App() {
  const [step, setStep] = useState(1);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isYear, setIsYear] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [services, setServices] = useState(adds);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };
  const handleStepChange = (num) => {
    if (num > 1) setStep(num);
    else setStep((step) => step + num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "This field is required";
    }

    if (!formData.email.trim()) {
      errors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      errors.phone = "This field is required";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) handleStepChange(1);
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (selectedPlan) handleStepChange(1);
  };
  const handleSubmit3 = (e) => {
    e.preventDefault();
    handleStepChange(1);
  };
  const handleSubmit4 = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };
  const handleToggleYear = () => {
    setIsYear(!isYear);
  };
  const handleToggleService = (serviceId) => {
    setServices(
      services.map((service) => {
        if (service.id === serviceId) {
          return { ...service, check: !service.check };
        }
        return service;
      })
    );
  };

  return (
    <div className="content">
      <Steps isMobile={isMobile} step={step} />
      <Context.Provider
        value={{
          step,
          formData,
          handleInputChange,
          handleStepChange,
          handleSubmit,
          handleSubmit2,
          formErrors,
          isYear,
          handlePlanSelect,
          selectedPlan,
          handleToggleYear,
          handleSubmit3,
          handleToggleService,
          adds: services,
          handleSubmit4,
        }}
      >
        {step === 1 && !submitted && <YourInfo />}
        {step === 2 && !submitted && <SelectPlan />}
        {step === 3 && !submitted && <AddOns />}
        {step === 4 && !submitted && (
          <Summary services={services.filter((service) => service.check)} />
        )}
        {submitted && <Thanks />}
      </Context.Provider>
    </div>
  );
}

export default App;
