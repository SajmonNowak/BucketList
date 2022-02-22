import { Container } from "@chakra-ui/react";
import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignUpSucessPage from "./pages/SignUpSucessPage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Container maxW="100vw" p="0">
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<LandingPage />} path="/login" />
          <Route exact element={<Register />} path="/register" />
          <Route element={<SignUpSucessPage />} path="/register/sucess" />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
