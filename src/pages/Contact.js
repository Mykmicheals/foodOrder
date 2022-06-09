import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const nameIsValid = firstName.trim().length > 2;
  const nameInvalid = nameTouched && !nameIsValid;

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValid = email.match(mailformat);
  const emailInvalid = emailTouched && !emailValid;

  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);
  const messageIsValid = message.trim().length > 10;
  const messageInvalid = messageTouched && !messageIsValid;

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

  const messageHander = (e) => {
    setMessage(e.target.value)
  }

  const messageBlurHander = () => {
    setMessageTouched(true)
  }

  const NameClass = nameInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";

  const emailClass = emailInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";

  const messageClass = messageInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";

  const formValid = emailValid && nameIsValid && messageIsValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValid) {
      alert("your message has been sent successfully");
      setFirstName("");
      setEmail("");
      setNameTouched(false);
      setEmailTouched(false);
    } else {
      setNameTouched(true)
      setEmailTouched(true)
      setMessageTouched(true)
    }

  };
  return (
    <div className="contact-container">
      <h2 className="header-section">Contact Us</h2>
      <div className="contact">
        <div className="contact-info">
          <p className="contact-head">Information</p>
          <div className="contact-info-each">
            <i>
              <Icon icon="fa6-solid:location-dot" inline={true} />
            </i>
            <span>
              <h4>ADDRESS</h4>
              <p className="contact-text">
                Plot 1415 Adetokunbo Ademola Street, PMB 12724, Victoria Island,
                Lagos Nigeria
              </p>
            </span>
          </div>

          <div className="contact-info-each">
            <i>
              <Icon icon="carbon:phone-filled" inline={true} />
            </i>
            <span>
              <h4>Phone</h4>
              <p className="contact-text">
                +234(81)-3515-9897
                +2348168193771
              </p>
            </span>
          </div>

          <div className="contact-info-each">
            <i>
              <Icon icon="clarity:email-solid" inline={true} />
            </i>
            <span>
              <h4>Email</h4>
              <p className="contact-text">
                Mykmicheals@gmail.com
                <p>Mykhelhandy@gmail.com</p>
              </p>
            </span>
          </div>
        </div>
        <div className="contact-form">
          <p className="contact-head">Get In Touch</p>
          <input
            type='text'
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
            className={NameClass}
            value={firstName}
            placeholder="enter your name"
          />
          {nameInvalid && (
            <small className="error">
              Name must be greater than 2 characters
            </small>
          )}
          <input
            type='email'
            onChange={emailHandler}
            onBlur={emailBlurHandler}
            className={emailClass}
            value={email}
            placeholder="enter email-address"
          />
          {emailInvalid && (
            <small className="error">Pls enter a valid email</small>
          )}
          <textarea
            onChange={messageHander}
            onBlur={messageBlurHander}
            // className="contact-form-text"
            className={`${messageClass}`}
            placeholder="Enter your Message"
          />
          {messageInvalid && (
            <small className="error">Message must be more than 10 characters</small>
          )}

          <p className="mandatory">* All fields are mandatory.</p>
          <button onClick={submitHandler} className="btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
