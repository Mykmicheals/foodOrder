import React,{useState,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import AuthContext from '../store/authContext';
import { Icon } from "@iconify/react";
import VerifyEmail from './VerifyEmail';

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValid = email.match(mailformat);
  const emailInvalid = emailTouched && !emailValid;

  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value)
    setShowPassword(false)
  }

  const showPasswordHandler = (event) => {
    setShowPassword(showPassword=>!showPassword)
  }

  var passInputType = showPassword?'text':'password'

  const emailClass = emailInvalid
    ? "contact-form-input invalid-input"
    : "contact-form-input";


  const formValid = emailValid

  const authCtx = useContext(AuthContext)

  const submitHandler = async (event) => {
    event.preventDefault();
    setEmailTouched(true)
    if (formValid) {
      setLoading(true)
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAoGAsZsuJRKb9uEanWU6JcByiJ50LyJZ0',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }

        })
      setLoading(false)
      const data = await response.json()
      authCtx.login(data.idToken)
      navigate('/')

      if (data.error) {
        setError('Invalid email and password combination')
        setPassword('')
      }
      setPassword('')
      console.log(data)
      setEmailTouched(false);
    } else {
      // setEmailTouched(true)
      // setNameTouched(true)
      // setPasswordTouched(true)

    }
    setPassword('')
  }


  if (loading) {
   return <Loading />
 } else { return (
      <div className='logins'>
            <div className="contact-form">
          <label>Login</label>
        <p className='error'>{error}</p>
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
        
        <div className='password-input'>
          <input
            type={passInputType}
            className='contact-form-input'
            placeholder='enter your password'
            onChange={passwordHandler}
            // onChange={showPasswordHandler}
                    
        />
        <i onClick={showPasswordHandler} className='password-eye'>  <Icon icon="emojione-v1:eye" inline={true} /></i>
        </div>
        <p className='d-account'>Dont have an account? <Link to='/signup'>Signup</Link></p>
           <button onClick={submitHandler} className="logins-btn">
              Login             
          </button>
            </div>
        
    </div>
  )}
}

export default Login