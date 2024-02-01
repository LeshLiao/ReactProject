import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstPage from './components/FirstPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage/>}/>
      {/* <Route path="/login" element={<LoginPage/>}/> */}
    </Routes>
  );
}