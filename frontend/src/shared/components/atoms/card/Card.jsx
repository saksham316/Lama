import React from "react";
import styles from "./card.module.css";

const Card = ({
  logo,
  text,
  title,
  description,
  logoLocation,
  logoSize,
  onClick,
}) => {
  return (
    <div
      className={`${styles.container}`}
      onClick={onClick}
      style={{
        width: "100%",
        minWidth: "170px",
        maxWidth: "300px",
        height: "150px",
        borderRadius: "15px",
        boxShadow: "2px 2px 7px 3px gray",
        cursor: "pointer",
        ...(logoLocation &&
          logoLocation === "right" && {
            gridTemplateColumns: "1fr 130px",
          }),
      }}
    >
      <div
        className={`${styles.logo}`}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: `${logo ? "white" : "pink"}`,
          borderRadius: "10px",
          ...(logoLocation &&
            logoLocation === "right" && {
              gridColumnStart: 2,
              gridColumnEnd: 3,
            }),
        }}
      >
        {logo ? (
          <img
            src={logo}
            style={{
              width: logoSize ? logoSize : "100%",
              height: logoSize ? logoSize : "100%",
              top: logoSize ? "50%" : 0,
              left: logoSize ? "50%" : 0,
              ...(logoSize && { transform: "translate(-50%,-50%)" }),
              position: "absolute",
            }}
          />
        ) : (
          <p
            style={{
              fontSize: "40px",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              color: "white",
              letterSpacing: "3px",
            }}
          >
            {text}
          </p>
        )}
      </div>
      <h4 className={`${styles.title}`} style={{ textOverflow: "ellipsis" }}>
        {title}
      </h4>
      <p
        className={`${styles.description}`}
        style={{ textOverflow: "ellipsis" }}
      >
        {description}
      </p>
    </div>
  );
};

export { Card };
