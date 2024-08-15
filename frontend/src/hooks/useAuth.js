import React from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const userEmail = useSelector((state) => state.auth.userEmail);

  return { userEmail };
};
export { useAuth };
