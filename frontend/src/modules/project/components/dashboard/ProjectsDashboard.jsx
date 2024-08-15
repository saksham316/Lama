import React, { useState } from "react";
import { ButtonField } from "../../../../shared/components/molecules/buttonField/ButtonField";
import { CreateNewProjectBtn } from "../button/CreateNewProjectBtn";
import { GoHome } from "react-icons/go";
import styles from "./projectsDashboard.module.css";
import { Modal } from "../../../../shared/components/molecules/modal/Modal";
import { Card } from "../../../../shared/components/atoms/card/Card";

const ProjectsDashboard = ({ projectsList }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className={`${styles.container}`}
      style={{
        width: "100%",
        height: "100%",
        padding: "0px 100px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {projectsList.length === 0 ? (
        <>
          <div
            className={`${styles.title}`}
            style={{
              textAlign: "center",
              fontSize: "50px",
              fontWeight: "bolder",
              color: "#9448d6",
              fontFamily: "monospace",
            }}
          >
            Create a New Project
          </div>
          <div
            className="banner"
            style={{
              width: "100%",
              height: "300px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="./images/project/dashboardBanner.jpg"
              style={{ position: "absolute", width: "400px", height: "300px" }}
            />
          </div>
          <p
            className={`${styles.content}`}
            style={{ textAlign: "center", color: "gray", fontSize: "22px" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ipsa,
            quam nobis consequuntur culpa est quisquam eaque ab beatae illum eos
            dignissimos dolores id aspernatur et doloribus molestiae dolorum
            sequi unde! Velit vitae minima nemo animi, autem totam ut quaerat!
          </p>
          <div
            className={`${styles.createNewProjectBtn}`}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <CreateNewProjectBtn
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </div>
        </>
      ) : (
        <>
          <div className={`${styles.projectsListHeader}`}>
            <h4
              style={{
                color: "#9448d6",
              }}
            >
              Projects
            </h4>
            <CreateNewProjectBtn
              container2={projectsList.length}
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </div>
          <div className={`${styles.projectsList}`} style={{ height: "450px" }}>
            {projectsList &&
              projectsList.map((project) => {
                return <Card text={"SP"} title={""} description={""} />;
              })}
          </div>
        </>
      )}
      {openModal && (
        <Modal
          inputFields={[{ label: "Project Name", name: "projectName" }]}
          buttonFields={[
            {
              label: "Cancel",
              onClick: () => {
                setOpenModal(false);
              },
              type: "button",
            },
            { label: "Create", onClick: () => {}, type: "submit" },
          ]}
          title={"Create Project"}
        />
      )}
    </div>
  );
};

export { ProjectsDashboard };
