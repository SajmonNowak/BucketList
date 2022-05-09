import {
  Avatar,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BucketCard from "../components/BucketCard";
import BucketModal from "../components/BucketModal";
import MobileFooter from "../components/ProtectedFooter";
import ProfileMenu from "../components/ProfileMenu";

const testBucket = {
  name: "Travel to Madeira",
  descr: "",
  date: "01.02.2022",
};

const Dashboard = ({children}) => {
  const [modalBucket, setModalBucket] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate, dispatch]);

  return (
    <>
     <Container>
        {children}
      <MobileFooter />
     </Container>
      {modalBucket && <BucketModal bucketData={modalBucket} />}
    </>
  );
};

export default Dashboard;
