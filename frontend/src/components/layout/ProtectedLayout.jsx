import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedLayout = () => {
  const email = useAuth().email || "";

  return <>{email ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedLayout;
