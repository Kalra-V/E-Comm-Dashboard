import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=> {
    const auth = localStorage.getItem('user');
    if(auth) {
      navigate("/");
    }
  }, [navigate])
  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
        method:'post',
        body: JSON.stringify({email,password}),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    result = await result.json();
    if(result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/')
      
    } else {
      alert("Wrong login credentials.")
    }
    console.log(result)
  }
  return (
    <div className="login">
      <h1>Login</h1>
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
