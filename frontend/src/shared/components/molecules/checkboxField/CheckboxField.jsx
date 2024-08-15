import React from "react";
import Checkbox from "../../atoms/checkbox/Checkbox";

const CheckboxField = ({ title }) => {
  return (
    <div style={{ width: "100%", display: "flex", gap: "5px",alignItems:"center" }}>
      <Checkbox />
      <p style={{ fontSize: "1vw" }}>{title}</p>
    </div>
  );
};

export { CheckboxField };
