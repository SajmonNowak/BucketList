import React from "react";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          placeholder="username"
          type="text"
          
          {...register("name", {
            required: "This is required",
            minLength: { value: 3, message: "Minimum length should be 3" },
          })}
        />
        <FormLabel htmlFor="password" mt={4}>Password</FormLabel>
        <Input id="password" placeholder="Password" type="password" {...register("password")}>
        
        </Input>
         <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
        <Flex w="100%" justify="right" >
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit' pos="right" >
        Submit
      </Button> 

        </Flex>
      </FormControl>
    </form>
  );
};

export default Login;
