import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from './case/passValue/FirstPage';
import { PaymentProvider } from './case/passValue/PassContext';
import SecondPage from './case/passValue/SecondPage';
import UseStateEx from './case/useState/UseStateEx';
import Home from './components/Home';
import UseReducerEx from './case/useReducer/UseReducerEx';

export default function AppRoutes() {
  return (
    <PaymentProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/firstPage" element={<FirstPage/>}/>
        <Route path="/secondPage" element={<SecondPage/>}/>
        <Route path="/testUseState" element={<UseStateEx/>}/>
        <Route path="/testUseReducer" element={<UseReducerEx/>}/>
      </Routes>
    </PaymentProvider>
  );
}