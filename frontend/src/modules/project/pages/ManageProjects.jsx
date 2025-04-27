// ------------------------------------------------Imports--------------------------------------------------------
import React, { useEffect } from "react";
import { GoGear } from "react-icons/go";
import { ProjectHeader } from "../components/ProjectHeader";
import { iconSize } from "../utils/constants";
import { ProjectsDashboard } from "../components/ProjectsDashboard";
import { Outlet, useParams } from "react-router-dom";
import { ProjectSidebar } from "../components/ProjectSidebar";
import { BreadCrumb } from "../../../shared/components/molecules/breadCrumb/BreadCrumb";
import { MdLogout } from "react-icons/md";
import styles from "./styles/manageProjects.module.css";
import { FaRegBell } from "react-icons/fa6";
import { Logo } from "../../../shared/components/atoms/logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../redux/project/projectAction";

// -----------------------------------------------------------------------------------------------------------------

const ManageProjects = () => {
  // -----------------------------------------------States--------------------------------------------------------
  const { projects, pathSlugs } = useSelector((state) => state.project);

  // ------------------------------------------------Hooks--------------------------------------------------------
  const dispatch = useDispatch();
  const { project_id } = useParams();

  // ----------------------------------------------------------------------------------------------------------------

  // leftComponent
  const leftComponent = () => {
    return !project_id ? <Logo /> : <BreadCrumb crumbData={pathSlugs} />;
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
        {!project_id && (
          <GoGear size={iconSize} style={{ strokeWidth: ".5" }} />
        )}
        <FaRegBell size={iconSize} />

        {project_id && (
          <MdLogout
            size={iconSize}
            color="red"
            style={{ cursor: "pointer" }}
            onClick={(e) => {}}
          />
        )}
      </div>
    );
  };

  useEffect(() => {
    dispatch(getProjects());
  }, []);
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
            <ProjectsDashboard projectsList={projects ?? []} />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
};

export { ManageProjects };
