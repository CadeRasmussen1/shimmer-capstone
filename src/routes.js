import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Landing } from './components/landing/landing.js';
import { Signin } from './components/signin/Signin.js';
import { Register } from './components/register/register.js';


export default(
    <Routes>
        <Route exact path="/" component={Landing}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/register" component={Register}/>
    </Routes>
);