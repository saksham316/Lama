import React from "react";
import styles from "./button.module.css";

export const Button = ({
  title,
  color,
  bgColor,
  w,
  padding,
  radius,
  borderColor,
  type,
  border,
  ...props
}) => {
  return (
    <button
      {...props}
      style={{
        border: border ? border : "",
        padding: "10px",
        borderRadius: radius ? radius : "5px",
        borderColor: borderColor ? borderColor : "gray",
        color: `${color ? color : "black"}`,
        backgroundColor: `${bgColor ? bgColor : "white"}`,
        boxShadow: "0",
        fontWeight: "bolder",
        cursor: "pointer",
        ...(w ? { width: `${w}` } : {}),
      }}
      className={styles.main_container}
      type={type || "button"}
    >
      {title}
    </button>
  );
};
