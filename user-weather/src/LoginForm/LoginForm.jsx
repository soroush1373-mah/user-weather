import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  //state for input field
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //hardcoded credentials
  const correctUser = "mohamad";
  const correctPass = "123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUser && password === correctPass) {
      setError("");
      navigate("./Weather");
    } else {
      setError("invalid username or password");
    }
  };
  return (
    <div>
      <div className="login-page">
        <div className="login-form">
          <h2>login</h2>
          {/* username */}
          <div className="input-container">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="input-container">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" onClick={handleLogin}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
