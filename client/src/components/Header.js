
import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, logout } from "../features/auth/authSlice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
      dispatch(logout());
      dispatch(reset());
      navigate("/login");
    };

  return (
    <div>Header
         <Button onClick={onLogout}>Log out</Button>
    </div>
  )
}

export default Header