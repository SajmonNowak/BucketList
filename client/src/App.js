import { Container } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import ProtectedLayout from "./ProtectedLayout";

const App = () => {
  return (
    <Router>
      <Container maxW="100vw" p="0">
        <Routes>
          <Route element={<PublicLayout />} path="/" />
          <Route element={<ProtectedLayout />} path="/app" />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
