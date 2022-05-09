import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedFooter from "./components/ProtectedFooter";
import ProtectedRoute from "./components/ProtectedRoute";
import AddPage from "./pages/AddPage";
import Feed from "./pages/Feed";
import ProfilePage from "./pages/ProfilePage";

const ProtectedLayout = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route exact element={<Feed />} path="/app" />
          <Route exact element={<AddPage />} path="/app/add" />
          <Route exact element={<ProfilePage />} path="/app/profile" />
        </Route>
      </Routes>
      <ProtectedFooter />
    </>
  );
};

export default ProtectedLayout;
