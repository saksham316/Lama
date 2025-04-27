import React from "react";
import styles from "./input.module.css";

const Input = React.forwardRef(({ register, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`${styles.input}`}
      {...props}
      style={{
        padding: "20px",
        borderRadius: "7px",
        color: "gray",
        ...(props.w === "full" ? { width: "100%" } : {}),
      }}
    />
  );
});

export default Input;
