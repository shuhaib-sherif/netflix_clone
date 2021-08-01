import React,{useRef} from 'react'
import { auth } from '../../firebase';
import './ss.css'
import {useHistory} from 'react-router-dom'
import { useAuth } from '../../userContext';

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history=useHistory()
    const {signup}=useAuth()
    const {login}=useAuth()

   async function register(e)
   {
       e.preventDefault()
       try {
           
        await signup(emailRef.current.value,passwordRef.current.value)
        history.push('/home')

       } catch (error) {
           console.log(error)
       }
   }

   async function signIn(e)
   {
       e.preventDefault()
       try {
           await login(emailRef.current.value,passwordRef.current.value)
           history.push('/home')
           
       } catch (error) {
           console.log(error)
       }
   }

    return (
        <div className="signupScreen">
            <form >
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} placeholder='Password' type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span>
                    <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen
