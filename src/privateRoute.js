import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import { useAuth } from './userContext';



function PrivateRoute({component:Component,...rest}) {
    //const currentUser=useSelector(selectUser);
    const {currentUser}=useAuth()
    return (
    <div>
        <Route {...rest} 
        render={(props)=>{return currentUser?
            <Component {...props}/>
            :<Redirect to='/'/>}}
        />
       
    </div>
        
    )
}

export default PrivateRoute
