import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    axios
      .post("/sign-up", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="eMail">E-Mail Adress</FormLabel>
        <Input
          id="eMail"
          placeholder="E-Mail@adress.com"
          type="text"
          {...register("eMail", {
            required: "This is required",
            minLength: { value: 3, message: "Minimum length should be 3" },
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
      </FormControl>
    </form>
  );
};

export default Login;
