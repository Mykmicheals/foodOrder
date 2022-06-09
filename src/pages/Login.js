import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValid = email.match(mailformat);
  const emailInvalid = emailTouched && !emailValid;

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  const emailClass = emailInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";


  const formValid = emailValid

    const submitHandler = (event) => {
        event.preventDefault();
        if (formValid) {
            alert("your message has been sent successfully");
            setEmail("");
         
            setEmailTouched(false);
        } else {
   
            setEmailTouched(true)
           
        }
    }

    return (
      <div className='logins'>
            <div className="contact-form">
            <label>Login</label>
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
        
          <input
            type='password'
            className='contact-form-input'
            placeholder='enter your password'
                    
                />
                <p className='d-account'>Dont have an account? <Link to='/signup'>Signup</Link></p>
           <button onClick={submitHandler} className="logins-btn">
              Login             
          </button>
            </div>
        </div>
  )
}

export default Login