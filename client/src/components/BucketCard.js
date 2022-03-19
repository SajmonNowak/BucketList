import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import placeholder from "../files/madeira.jpg";

const BucketCard = ({ bucketData, setModalBucket }) => {

  const openBucket = () => {
    setModalBucket(bucketData);
  };

  return (
    <Flex position="relative" flexDir="column" onClick={openBucket} width="200px" height="150px" borderRadius="20px" margin="20px">
      <Image  src={placeholder} objectFit="cover" width="100" height="100%"/>
      <Flex position="absolute" height="100%" width="100%" justifyContent={"center"} alignItems={"center"}>
      <Heading as="h4" fontSize={20} color="white" >{bucketData.name}</Heading>
      </Flex>
    </Flex>
  );
};

export default BucketCard;
