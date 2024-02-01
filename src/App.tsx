import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './AppRoute';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <AppRoutes/>
    </>
  );
}

export default App;
