import React, { useContext } from 'react'

import AuthContext from '../store/authContext'




function VerifyEmail() {
    const authCtx = useContext(AuthContext)

    const verifyEmailHandler = async() => {
        const emailResponse = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAoGAsZsuJRKb9uEanWU6JcByiJ50LyJZ0',
            {
                method: 'POST',
                body: JSON.stringify({
                    'requestType': "VERIFY_EMAIL",
                    'idToken': authCtx.token  
                }),
                headers: {
                    'Content-Type': 'application/json'
                } 
                }
            )
            const dat =await emailResponse.json()
        console.log(dat)
    }
  return (
    <div onClick={verifyEmailHandler} className='verify'>VerifyEmail</div>
  )
}

export default VerifyEmail