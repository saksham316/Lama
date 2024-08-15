import React from "react";
import { GoGear } from "react-icons/go";
import { Logo } from "../../../../../shared/components/atoms/logo/Logo";
import { PROJECT_SIDEBAR_OPTIONS } from "../../../utils/constants";
import styles from "./projectSidebar.module.css";

const ProjectSidebar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="projectSidebarOptions"
        style={{
          width: "calc(100% - 100px)",
          gridTemplateColumns: "auto",
          height: "100%",
        }}
      >
        <div
          className="projectSidebarLogo"
          style={{ height: "100px", display: "flex", alignItems: "center" }}
        >
          <div style={{ width: "130px", height: "30px" }}>
            <Logo />
          </div>
        </div>
        {PROJECT_SIDEBAR_OPTIONS.map((option) => {
          return (
            <div
              className={`${styles.options}`}
              style={{
                height: "50px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              {option.icon}
              <span>{option.name}</span>
            </div>
          );
        })}

        <hr style={{ marginTop: "30px" }} />
        <div
          className="settings"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "250px",
          }}
        >
          <GoGear style={{ cursor: "pointer" }} />
          <span style={{ cursor: "pointer" }}>Help</span>
        </div>
        <hr style={{ marginTop: "30px" }} />
      </div>
    </div>
  );
};

export { ProjectSidebar };
