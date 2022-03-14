import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, logout } from "../features/auth/authSlice";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <Flex padding="20px" justifyContent="space-between">
      <Box>
        <Heading color="teal.400">WeeBucket</Heading>
      </Box>
      <HStack spacing="10px">
        <IconButton
          as={CgProfile}
          w="35px"
          h="35px"
          bgColor="transparent"
          _hover={{ background: "transparent", transform: "scale(1.1)" }}
        />
        <IconButton
          as={AiOutlineLogout}
          w="35px"
          h="35px"
          bgColor="transparent"
          _hover={{ background: "transparent", transform: "scale(1.1)" }}
        />
      </HStack>
    </Flex>
  );
};

export default Header;
