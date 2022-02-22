import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

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
    </div>
  );
};

export default Dashboard;
