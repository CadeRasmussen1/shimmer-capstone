import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/landing/landing';
import Signin from './components/signin/Signin';
import Register from './components/register/register';
import Mainpage from './components/songcard/mainpage';


export default(
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/mainpage" element={<Mainpage/>}/>
    </Routes>
);