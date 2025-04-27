import React from "react";
import Input from "../../atoms/input/Input";
import styles from "./inputField.module.css";

export const InputField = React.forwardRef(
  (
    { errorMessage, w, errorLocation, labelLocation, label, ...inputProps },
    ref
  ) => {
    return (
      <div
        style={{
          width: `${w === "full" ? "100%" : "70%"}`,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        {label && (
          <p
            style={{
              width: "100%",
              padding: "2px",
              margin: "1px",
              display: "flex",
              justifyContent: `${
                labelLocation === "start" ? "start" : "center"
              }`,
              fontSize: "16px",
            }}
          >
            {label}:
          </p>
        )}
        <div
          className={styles.main_container}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Input {...inputProps} w={w} ref={ref} />
        </div>
        {errorMessage && (
          <p
            style={{
              width: "100%",
              padding: "2px",
              margin: "1px",
              display: "flex",
              justifyContent: `${
                errorLocation === "start" ? "start" : "center"
              }`,
              color: "red",
              fontSize: "15px",
            }}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
