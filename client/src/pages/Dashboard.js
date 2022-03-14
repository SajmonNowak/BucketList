import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BucketCard from "../components/BucketCard";
import Header from "../components/Header";

const testBucket = {
  name: "Travel to Madeira",
  descr: "",
  date: "01.02.2022",
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("login");
    }
  }, [user, navigate, dispatch]);

  return (
    <>
      <Header />
      <Box p="50px">
        <Heading w="100%" textAlign="center">
          Welcome {user.name}
        </Heading>
        <Flex
          mt="50px"
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button>Add Bucket</Button>
          <Flex>
            <BucketCard bucketData={testBucket} />
            <BucketCard bucketData={testBucket} />
            <BucketCard bucketData={testBucket} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Dashboard;
