import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(email, password)
  }
  return (
    <div className="login">
      <input
        type="text"
        placeholder="Enter Email"
        className="inputBox"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="inputBox"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin} className="appbutton" type="button">
        Log In
      </button>
    </div>
  );
};
export default Login;
