import React from "react";
import { Box, Center, Flex, Heading, HStack } from "@chakra-ui/react";
import Login from "../components/Login";
import Emoji from "../components/Emoji";

const LandingPage = () => {
  return (
    <HStack w="100%" h="100vh">
      <Box h="100%" w="60%" p="60px">
        <Center h="100%">
          <Flex
            w="100%"
            justifyContent="right"
            alignItems="center"
            h="80%"
            borderRight="2px solid"
            borderColor="teal.400"
            pr={["0px", "60px", "60px", "120px"]}
          >
            <Box h="300px" w="80%" minW="500px">
              <Flex direction="column" alignItems="end">
                <Heading
                  as="h1"
                  fontSize={64}
                  textAlign="right"
                  lineHeight={"none"}
                >
                  Welcome to <br />
                  <Box as="span" color="teal.400">
                    WeBucket
                  </Box>
                </Heading>
                <Box w="80%">
                  <Heading
                    as="h2"
                    mt={8}
                    fontSize={24}
                    fontWeight="thin"
                    textAlign="right"
                  >
                    Get Inspiration, create bucket lists alone or with friends
                    and share!
                    <br />
                    <Box mt={16}>
                      <Emoji symbol="📝" />
                      <Emoji symbol="👨‍👨‍👧‍👦" />
                    </Box>
                  </Heading>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Center>
      </Box>
      <Box h="100%" w="40%">
        <Center h="100%">
          <Login />
        </Center>
      </Box>
    </HStack>
  );
};

export default LandingPage;
