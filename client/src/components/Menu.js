import { Button, Flex, HStack, IconButton } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";

const Menu = () => {
  return (
    <Flex justifyContent="space-between" w="100%">
      <IconButton as={AiOutlinePlus} variant="onlyIcon" />
      <HStack spacing={6}>
        <Button variant="transparent">All Buckets</Button>
        <Button variant="transparent">All Lists</Button>
      </HStack>
      <HStack>
        <IconButton as={AiOutlineUnorderedList} variant="onlyIcon" />
        <IconButton as={BsGrid3X3Gap} variant="onlyIcon" />
      </HStack>
    </Flex>
  );
};

export default Menu;
