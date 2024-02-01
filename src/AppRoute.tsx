import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from './components/FirstPage';
import { PaymentProvider } from './components/PassContext';
import SecondPage from './components/SecondPage';

export default function AppRoutes() {
  return (
    <PaymentProvider>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/secondPage" element={<SecondPage/>}/>
      </Routes>
    </PaymentProvider>
  );
}