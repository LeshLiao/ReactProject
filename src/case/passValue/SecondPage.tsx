import React, { Component, useEffect, useState } from 'react'
import { usePayment } from './PassContext';


export default function SecondPage() {
  const { paymentValue } = usePayment();

  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log('paymentValue=' + paymentValue);
  }, [paymentValue]);

  return (
    <>
      <div>Get Value: {paymentValue}</div>
      <button onClick={() => handleCount()}>Add 1</button>
      <div>Count:{count}</div>
    </>
  );
}
