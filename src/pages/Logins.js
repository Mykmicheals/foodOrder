import React from 'react'
// import { Link, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'




const initialState = {
    username: '',
    password: ''
}

function LoginPage() {
    const [loginError, setError] = useState(false)
    // const history = useHistory()

    const reducerFunc = (state, action) => {
        if (action.type === 'USERNAME') {
            return {
                username: action.val,
                password: action.val
            }

        }
        if (action.type === 'PASSWORD') {
            return {
                username: state.username,
                password: action.val
            }
        }

    }


    const [formState, dispatchFunc] = useReducer(reducerFunc, initialState)

    const userNameHandler = (event) => {
        dispatchFunc({
            type: 'USERNAME',
            val: event.target.value
        })
        setError(false)
    }

    const passwordHandler = (event) => {
        dispatchFunc({
            type: 'PASSWORD',
            val: event.target.value
        })
        setError(false)
    }

    const body = {
        username: formState.username,
        password: formState.password
    }

    const loginHandler = async (event) => {
        event.preventDefault()
        console.log(body)
        const response = await fetch('http://127.0.0.1:8000/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        const data = await response.json()
        console.log(data)
        if (data && data.token) {
            // history.replace('/')
        }
        else {
            setError(true)
        }

    }





    return (
        <div className='login'>
            <form className='login-form'>
                <h3 className='login-header'>Login</h3>

                {loginError && <h4 className='error'>Invalid Email and password combaination</h4>}
                <div>
                    <label>Username</label>
                    <input onChange={userNameHandler} placeholder='Enter your username...' />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='Enter your password...'
                        onChange={passwordHandler}
                    />
                </div>

                <p>Dont have an account? <Link to='/signup'>Signup</Link></p>
                <button onClick={loginHandler}>Log in</button>
            </form>
        </div>
    )
}

export default LoginPage