import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  return (
    <input
      className={`${styles.input}`}
      {...props}
      style={{
        padding: "10px",
        borderRadius: "7px",
        color: "gray",
        ...(props.w === "full" ? { width: "100%" } : {}),
      }}
    />
  );
};

export default Input;
