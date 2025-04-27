import React, { useState } from "react";
import { CreateNewProjectBtn } from "./CreateNewProjectBtn";
import styles from "./styles/projectsDashboard.module.css";
import { Modal } from "../../../shared/components/molecules/modal/Modal";
import { Card } from "../../../shared/components/atoms/card/Card";
import AddNewProjectModal from "./AddNewProjectModal";
import { setProjectPathSlugs } from "../../../redux/project/projectSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProjectsDashboard = ({ projectsList }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.container}`}
      style={{
        width: "100%",
        padding: "20px 65px 0px 85px",
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
              fontSize: "45px",
              fontWeight: "bolder",
              color: "#7E22CE",
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
            style={{ textAlign: "center", color: "#838383", fontSize: "20px" }}
          >
            <span style={{ width: "70%", display: "inline-block" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              ipsa, quam nobis consequuntur culpa est quisquam eaque ab beatae
              illum eos dignissimos dolores id aspernatur et doloribus molestiae
              dolorum sequi unde! Velit vitae minima nemo animi, autem totam ut
              quaerat!
            </span>
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
        <div className={styles.project_list_container}>
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
                return (
                  <>
                    <Card
                      text={"SP"}
                      title={project.projectName ?? ""}
                      description={project.createdAt.split("T")[0] ?? ""}
                      onClick={async () => {
                        await dispatch(
                          setProjectPathSlugs([
                            {
                              label: project.projectName ?? "",
                              path: "/manage-projects",
                            },
                            {
                              label: "Add your podcast",
                              path: "",
                            },
                          ])
                        );
                        navigate(`${project._id}`);
                      }}
                    />
                  </>
                );
              })}
          </div>
        </div>
      )}
      {openModal && (
        <Modal>
          <AddNewProjectModal
            onCancel={() => {
              setOpenModal(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export { ProjectsDashboard };
