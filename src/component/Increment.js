import React from 'react';

function Increment(props) {
const [number, setNumber] = React.useState(0);
   // let number = 0;
    const incrementValue =() => {
      //number = number +1;
      setNumber(number +1);
      console.log("Incremented Value:", +number);
    }
     
    return (
        <div>
            <p>This is the increment {number}</p>
            <button onClick={incrementValue}>Increment</button>
        </div>
    );
}

export default Increment;