// import React from "react";

// function Login() {
//   const [userName, setUserName] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const handleSubmit = () => {
//     alert("This is your username: " + userName);
//     setUserName("");
//     setPassword("");
//   };

//   return (
//     <>
//       <h1>Login</h1>

//       <div>
//         <label>Username: </label>
//         <input
//           type="text"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//       </div>

//       <div>
//         <label>Password: </label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       <div>
//         <button onClick={handleSubmit}>Login</button>
//       </div>
//     </>
//   );
// }

// export default Login;

import React, { useState } from 'react'
import Buttons from './Buttons';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [userHasAnAccount, setUserHasAnAccount] = useState(true); 

    const handleSubmit = () => {
        alert("This is your user name: "+userName+ " and your password is "+password);
        setUserName('');
        setPassword('');
    }

    const changeState = () => {
        setUserHasAnAccount(!userHasAnAccount);
    }
    
    
  return (
    <>
   { userHasAnAccount ? (
    <div>
           <h1>Login</h1>
           
        <div>
            <label >User Name: </label> 
            <input type='text' value={userName} 
            onChange={(e)=>setUserName(e.target.value)} placeholder='User Name'/>
        </div>
        <div>
            <label >Password: </label> 
            <input type='password' value={password} 
            onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
        </div>
        <div>
            <Buttons label="Login" changeParameter={handleSubmit}/> 
          
        </div>
        <div>
            <span> Don't you have an account?</span>
             <Buttons label="Sign Up" changeParameter={changeState} />
        </div>
    </div>
   ) : (
    <div>
        <h1>Sign Up</h1>
           
        <div>
            <label >First Name: </label> 
            <input type='text' value={userName} 
            onChange={(e)=>setUserName(e.target.value)} placeholder='Enter first Name'/>
        </div>
        <div>
            <label >Last Name: </label> 
            <input type='text' value={password} 
            onChange={(e)=>setPassword(e.target.value)} placeholder='Enter last Name'/>
        </div>
        <div>
            <label >Gender: </label> 
           <select>
            <option>MALE</option>
            <option>FEMALE</option>
           </select>
        </div>
        <div>
            <Buttons label="Create An account" changeParameter={handleSubmit} />
        </div>
        <div>
            <span> already have an account?</span>
            <Buttons label="Login" changeParameter={changeState} />
        </div>
    </div>
   )
    }
    </>
  )
}

export default Login