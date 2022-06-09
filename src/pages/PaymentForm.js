import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { PaystackButton } from 'react-paystack'
import { useCart } from "react-use-cart";

const publicKey = 'pk_test_dd72b6820442e9ed1ecfd39205ef69cd773adcca'

function PaymentForm() {
    const { cartTotal} = useCart();
    var amount = cartTotal
  const [firstName, setFirstName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const nameIsValid = firstName.trim().length > 2;
  const nameInvalid = nameTouched && !nameIsValid;

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValid = email.match(mailformat);
  const emailInvalid = emailTouched && !emailValid;

  const [phone, setPhone] = useState('')

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const firstNameBlurHandler = (event) => {
    setNameTouched(true);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  const phoneHandler = (event)=>{
setPhone(event.target.value)
  }

  const NameClass = nameInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";

  const emailClass = emailInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";

  const formValid = emailValid && nameIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);

    formValid && alert("your message has been sent successfully");
    setFirstName("");
    setEmail("");
    setNameTouched(false);
    setEmailTouched(false);
  };
  const componentProps = {
    email,
    amount,
    metadata: {
      firstName,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Are you sure you want to go back"),
  }

  return (
    <div className="contact-container">
         <h2 className="header-section">Payment Form</h2>
      <div className="contact">
        <div className="contact-form">
          <p className="contact-head">User Details</p>
          <input
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
            className={NameClass}
            value={firstName}
            placeholder="Full-Name"
          />
          {nameInvalid && (
            <small className="error">
              Name must be greater than 2 characters
            </small>
          )}
          <input
            onChange={emailHandler}
            onBlur={emailBlurHandler}
            className={emailClass}
            value={email}
            placeholder="Email-address"
          />
          {emailInvalid && (
            <small className="error">Pls enter a valid email</small>
          )}
          <input
          onChange={phoneHandler}
            className="contact-form-text"
            placeholder="Phone-Number"
          />
          <p className="mandatory">* All fields are mandatory.</p>
          {/* <button onClick={submitHandler} className="btn">
            Submit
          </button> */}
           <PaystackButton className="btn" {...componentProps} />
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
