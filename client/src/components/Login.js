import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import ChakraInput from "./ChakraInput";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const { user, isError, isSuccess } = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(data));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
    }

    if (isError) {
      setErrorMessage("Wrong e-mail or password. Try again.");
    }

    dispatch(reset());
  }, [user, isSuccess, isError, navigate, dispatch]);

  const checkIfEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing="10px">
        <ChakraInput
          label="E-Mail"
          id="email"
          placeholder="Max@mustermail.com"
          register={register}
          errors={errors}
          validation={{
            isEmail: (v) => checkIfEmail(v) || "Player enter a real E-Mail",
          }}
        />
        <ChakraInput
          label="Password"
          id="password"
          placeholder="password"
          register={register}
          errors={errors}
        />
      </VStack>
      <Box padding="10px 0">
        <Text color="red">{errorMessage}</Text>
      </Box>
      <Flex w="100%">
        <VStack w="100%">
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
            width="100%"
          >
            Log In
          </Button>
          <Link to="/register" style={{ width: "100%" }}>
            <Button width="100%" mt="5px">
              Create new Account
            </Button>
          </Link>
        </VStack>
      </Flex>
    </form>
  );
};

export default Login;
