import Button from "./Button";

export default function YourInfo({ step, formData, handleInputChange,handleStepChange,handleSubmit,formErrors }) {
  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="upper-info">
          <div className="form-info">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <div className="user-info">
            <div className="input-field">
              <label> Name <span>{formErrors.name}</span> </label>
              <input
                type="text"
                placeholder="e.g. Stephen King"
                required
                value={formData.name}
                name="name"
                onChange={handleInputChange}
                className={`${formErrors.name  && "error"}`}
              />
            </div>
            <div className="input-field">
              <label>Email Address <span>{formErrors.email}</span></label>
              <input
                type="email"
                placeholder="e.g. Stephen King@lorem.com"
                required
                value={formData.email}
                name="email"
                onChange={handleInputChange}
                className={`${formErrors.email  && "error"}`}
              />
            </div>
            <div className="input-field">
              <label>Phone Number <span>{formErrors.phone}</span></label>
              <input
                type="tel"
                placeholder="e.g. +1 234 567 890"
                required
                value={formData.phone}
                name="phone"
                onChange={handleInputChange}
                className={`${formErrors.phone  && "error"}`}
              />
            </div>
          </div>
        </div>
        <Button step={step} handleStepChange={handleStepChange} />
      </form>
    </div>
  );
}
