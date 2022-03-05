import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BucketCard from "../components/BucketCard";
import Header from "../components/Header";

const testBucket = {
  name: "Travel to Madeira",
  descr: "",
  date: "01.02.2022",
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    if(!user){
      navigate("login");
    }
    
  }, [user, navigate, dispatch]);

  return (
    <div>
      <Header />
      <h2>Hello {user && user.name}</h2>
      <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
        <Button>Add Bucket</Button>
        <Flex>
          <BucketCard bucketData={testBucket}/>
          <BucketCard bucketData={testBucket}/>
          <BucketCard bucketData={testBucket}/>
        </Flex>
      </Flex>
    </div>
  );
};

export default Dashboard;
