import React from "react";

export const Button = ({
  title,
  color,
  bgColor,
  w,
  radius,
  borderColor,
  ...props
}) => {
  return (
    <button
      {...props}
      style={{
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
    >
      {title}
    </button>
  );
};
