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
        minWidth: "120px",
        maxWidth: "320px",
        height: "120px",
        borderRadius: "15px",
        border: "1px solid #999999",
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
          backgroundColor: `${logo ? "white" : "#F8A01D"}`,
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
              fontWeight: "bolder",
              color: "white",
              letterSpacing: "3px",
            }}
          >
            {text}
          </p>
        )}
      </div>
      <div className={styles.text_container}>
        <div>
          <p className={`${styles.title}`}>{title}</p>
          <p className={`${styles.description}`}>{description}</p>
        </div>
        <p className={styles.editTime}>Last edited a week ago</p>
      </div>
    </div>
  );
};

export { Card };
