import Button from "./Button";
import { useContext } from "react";
import { Context } from "./Context";


export default function AddOns() {
  const {isYear,handleSubmit3,adds,handleToggleService} = useContext(Context);
  return (
    <div className="signup-form">
      <form noValidate onSubmit={handleSubmit3}>
        <div className="upper-info">
          <div className="form-info">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
          </div>
          <div className="user-add-ons">
            {adds.map((add) => {
              return (
                <div key={add.id} className={`add-on ${add.check && "checked"}`} >
                  <label className="check-box"  >
                    <input
                      type="checkbox"
                      name={add.name}
                      checked={add.check}
                    />
                    <span className="box" onClick={(e) => {e.stopPropagation();handleToggleService(add.id);console.log("doneggg")}}></span>
                  </label>
                  <div className="add-on-details">
                    <div className="add-on-info">
                      <h3>{add.name}</h3>
                      <span>{add.details}</span>
                    </div>
                    <div className="add-on-price">
                      <span>{isYear ? add.priceYear : add.priceMonth}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Button  />
      </form>
    </div>
  );
}

