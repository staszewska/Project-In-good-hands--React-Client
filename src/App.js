import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import AboutUs from "./components/AboutUs";
import RegisterPage from "./components/RegisterPage";

function App() {
  const [userData, setUserData] = useState(null);

  function handleUserLogIn(userData) {
    setUserData(userData);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home userData={userData} />} />
        <Route
          path="/login"
          element={
            <LoginPage onUserLogIn={(userData) => handleUserLogIn(userData)} />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/us" element={<UsPage />} />
        <Route path="/foundation" element={<FoundationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<LoginPage />} />
        <Route path="/organize" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
