import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosAddCircle } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ProtectedFooter = () => {
    const navigate = useNavigate();

    const openAddPage = () => {
        navigate("/add")
    };

  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      height="70px"
      width="100%"
      backgroundColor="gray.50"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem 2rem"
    >
      <Box>
        <Icon as={HiOutlineHome} w="40px" h="30px" />
      </Box>
      <Box onClick={openAddPage}>
        <Icon as={IoIosAddCircle} w="50px" h="50px" />
      </Box>
      <Box>
        <Icon as={CgProfile} w="30px" h="30px" />
      </Box>
    </Flex>
  );
};

export default ProtectedFooter;
