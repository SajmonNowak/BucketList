import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BucketCard from "../components/BucketCard";
import BucketModal from "../components/BucketModal";
import Header from "../components/Header";
import Menu from "../components/Menu";

const testBucket = {
  name: "Travel to Madeira",
  descr: "",
  date: "01.02.2022",
};

const Dashboard = () => {
const [ modalBucket,setModalBucket] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  return (
    <>
      <Header />
      <Center>
        <Box p="50px" maxW="1200px">
          <Heading w="100%" textAlign="center">
            Welcome {user && user.name}
          </Heading>
          <Flex
            mt="50px"
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Menu />
            <Flex w="100%" justifyContent="space-around">
              <BucketCard bucketData={testBucket} setModalBucket={setModalBucket}/>
              <BucketCard bucketData={testBucket} />
              <BucketCard bucketData={testBucket} />
            </Flex>
          </Flex>
        </Box>
      </Center>
      {modalBucket && <BucketModal bucketData={modalBucket}/>}
    </>
  );
};

export default Dashboard;
