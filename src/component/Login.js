import React from "react";

function Login() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    alert("This is your username: " + userName);
    setUserName("");
    setPassword("");
  };

  return (
    <>
      <h1>Login</h1>

      <div>
        <label>Username: </label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </>
  );
}

export default Login;