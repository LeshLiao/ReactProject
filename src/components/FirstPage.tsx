import React, { Component } from 'react'
import { usePayment } from '../components/PassContext';
import { Link } from 'react-router-dom';


export default function FirstPage() {
    const totalPrice = "99";
    const { setPayment } = usePayment();
    return (
      <>
        <div>FirstPage</div>
        <Link to="/secondPage" onClick={() => setPayment(totalPrice)}>
        Checkout
        </Link>
      </>
    )
}
