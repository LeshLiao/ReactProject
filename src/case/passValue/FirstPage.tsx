import React, { Component, useEffect, useState } from 'react'
import { usePayment } from './PassContext';
import { Link } from 'react-router-dom';


export default function FirstPage() {
    const [resourceType, setResourceType] = useState('');
    const totalPrice = "99";
    const { setPayment } = usePayment();

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    // .then(response => response.json())
    // .then(json => console.log(json))

    // console.log('resource changed');
  }, [resourceType]);

    return (
      <>
        <h1>FirstPage</h1>
        <Link to="/secondPage" onClick={() => setPayment(totalPrice)}>
        Checkout
        </Link>

        <button onClick={() => setResourceType('111')}>111</button>
        <button onClick={() => setResourceType('222')}>222</button>
        <button onClick={() => setResourceType('333')}>333</button>
        <h1>{resourceType}</h1>
      </>
    )
}