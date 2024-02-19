import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />

        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/us" element={<UsPage />} />
        <Route path="/foundation" element={<FoundationPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="/donate" element={<LoginPage />} />
        <Route path="/organize" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
