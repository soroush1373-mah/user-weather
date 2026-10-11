import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./Weather/Weather";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </Router>
  );
};

export default App;
