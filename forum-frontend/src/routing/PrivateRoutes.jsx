import React, { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import auth from "../services/authService";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = auth.getCurrentUser();
  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoutes;
