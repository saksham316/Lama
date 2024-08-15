import React from "react";

const ActionButton = ({
  actions = [{ label: "View" }, { label: "Delete", color: "red" }],
}) => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      {actions.map((action, index) => {
        const { label, color } = action;
        return (
          <button
            style={{
              border: "1px solid gray",
              backgroundColor: "white",
              padding: "10px",
              width: "60px",
              borderRight: "1px solid gray",
              color: color ? color : "black",
              fontWeight: "bold",
              cursor: "pointer",
              ...(index !== actions.length - 1 && { borderRight: "0px" }),
              ...(index === 0 && {
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }),
              ...(index === actions.length - 1 && {
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }),
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export { ActionButton };
