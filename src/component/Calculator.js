// import React, { useState } from 'react';

// function Calculator() {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState('');
//   const [lastOperation, setLastOperation] = useState(null);

//   const handleAddition = () => {
//     const res = Number(num1) + Number(num2);
//     setResult(res);
//     setLastOperation(() => () => res);
//   };

//   const handleSubtraction = () => {
//     const res = Number(num1) - Number(num2);
//     setResult(res);
//     setLastOperation(() => () => res);
//   };

//   const handleMultiplication = () => {
//     const res = Number(num1) * Number(num2);
//     setResult(res);
//     setLastOperation(() => () => res);
//   };

//   const handleDivision = () => {
//     if (Number(num2) === 0) {
//       setResult('Cannot divide by zero');
//     } else {
//       const res = Number(num1) / Number(num2);
//       setResult(res);
//       setLastOperation(() => () => res);
//     }
//   };

//   const handlePower = () => {
//     const res = Math.pow(Number(num1), Number(num2));
//     setResult(res);
//     setLastOperation(() => () => res);
//   };

//   const handleModulus = () => {
//     const res = Number(num1) % Number(num2);
//     setResult(res);
//     setLastOperation(() => () => res);
//   };

//   const handleEquals = () => {
//     if (lastOperation) {
//       setResult(lastOperation());
//     } else {
//       setResult('No operation performed yet');
//     }
//   };

//   const handleClear = () => {
//     setNum1('');
//     setNum2('');
//     setResult('');
//     setLastOperation(null);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '40px' }}>
//       <h1>React Calculator</h1>

//       <input
//         type="number"
//         placeholder="Enter first number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//         style={{ margin: '30px', padding: '10px' }}
//       />

//       <input
//         type="number"
//         placeholder="Enter second number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//         style={{ margin: '30px', padding: '10px' }}
//       />

//       <div style={{ marginTop: '10px' }}>
//         <button onClick={handleAddition}>+</button>
//         <button onClick={handleSubtraction}>-</button>
//         <button onClick={handleMultiplication}>*</button>
//         <button onClick={handleDivision}>/</button>
//         <button onClick={handlePower}>^</button>
//         <button onClick={handleModulus}>%</button>
//         <button onClick={handleEquals}>=</button>
//         <button onClick={handleClear}>Clear</button>
//       </div>

//       <h2 style={{ marginTop: '20px' }}>Result: {result}</h2>
//     </div>
//   );
// }

// export default Calculator;

import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");

//   const handleClick = (value) => {
//   setDisplay((prev) => {
//     if (prev.length >= 21) {
//       return prev; 
//     }
//     return prev + value;
//   });
// };

const handleClick = (value) => {
  setDisplay((prev) => {
    // Limit 21 characters
    if (prev.length >= 21) return prev;

    // Prevent multiple dots in the same number
    if (value === ".") {
      const parts = prev.split(/[\+\-\*\/\^\%]/); // split by operators
      const lastPart = parts[parts.length - 1];

      if (lastPart.includes(".")) {
        return prev; // block second dot in same number
      }
    }

    return prev + value;
  });
};



  const handleClear = () => {
    setDisplay("");
  };

  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

const handleCalculate = () => {
  try {
    // Convert ^ to ** for power
    const expression = display.replace(/\^/g, "**");
    
    // eslint-disable-next-line no-eval
    const result = eval(expression);

    setDisplay(String(result));
  } catch {
    setDisplay("Error");
  }
};


  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        backgroundColor: "#1c1c1c",
        borderRadius: "20px",
        padding: "20px",
        color: "white",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>React Calculator</h2>

      <div
        style={{
          backgroundColor: "#000",
          padding: "15px",
          borderRadius: "10px",
          textAlign: "right",
          fontSize: "24px",
          marginBottom: "15px",
          minHeight: "40px",
          color: "#00ffb3",
        }}
      >
        {display || "0"}
      </div>

      {/* Operator Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "10px" }}>
        {["+", "-", "*", "/", "^", "%"].map((op) => (
          <button
            key={op}
            onClick={() => handleClick(op)}
            style={{
              backgroundColor: "#ff9500",
              border: "none",
              borderRadius: "10px",
              padding: "15px",
              fontSize: "18px",
              cursor: "pointer",
              color: "white",
            }}
          >
            {op}
          </button>
        ))}
      </div>

      {/* Number Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", ].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num)}
            style={{
              backgroundColor: "#000",
              border: "none",
              borderRadius: "10px",
              padding: "15px",
              fontSize: "18px",
              cursor: "pointer",
              color: "white",
            }}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Extra Buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
        <button
          onClick={handleDelete}
          style={{
            backgroundColor: "#666",
            border: "none",
            borderRadius: "10px",
            padding: "15px 25px",
            fontSize: "16px",
            color: "white",
            cursor: "pointer",
          }}
        >
          DELETE
        </button>

        <button
          onClick={handleClear}
          style={{
            backgroundColor: "#ff3b30",
            border: "none",
            borderRadius: "10px",
            padding: "15px 25px",
            fontSize: "16px",
            color: "white",
            cursor: "pointer",
          }}
        >
          CLEAR
        </button>

        <button
          onClick={handleCalculate}
          style={{
            backgroundColor: "#00ff7f",
            border: "none",
            borderRadius: "10px",
            padding: "15px 25px",
            fontSize: "16px",
            color: "black",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;



