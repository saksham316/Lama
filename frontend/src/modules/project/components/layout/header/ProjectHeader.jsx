import React from "react";
import { useParams } from "react-router-dom";
import styles from "./projectHeader.module.css";

const ProjectHeader = ({
  leftComponent: LeftComponent,
  rightComponent: RightComponent,
}) => {
  const { project_id } = useParams();
  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className={`${styles.leftComponent}`}
        style={{
          width: `${project_id ? "500px" : "300px"}`,
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...(project_id && {
            paddingLeft: "50px",
            maxWidth: "600px",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }),
        }}
      >
        <div
          style={{ width: `${project_id ? "100%" : "130px"}`, height: "30px" }}
        >
          <LeftComponent />
        </div>
      </div>
      <div className={`${styles.rightComponent}`} style={{ width: "200px" }}>
        <RightComponent />
      </div>
    </div>
  );
};

export { ProjectHeader };
