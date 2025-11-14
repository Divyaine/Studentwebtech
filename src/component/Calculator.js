import React, { useState } from "react";

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [activeInput, setActiveInput] = useState("first"); 

  
  const handleNumberClick = (num) => {
    if (operator === "" || activeInput === "first") {
      const newValue = firstNumber + num;
      setFirstNumber(newValue);
      setActiveInput("first");
    } else {
      const newValue = secondNumber + num;
      setSecondNumber(newValue);
      setActiveInput("second");
    }
  };

  
  const handleOperatorClick = (op) => {
    if (firstNumber === "") return;
    setOperator(op);
    setActiveInput("second"); 
  };

  
  const handleDecimal = () => {
    if (operator === "" || activeInput === "first") {
      if (!firstNumber.includes(".")) {
        const newValue = firstNumber + ".";
        setFirstNumber(newValue);
        setActiveInput("first");
      }
    } else {
      if (!secondNumber.includes(".")) {
        const newValue = secondNumber + ".";
        setSecondNumber(newValue);
        setActiveInput("second");
      }
    }
  };

 
  const handleClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperator("");
    setResult("");
    setActiveInput("first");
  };


  
  const handleEqual = () => {
    if (firstNumber === "" || operator === "" || secondNumber === "") return;

    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    let calcResult = 0;

    switch (operator) {
      case "+": calcResult = a + b; break;
      case "-": calcResult = a - b; break;
      case "*": calcResult = a * b; break;
      case "/": calcResult = b === 0 ? "ERR" : a / b; break;
      case "%": calcResult = a % b; break;
      case "^": calcResult = Math.pow(a, b); break;
      default: return;
    }

    setResult(String(calcResult));
    setActiveInput("first"); 
  };

  
  const handleFirstInputFocus = () => {
    setActiveInput("first");
  };

  const handleSecondInputFocus = () => {
    if (operator !== "") {
      setActiveInput("second");
    }
  };

  
  const btn = {
    padding: "12px",
    margin: "3px",
    fontSize: "16px",
    borderRadius: "8px",
    width: "55px",
    background: "black",
    color: "white",
    cursor: "pointer",
    border: "none",
  };

  const op = { ...btn, background: "orange" };

  return (
    <div style={{ width: "280px", margin: "20px auto", textAlign: "center" }}>
      
      {/* FIRST VALUE */}
      <div style={{ marginBottom: "12px", textAlign: "left" }}>
        <div style={{ fontSize: "12px", marginBottom: "3px", fontWeight: "bold" }}>
          FIRST VALUE
        </div>
        <div
          onClick={handleFirstInputFocus}
          style={{
            height: "30px",
            background: "#f0f0f0",
            borderRadius: "5px",
            fontSize: "14px",
            padding: "5px 10px",
            textAlign: "right",
            border: activeInput === "first" ? "2px solid #007bff" : "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            cursor: "pointer",
            backgroundColor: activeInput === "first" ? "#e6f3ff" : "#f0f0f0",
            transition: "all 0.2s ease"
          }}
        >
          {firstNumber }
        </div>
      </div>

      {/* SECOND VALUE */}
      <div style={{ marginBottom: "12px", textAlign: "left" }}>
        <div style={{ fontSize: "12px", marginBottom: "3px", fontWeight: "bold" }}>
          SECOND VALUE
        </div>
        <div
          onClick={handleSecondInputFocus}
          style={{
            height: "30px",
            background: "#f0f0f0",
            borderRadius: "5px",
            fontSize: "14px",
            padding: "5px 10px",
            textAlign: "right",
            border: activeInput === "second" ? "2px solid #007bff" : "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            cursor: operator !== "" ? "pointer" : "not-allowed",
            backgroundColor: activeInput === "second" ? "#e6f3ff" : "#f0f0f0",
            opacity: operator !== "" ? 1 : 0.6,
            transition: "all 0.2s ease"
          }}
        >
          {secondNumber }
        </div>
      </div>

      {/* OUTPUT */}
      <div style={{ marginBottom: "15px", textAlign: "left" }}>
        <div style={{ fontSize: "12px", marginBottom: "3px", fontWeight: "bold" }}>
          OUTPUT
        </div>
        <div
          style={{
            height: "30px",
            background: "#f0f0f0",
            borderRadius: "5px",
            fontSize: "14px",
            padding: "5px 10px",
            textAlign: "right",
            border: "1px solid #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          {result || "Result"}
        </div>
      </div>

      {/* Number + Operator Rows */}
      <div>
        <button style={btn} onClick={() => handleNumberClick("7")}>7</button>
        <button style={btn} onClick={() => handleNumberClick("8")}>8</button>
        <button style={btn} onClick={() => handleNumberClick("9")}>9</button>
        <button style={op} onClick={() => handleOperatorClick("/")}>÷</button>
      </div>

      <div>
        <button style={btn} onClick={() => handleNumberClick("4")}>4</button>
        <button style={btn} onClick={() => handleNumberClick("5")}>5</button>
        <button style={btn} onClick={() => handleNumberClick("6")}>6</button>
        <button style={op} onClick={() => handleOperatorClick("*")}>×</button>
      </div>

      <div>
        <button style={btn} onClick={() => handleNumberClick("1")}>1</button>
        <button style={btn} onClick={() => handleNumberClick("2")}>2</button>
        <button style={btn} onClick={() => handleNumberClick("3")}>3</button>
        <button style={op} onClick={() => handleOperatorClick("-")}>-</button>
      </div>

      <div>
        <button style={btn} onClick={handleDecimal}>.</button>
        <button style={btn} onClick={() => handleNumberClick("0")}>0</button>
        <button style={op} onClick={() => handleOperatorClick("+")}>+</button>
        <button style={op} onClick={handleEqual}>=</button>
      </div>

      <div>
        <button style={op} onClick={() => handleOperatorClick("%")}>M</button>
        <button style={op} onClick={() => handleOperatorClick("^")}>∧</button>
        <button style={{ ...btn, background: "red" }} onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
}