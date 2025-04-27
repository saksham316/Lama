import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <div className="authForm">
        <Outlet />
      </div>
    </>
  );
};

export default DefaultLayout;
