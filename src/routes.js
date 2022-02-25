import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/landing/landing';
import SignIn from './components/signin/Signin';
import Register from './components/register/register';


export default(
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/register" component={Register}/>
    </Switch>
);