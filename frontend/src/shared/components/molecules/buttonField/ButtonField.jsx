import React from "react";
import { Button } from "../../atoms/button/Button";
import styles from "./buttonField.module.css";

export const ButtonField = ({ icon: Icon, w, ...props }) => {
  return (
    <div style={{ width: "40%" }} className={`${styles.container}`}>
      <div
        className="button"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {Icon ? (
          <div
            style={{
              display: "flex",
              border: "1px solid gray",
              padding: "4px",
              borderRadius: "20px",
              gap: "5px",
            }}
          >
            <Icon />{" "}
            <Button
              style={{ border: "0px", backgroundColor: "white" }}
              {...props}
            />
          </div>
        ) : (
          <Button {...props} />
        )}
      </div>
    </div>
  );
};
