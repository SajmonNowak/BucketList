import { Container } from "@chakra-ui/react";
import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignUpSucessPage from "./pages/SignUpSucessPage";

const App = () => {
  return (
    <Router>
      <Container maxW="100vw" p="0">
        <Routes>
          <Route exact element={<LandingPage />} path="/" />
          <Route exact element={<SignUpPage />} path="/sign-up" />
          <Route element={<SignUpSucessPage />} path="/sign-up/sucess" />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
