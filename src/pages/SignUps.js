import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';

const initialState = {
    username: '',
    isValid: false,
    isTouched: false,
    passwordTouched: false,
    password1: '',
    password2: '',
    email: ''
}

// const initialState = {
//     username: { value: "", touched: false, hasError: true, error: "" },
//     email: { value: "", touched: false, hasError: true, error: "" },
//     password1: { value: "", touched: false, hasError: true, error: "" },
//     password2: { value: "", touched: false, hasError: true, error: "" },
//     isFormValid: false,
// }

function SignUp() {
    const navigate = useNavigate();
    const [notMatch, setNotMatch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const formReducer = (state, action) => {
        if (action.type === 'USERNAME') {
            if (action.payload.trim() > 1) {
                return { isValid: true }
            }
            return {
                ...state,
                username: action.payload,
            }

        }

        if (action.type === 'EMAIL') {
            return {
                ...state,
                email: action.payload
            }
        }
        if (action.type === 'PASSWORD1') {
            return {
                ...state,
                password1: action.payload
            }
        }
        if (action.type === 'PASSWORD2') {
            return {
                ...state,
                password2: action.payload
            }
        }
    }

    const [formState, dispatchForm] = useReducer(formReducer, initialState)

    const userNameHandler = (event) => {
        dispatchForm({
            type: 'USERNAME',
            payload: event.target.value
        })

    }

    const emailHandler = (event) => {
        dispatchForm({
            type: 'EMAIL',
            payload: event.target.value
        })
    }

    const password1Handler = (event) => {
        dispatchForm({
            type: 'PASSWORD1',
            payload: event.target.value
        })
    }


    const password2Handler = (event) => {
        dispatchForm({
            type: 'PASSWORD2',
            payload: event.target.value
        })
    }

    const signUpHandler = async (event) => {
        event.preventDefault()

        const body = {
            username: formState.username,
            email: formState.email,
            password: formState.password1
        }

        if (formState.password1 === formState.password2) {
            setLoading(true)
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAoGAsZsuJRKb9uEanWU6JcByiJ50LyJZ0', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            setLoading(false)
            const data = await response.json()

            if (response.status === 200) {
                navigate('/');
            }
            else {
                setError(data.error.message)
            }
        } else {
            setNotMatch(true)
        }
    }

    const invalid = formState.isTouched && !formState.isValid

    console.log(formState.isValid)
    console.log(formState.username)

    const nameInputClasses = invalid
        ? 'form'
        : 'invalid';

    return loading ? (
        <Loading />
    ) : (
            <div className='login'>
                <h3>SignUp</h3>
                <form className='login-form'>


                    <div>
                        <input className={nameInputClasses} onChange={userNameHandler} placeholder='Enter your username...' />
                    </div>

                    <div>
                        <input type='email' onChange={emailHandler} placeholder='Enter your email...' />
                    </div>

                    <div>
                        <input
                            type='password'
                            placeholder='Enter your password...'
                            onChange={password1Handler}
                        />
                    </div>

                    <div>
                        <input
                            type='password'
                            placeholder='Enter your password...'
                            onChange={password2Handler}
                        />
                    </div>
                    {notMatch && <p className='error'>Password does not match</p>}
                    <p className='error'>{error}</p>
                </form>
                <button onClick={signUpHandler}>signup</button>
            </div>
        )
}

export default SignUp