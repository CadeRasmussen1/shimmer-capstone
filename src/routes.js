import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/landing/landing';
import SignIn from './components/signin/Signin';
import Register from './components/register/register';


export default(
    <Routes>
        <Route exact path="/" component={Landing}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/register" component={Register}/>
    </Routes>
);