import {
  Box,
  Button,
  Center,
  Flex,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";

const SignUpSucessPage = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box p={8} borderRadius="10px" mt="20vh" bgColor="teal.400">
        <Text fontSize={34} color="white">
          <span style={{ fontWeight: "bold" }}>Gratulations!</span> <br />
          You are a part of <span style={{ fontWeight: "bold" }}>WeBucket</span>
          !
        </Text>
        <Text fontSize={18} style={{ marginTop: "20px" }}>
          You can return and log in with your new Account :)
        </Text>
        <Center mt={12}>
          <Link as={ReactLink} to="/app">
            <Button leftIcon={<BsArrowReturnLeft />}>Return</Button>
          </Link>
        </Center>
      </Box>
    </Flex>
  );
};

export default SignUpSucessPage;
