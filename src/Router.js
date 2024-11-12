import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Employee from "./Employee";
import GenerateCaptcha from "./GenerateCaptcha";
import GenerateOtp from "./GenerateOtp";
import Navbar from './Navbar';
import Home from './Home';
import Employeedata from './Employeedata';

function Router() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/employee' element={<Employee />} ></Route>
        <Route path='/captcha' element={<GenerateCaptcha />} ></Route>
        <Route path='/otp' element={<GenerateOtp /> } ></Route>
        <Route path="/employee/:employee_id" element={<Employeedata />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router