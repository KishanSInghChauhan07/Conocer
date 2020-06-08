import React from 'react';
import './App.css';
import {Route,BrowserRouter,Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.Component';
import HomePage from './Components/HomePage/HomePage.Component';
import Profile from './Components/Profile/Profile.Component';
import SignIn from './Components/Sign In/SignIn.Component';
import SignUp from './Components/Sign Up/SignUp.Component';

function App() {
  return (
    <div style={{paddingTop:'68px'}}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component= { HomePage } />
        <Route exact path='/Profile' component= { Profile } />
        <Route exact path='/SignIn' component= { SignIn } />
        <Route exact path='/SignUp' component= { SignUp } />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
