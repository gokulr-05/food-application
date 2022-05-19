import { useState } from "react";
import "./Checkout.css";
let Checkout = ({ setIsCheckOut, postData }) => {
  let [cFormName, setCFormName] = useState("");
  let [cFormStreet, setCFormStreet] = useState("");
  let [cFormPostal, setCFormPostal] = useState("");
  let [cFormCity, setCFormCity] = useState("");

  let [isFormNameValid, setIsFormNameValid] = useState(true);
  let [isFormStreetValid, setIsFormStreetValid] = useState(true);
  let [isFormPostalValid, setIsFormPostalValid] = useState(true);
  let [isFormCityValid, setIsFormCityValid] = useState(true);
  let [isFormValid, setFormValid] = useState(true);

  let isEmpty = (val) => {
    return val.trim() === "";
  };

  let isfiveChar = (val) => {
    let d = val.trim().length;
    console.log("isFiveChar=", d);
    return d >= 5;
  };

  let submitHandler = (e) => {
    e.preventDefault();

    setIsFormNameValid(!isEmpty(cFormName));
    setIsFormStreetValid(!isEmpty(cFormStreet));
    setIsFormPostalValid(!isEmpty(cFormPostal));
    setIsFormCityValid(isfiveChar(cFormCity));

    let flag =
      !isEmpty(cFormName) &&
      !isEmpty(cFormStreet) &&
      !isEmpty(cFormPostal) &&
      isfiveChar(cFormCity);

    console.log("flag=", flag);

    if (flag === true) {
      console.log("checkout js: before passing data to cart js");
      postData({
        name: cFormName,
        street: cFormStreet,
        postal: cFormPostal,
        city: cFormCity,
      });
    } else {
      return;
    }
  };

  return (
    <div className="checkout-form-container-1">
      <div className="text-center">
        <h2 className="text-capitalize">checkout form </h2>
      </div>
      <form onSubmit={submitHandler} className="checkout-form">
        <div className="checkout-form-container">
          <label htmlFor="name" className="text-capitalize">
            Name:
          </label>
          <input
            value={cFormName}
            onChange={(e) => {
              setCFormName(e.target.value);
            }}
            type="text"
            className="checkout-form form-control"
            id="name"
          />
          {!isFormNameValid && <p className="text-danger">Name is invalid</p>}
        </div>

        <div className="checkout-form-container">
          <label htmlFor="name" className="text-capitalize">
            Street:
          </label>
          <input
            value={cFormStreet}
            onChange={(e) => {
              setCFormStreet(e.target.value);
            }}
            type="text"
            className="checkout-form  form-control"
            id="name"
          />
          {!isFormStreetValid && (
            <p className="text-danger">Street is invalid</p>
          )}
        </div>
        <div className="checkout-form-container">
          <label className="text-capitalize" htmlFor="name">
            postal code:
          </label>
          <input
            value={cFormPostal}
            onChange={(e) => {
              setCFormPostal(e.target.value);
            }}
            type="text"
            className="checkout-form  form-control"
            id="name"
          />
          {!isFormPostalValid && (
            <p className="text-danger">Postal is invalid</p>
          )}
        </div>
        <div className="checkout-form-container">
          <label className="text-capitalize" htmlFor="name">
            city:
          </label>
          <input
            value={cFormCity}
            onChange={(e) => {
              setCFormCity(e.target.value);
            }}
            type="text"
            className="checkout-form  form-control"
            id="name"
          />
          {!isFormCityValid && <p className="text-danger">City is invalid</p>}
        </div>
        <div className="checkout-form-btn-bucket">
          <div className="checkout-form-btn-bucket-1">
            <div>
              <button type="submit" className="btn btn-primary">
                confirm
              </button>
            </div>

            <div>
              <button
                data-bs-dismiss="modal"
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setIsCheckOut(false);
                }}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
