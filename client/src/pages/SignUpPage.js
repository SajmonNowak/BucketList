import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BsArrowReturnLeft } from "react-icons/bs";

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    axios
      .post("/sign-up", {
        firstName: values.firstName,
        lastName: values.surname,
        email: values.email,
        username: values.username,
        password: values.password,
      })
      .then(function (response) {
        navigate("/sign-up/sucess");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Container maxW={"400px"} h="100vh">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="100%"
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              id="firstName"
              placeholder="First Name"
              type="text"
              {...register("firstName", {
                required: "This is required",
                minLength: { value: 2, message: "Please enter a name" },
              })}
            />
            <FormLabel htmlFor="surname" mt={4}>
              Last Name
            </FormLabel>
            <Input
              id="surname"
              placeholder="Last Name"
              type="text"
              {...register("surname", {
                required: "This is required",
                minLength: { value: 2, message: "Please enter a name" },
              })}
            />
            
            <FormLabel htmlFor="eMail" mt={4}>
              E-Mail Adress
            </FormLabel>
            <Input
              id="eMail"
              placeholder="E-Mail@adress.com"
              type="email"
              {...register("email", {
                required: "This is required",
                minLength: { value: 3, message: "Minimum length should be 3" },
              })}
            />
            <FormLabel mt={4} htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              placeholder="Username"
              type="text"
              {...register("username", {
                required: "This is required",
                minLength: { value: 3, message: "Username require at least 3 characters." },
              })}
            />
            <FormLabel htmlFor="password" mt={4}>
              Password
            </FormLabel>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              {...register("password")}
            ></Input>
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
            <Flex w="100%" justifyContent="center">
              <VStack w="200px">
                <Button
                  mt={8}
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                  width="100%"
                >
                  Sign Up
                </Button>
                <Box mt={4} w="100%">
                  <Link to="/">
                    <Button w="100%" leftIcon={<BsArrowReturnLeft />}>
                      Return
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </Flex>
          </FormControl>
        </form>
      </Flex>
    </Container>
  );
};

export default SignUpPage;
