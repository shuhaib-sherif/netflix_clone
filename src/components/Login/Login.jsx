import React from 'react'
import './ll.css'
import {useState} from 'react'
import SignInScreen from '../signInScreen/SignInScreen';

function Login() {
const [signIn,setSignIn]=useState(false);
function Log(e)
{
    e.preventDefault()
    setSignIn(true)
    

}

    return (
        <div className='login'>
            <div className="login_back">
                <img className="login_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button onClick={()=>setSignIn(true)}className="login_button">
                    Sign In
                </button>
                <div className="back_gradient"></div>
                <div className="bodyy">
                {
                    signIn ?(<SignInScreen/>):
                    (<>
                        <h1>Unlimited films, TV Programmes And More.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
    
                        <div className="log_input">
                            <form >
                                <input type="email" placeholder="Email Address" />
                                <button onClick={()=>setSignIn(true)}className="log_button">GET STARTED</button>
                            </form>
                        </div>
                        </>)
                }

                    
                </div>

            </div>
            
        </div>
    )
}

export default Login
 