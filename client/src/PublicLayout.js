import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import SignUpSucessPage from "./pages/SignUpSucessPage";

const PublicLayout = () => {
  return (
      <>
    <Routes>
      <Route exact element={<LandingPage />} path="/" />
      <Route exact element={<Register />} path="/register" />
      <Route exact element={<SignUpSucessPage />} path="/register/sucess" />
    </Routes>
    </>
  );
};


export default PublicLayout;
