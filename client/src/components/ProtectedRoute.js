import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user } = useSelector((state) => state.auth);
  
  return user ? <Outlet /> : <Navigate to="/" />

};

export default ProtectedRoute;
