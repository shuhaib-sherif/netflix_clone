import React from 'react';
import {useEffect} from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import { auth } from './firebase';
import {useDispatch,useSelector} from 'react-redux'
import { login, logout, selectUser } from './features/counter/userSlice';
import Profile from './components/profile/Profile';
import PrivateRoute from './privateRoute';
import { AuthProvider } from './userContext';
//Key Id
//rzp_test_1EPTXJeQEUrmGC
//Key Secret
//QhzeJl0tAyWDEG9DzpmSbgtR

function App() {
// const user=useSelector(selectUser);
// const  dispatch = useDispatch()

// useEffect(() => {
//  const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
//     if(userAuth)
//     {
//       dispatch(login({
//         uid:userAuth.uid,
//         email:userAuth.email,
//       }))
//       console.log(userAuth)
//     }
//     else {//logged out
//       dispatch(logout)
//     }
//   })
//  return unsubscribe
// }, [])



  return (
    <div className="App">
  
    <Router>
      <AuthProvider>
    
       <Switch>
      <Route exact path='/'>
       <Login/>
      </Route>
      
        <PrivateRoute path="/profile">
          <Profile/>
          </PrivateRoute>
        <PrivateRoute exact path="/home">
             <HomeScreen />
          </PrivateRoute>
         
        </Switch>
    
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
