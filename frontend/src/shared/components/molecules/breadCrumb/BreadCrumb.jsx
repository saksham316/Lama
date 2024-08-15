import React from "react";
import { FcHome } from "react-icons/fc";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

const BreadCrumb = ({ crumbData = [] }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer ",
          textDecoration: "none",
          fontSize: "24px",
          color: "black",
          fontWeight: "bolder",
          fontFamily: "monospace",
        }}
      >
        <GoHome />
        <span>Home</span>
      </Link>
      {crumbData && crumbData.length ? (
        crumbData.map((data, index) => {
          return index === crumbData.length - 1 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer ",
                textDecoration: "none",
                fontSize: "1.5vw",
                color: "black",
                fontWeight: "bolder",
                fontFamily: "monospace",
              }}
              key={index}
            >
              /<span style={{ color: "#7e22ce" }}> {data.label}</span>
            </div>
          ) : (
            <Link
              to={`${data.path}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer ",
                textDecoration: "none",
                fontSize: "1.5vw",
                color: "black",
                fontWeight: "bolder",
                fontFamily: "monospace",
              }}
              key={index}
            >
              <span>/ {data.label}</span>
            </Link>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export { BreadCrumb };
