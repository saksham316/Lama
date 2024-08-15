import React from "react";

const Logo = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src="/images/logo/companyLogo.jpg"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

export { Logo };
