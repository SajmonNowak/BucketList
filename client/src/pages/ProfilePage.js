import React, { useEffect, useState } from "react";
import {
    Avatar,
    Container,
    Flex,
    Text,
  } from "@chakra-ui/react";
  import { useDispatch, useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import BucketCard from "../components/BucketCard";
  import BucketModal from "../components/BucketModal";
  import MobileFooter from "../components/ProtectedFooter";
  import ProfileMenu from "../components/ProfileMenu";

const ProfilePage = ({user}) => {
  return (
    <>
    <Flex flexDir="row" alignItems="center" justify="center" mt="2rem">
      <Avatar name={user && user.name} size="lg" mr="1rem" />
      <Text fontSize="2xl" fontWeight="bold">
        {user && user.name}
      </Text>
    </Flex>
    <ProfileMenu />
  </>
  )
}

export default ProfilePage