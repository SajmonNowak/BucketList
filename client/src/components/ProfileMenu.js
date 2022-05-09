import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const ProfileMenu = () => {
  return (
    <Box mt="2rem">
      <Flex justifyContent="space-between" w="80%" margin="auto" fontSize="sm" fontWeight="bold">
        <Box>Lists</Box>
        <Box color="grey">Buckets</Box>
        <Box color="grey">Achieved</Box>
      </Flex>
    </Box>
  );
};

export default ProfileMenu;
