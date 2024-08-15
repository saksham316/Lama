// ------------------------------------------------Imports--------------------------------------------------------
import React from "react";
import { Logo } from "../../../../shared/components/atoms/logo/Logo";
import { GoGear } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ProjectHeader } from "../../components/layout/header/ProjectHeader";
import { iconSize } from "../../utils/constants";
import { ProjectsDashboard } from "../../components/dashboard/ProjectsDashboard";
import { Outlet, useParams } from "react-router-dom";
import { ProjectSidebar } from "../../components/layout/sidebar/ProjectSidebar";
import { BreadCrumb } from "../../../../shared/components/molecules/breadCrumb/BreadCrumb";
import { MdLogout } from "react-icons/md";
import styles from "./manageProjects.module.css";

// -----------------------------------------------------------------------------------------------------------------

const ManageProjects = () => {
  // ------------------------------------------------Hooks--------------------------------------------------------
  const { project_id } = useParams();

  // ----------------------------------------------------------------------------------------------------------------
  // leftComponent
  const leftComponent = () => {
    return !project_id ? <Logo /> : <BreadCrumb />;
  };

  // rightComponent
  const rightComponent = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {!project_id && <GoGear size={iconSize} />}
        <IoIosNotificationsOutline size={iconSize} />
        {project_id && <MdLogout size={iconSize} color="red" />}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: `${project_id ? "row" : "column"}`,
      }}
    >
      {project_id && (
        <div
          className={`${styles.projectSidebar}`}
          style={{
            width: "300px",
            height: "100%",
            boxShadow: "1px 1px 10px 1px #e8e2e2",
          }}
        >
          <ProjectSidebar />
        </div>
      )}
      <div
        style={{
          width: `${project_id ? "calc(100% - 300px)" : "100%"}`,
          height: "100%",
        }}
      >
        <div style={{ width: "100%", height: "80px" }}>
          <ProjectHeader
            leftComponent={leftComponent}
            rightComponent={rightComponent}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "calc(100% - 80px)",
          }}
        >
          {!project_id ? (
            <ProjectsDashboard projectsList={[1, 2, 3, 4, 5]} />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
};

export { ManageProjects };
