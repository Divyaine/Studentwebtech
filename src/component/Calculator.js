import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [lastOperation, setLastOperation] = useState(null);

  const handleAddition = () => {
    const res = Number(num1) + Number(num2);
    setResult(res);
    setLastOperation(() => () => res);
  };

  const handleSubtraction = () => {
    const res = Number(num1) - Number(num2);
    setResult(res);
    setLastOperation(() => () => res);
  };

  const handleMultiplication = () => {
    const res = Number(num1) * Number(num2);
    setResult(res);
    setLastOperation(() => () => res);
  };

  const handleDivision = () => {
    if (Number(num2) === 0) {
      setResult('Cannot divide by zero');
    } else {
      const res = Number(num1) / Number(num2);
      setResult(res);
      setLastOperation(() => () => res);
    }
  };

  const handlePower = () => {
    const res = Math.pow(Number(num1), Number(num2));
    setResult(res);
    setLastOperation(() => () => res);
  };

  const handleModulus = () => {
    const res = Number(num1) % Number(num2);
    setResult(res);
    setLastOperation(() => () => res);
  };

  const handleEquals = () => {
    if (lastOperation) {
      setResult(lastOperation());
    } else {
      setResult('No operation performed yet');
    }
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setLastOperation(null);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>React Calculator</h1>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: '30px', padding: '10px' }}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: '30px', padding: '10px' }}
      />

      <div style={{ marginTop: '10px' }}>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
        <button onClick={handlePower}>^</button>
        <button onClick={handleModulus}>%</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <h2 style={{ marginTop: '20px' }}>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
