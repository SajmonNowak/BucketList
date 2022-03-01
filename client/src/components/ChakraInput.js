import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const ChakraInput = ({ label, id, register, errors, validation, ...rest }) => {
  return (
    <FormControl isInvalid={errors?.[id]?.message}>
      <FormLabel>{label}</FormLabel>
      <Input
        {...rest}
        {...register(id, {
          required: "This is required",
          minLength: { value: 3, message: "Your input is too short." },
          validate: { ...validation },
        })}
      ></Input>
      <FormErrorMessage>{errors?.[id]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default ChakraInput;
