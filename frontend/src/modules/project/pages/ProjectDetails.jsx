import React, { useEffect, useState } from "react";
import { Modal } from "../../../shared/components/molecules/modal/Modal";
import { AddPodcast } from "../components/AddPodcast";
import { getProjectFiles } from "../../../redux/project/projectAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddNewFileModal from "../components/AddNewFileModal";

const ProjectDetails = () => {
  // -----------------------------------------------States--------------------------------------------------------
  const [openModal, setOpenModal] = useState(false);

  // ------------------------------------------------Hooks--------------------------------------------------------
  const dispatch = useDispatch();
  const { project_id } = useParams();
  const { projectFiles } = useSelector((state) => state.project);

  // ----------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    dispatch(getProjectFiles(project_id));
  }, []);
  return (
    <div>
      <AddPodcast setOpenModal={setOpenModal} files={projectFiles ?? []} />
      {openModal && (
        <Modal>
          <AddNewFileModal
            onClose={() => {
              setOpenModal(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export { ProjectDetails };
