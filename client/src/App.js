import {
  Box,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import LandingPage from "./pages/LandingPage";

const App = () => {

  return (
    <Container maxW="100vw" p="0" >
      <LandingPage />
    </Container>
  );
};

export default App;
