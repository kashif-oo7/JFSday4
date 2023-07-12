import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './login';
import RegisterForm from './signup';
import Navie from './dashboard';
import ContactPage from './contact';
import Home from './homes';
export default function Routing(){
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<RegisterForm/>}></Route>  
        <Route exact path='/' element={<Navie/>}></Route>  
        <Route exact path='/contact' element={<ContactPage/>}></Route>  
        <Route exact path='/home' element={<Home/>}></Route>  
        </Routes>
        </BrowserRouter>
    )
}
