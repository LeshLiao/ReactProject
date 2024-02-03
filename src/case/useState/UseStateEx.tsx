import React, {useEffect, useState } from 'react'


export default function UseStateEx() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>UseStateEx</h1>
      <button onClick={() => handleCount()}>Add 1</button>
      <div>Count:{count}</div>
    </>
  );
}
