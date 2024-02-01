import React, { Component, useEffect } from 'react'
import { usePayment } from '../components/PassContext';


export default function SecondPage() {
  const { paymentValue } = usePayment();


  useEffect(() => {
    console.log('paymentValue=' + paymentValue);
  }, [paymentValue]);

  return (
    <>
      <div>Get Value: {paymentValue}</div>
    </>
  );
}
