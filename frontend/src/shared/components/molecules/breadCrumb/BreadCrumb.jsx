import React from "react";
import { FcHome } from "react-icons/fc";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import styles from "./breadCrumb.module.css";

const BreadCrumb = ({ crumbData = [] }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
        width: "100%",
        height: "100%",
        fontSize: "1.2rem",
        color: "#999999",
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
          fontWeight: "bolder",
          color: "#999999",
          fontFamily: "monospace",
        }}
      >
        <GoHome />
        <span className={styles.slug_path}>Home</span>
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
                fontWeight: "bolder",
                color: "#999999",
                fontFamily: "monospace",
              }}
              key={index}
            >
              /
              <span style={{ color: "#7e22ce" }} className={styles.slug_path}>
                {" "}
                {data.label}
              </span>
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
                color: "#999999",
                fontWeight: "bolder",
                fontFamily: "monospace",
              }}
              key={index}
            >
              <span className={styles.slug_path}>/ {data.label}</span>
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
